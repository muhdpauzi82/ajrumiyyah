import { useEffect, useState } from "react";
import "./GateChallenge.css";
import FallingWord from "./FallingWord";
import GateHUD from "./GateHUD";
import { useNavigate } from "react-router-dom";
import { gateGames } from "./gateGames";
import { gateWordBank } from "./gateWordBank";
import TeacherTyping from "../../components/TeacherTyping";
import CountUp from "./CountUp";
import {
  playAudio,
  stopAudio,
  playSfx,
  giveRewards,
} from "../../service";


export default function GateChallenge({ gameType = "isim" }) {
  const navigate = useNavigate();

  const config = gateGames[gameType] || gateGames.isim;

  const title = config.title || "Cabaran Gerbang";
  const instruction = config.instruction || "Tangkap perkataan yang betul";
  const targetType = config.targetType || "isim";
  const words = gateWordBank[gameType] || [];
  const duration = config.duration || 60;
  const target = config.target || 40;
  const scorePerCorrect = config.scorePerCorrect || 10;

  const [timeLeft, setTimeLeft] = useState(duration);
  const [life, setLife] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [floatingScores, setFloatingScores] = useState([]);
  const [activeWords, setActiveWords] = useState([]);
  const [finished, setFinished] = useState(false);
  const [teacherMessage, setTeacherMessage] = useState("Bersedia...");
  const [started, setStarted] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [rewardClaimed, setRewardClaimed] = useState(false);
  const [earnedReward, setEarnedReward] = useState(null);


  const totalAnswered = correctCount + wrongCount;

  const accuracy =
  totalAnswered === 0
    ? 0
    : Math.round((correctCount / totalAnswered) * 100);

  const success =
  correctCount >= target &&
  wrongCount === 0;


  useEffect(() => {
    if (!playing) return;

    playAudio("/sounds/bgm/gate-challenge.mp3", {
      loop: true,
      volume: 0.18,
    });

    return () => {
      stopAudio("/sounds/bgm/gate-challenge.mp3");
    };
  }, [playing]);

  useEffect(() => {
  if (!finished || rewardClaimed) return;

  if (!success) {
    setEarnedReward({
      xp: 0,
      coins: 0,
      gems: 0,
      badge: null,
    });

    setRewardClaimed(true);
    return;
  }

  const reward = {
    xp: 100 + correctCount * 2,
    coins: 25 + Math.floor(score / 20),
    gems: accuracy === 100 ? 2 : 1,
    badge:
      accuracy === 100
        ? `perfect-gate-${gameType}`
        : null,
  };

  giveRewards(reward);

  localStorage.setItem(
    `gate_${gameType}_done`,
    "true"
  );

  setEarnedReward(reward);
  setRewardClaimed(true);
}, [
  finished,
  rewardClaimed,
  success,
  correctCount,
  score,
  accuracy,
  gameType,
]);

  useEffect(() => {
  if (!finished) return;

  playSfx(
    success
      ? "/sounds/sfx/result-success.mp3"
      : "/sounds/sfx/result-fail.mp3",
    { volume: 0.45 }
  );
}, [finished, success]);

  useEffect(() => {
    if (!playing || finished) return;

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          finishGame();
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [playing, finished]);

  useEffect(() => {
    if (!playing || finished || words.length === 0) return;

    const spawner = setInterval(() => {
     const lanes = [10, 22, 34, 46, 58, 70, 82];

     
setActiveWords((prev) => {
  if (prev.length >= 7) return prev;

  const usedLanes = prev.map((item) => item.lane);
  const freeLanes = lanes.filter((lane) => !usedLanes.includes(lane));

  if (freeLanes.length === 0) return prev;

  const randomWord = words[Math.floor(Math.random() * words.length)];
  const lane = freeLanes[Math.floor(Math.random() * freeLanes.length)];
  
 
  return [
    ...prev,
    {
      ...randomWord,
      id: `${Date.now()}-${Math.random()}`,
      left: lane,
      lane,
      speed: Math.floor(Math.random() * 5) + 8,
    },
  ];
});
    }, 750);

    return () => clearInterval(spawner);
  }, [playing, finished, words]);
function startCountdown() {
  if (started) return;

  setStarted(true);
  setPlaying(false);

  playSfx("/sounds/sfx/321-go.mp3", {
    volume: 0.8,
  });

  // Selaraskan paparan dengan audio
  setCountdown(3);

  setTimeout(() => {
    setCountdown(2);
  }, 1000);

  setTimeout(() => {
    setCountdown(1);
  }, 2000);

  setTimeout(() => {
    setCountdown("MULA!");
  }, 3000);

  // Tamatkan countdown selepas audio GO selesai
  setTimeout(() => {
    setCountdown(null);
    setPlaying(true);
  }, 4300);
}

  function handleCatch(word) {
  const correct = word.type === targetType;

  playSfx(
  correct ? "/sounds/sfx/plus1.mp3" : "/sounds/sfx/minus1.mp3",
  { volume: 0.6 }
);

  setActiveWords((prev) => prev.filter((item) => item.id !== word.id));

  const floatId = `${Date.now()}-${Math.random()}`;

  setFloatingScores((prev) => [
    ...prev,
    {
      id: floatId,
      text: correct ? "+1" : "-1",
      left: word.left,
      top: 45,
      type: correct ? "correct" : "wrong",
    },
  ]);

  setTimeout(() => {
    setFloatingScores((prev) => prev.filter((item) => item.id !== floatId));
  }, 800);

  if (correct) {
    setCorrectCount((c) => c + 1);
    setScore((s) => s + scorePerCorrect);

    setCombo((currentCombo) => {
      const newCombo = currentCombo + 1;

      setTeacherMessage(
        newCombo >= 10
          ? "Hebat! Combo kamu semakin tinggi!"
          : "Bagus! Itu pilihan yang tepat."
      );

      return newCombo;
    });
  } else {
  setWrongCount((w) => w + 1);

  // Reset markah kerana berlaku kesalahan
  setScore(0);

  // Reset combo
  setCombo(0);

  setTeacherMessage(
    "❌ Berlaku kesalahan. Dalam nahu dan soraf, ketelitian sangat penting. Markah direset kepada 0."
  );
}
}

  function removeWord(id) {
    setActiveWords((prev) => prev.filter((item) => item.id !== id));
  }

 function finishGame() {
  if (finished) return;

  setPlaying(false);
  setFinished(true);
  setActiveWords([]);

  stopAudio("/sounds/bgm/gate-challenge.mp3");
}


if (finished) {
let grade = "Perlu Latihan";

if (success) {
  if (accuracy === 100) grade = "🏆 S+";
  else if (accuracy >= 95) grade = "🥇 S";
  else if (accuracy >= 90) grade = "A";
  else if (accuracy >= 80) grade = "B";
  else if (accuracy >= 70) grade = "C";
}
const finalScore = wrongCount > 0 ? 0 : score;
const highScoreKey = `rehat_minda_${gameType}_highscore`;
const oldHighScore = Number(localStorage.getItem(highScoreKey) || 0);
const isNewHighScore = score > oldHighScore;

if (isNewHighScore) {
  localStorage.setItem(highScoreKey, String(finalScore));
}

const displayHighScore = isNewHighScore ? finalScore : oldHighScore;

let finalMessage = "";

if (success) {
  if (accuracy >= 95) {
    finalMessage =
      "🌟 Masya-Allah! Kamu berjaya menyelesaikan cabaran tanpa sebarang kesalahan.";
  } else {
    finalMessage =
      "🎉 Syabas! Kamu berjaya mencapai sasaran permainan ini.";
  }
} else if (wrongCount > 0) {
  finalMessage =
    `❌ Terdapat ${wrongCount} kesalahan.Ulangi cabaran sehingga berjaya tanpa sebarang kesalahan.`;
} else if (correctCount < target) {
  finalMessage =
    `🎯 Kamu berjaya menangkap ${correctCount} daripada ${target} kalimah yang disasarkan.`;
}
  return (
    <div className="gate-start-screen">
      <div className="gate-start-card">
        <h1>
  {success
    ? "🏆 Cabaran Selesai!"
    : wrongCount > 0
      ? "📘 Rehat Tamat"
      : "💪 Teruskan Usaha"}
</h1>

        <p>{finalMessage}</p>

        <div className="gate-final-result">
  <div className="gate-result-stat stat-score">
    <span>Markah</span>
    ⭐ <CountUp end={score} />
  </div>

  <div className="gate-result-stat stat-record">
    <span>Rekod</span>
    🏆 <CountUp end={displayHighScore} />
  </div>

  <div className="gate-result-stat stat-combo">
    <span>Combo</span>
    🔥 <CountUp end={combo} />
  </div>

  <div className="gate-result-stat stat-correct">
    <span>Betul</span>
    ✅ <CountUp end={correctCount} />
  </div>

  <div className={`gate-result-stat stat-wrong ${wrongCount > 0 ? "danger-pulse" : ""}`}>
    <span>Salah</span>
    ❌ <CountUp end={wrongCount} />
  </div>

   <div className="gate-result-stat stat-time">
    <span>Masa Baki</span>
    ⏱ <CountUp end={timeLeft} suffix="s" />
  </div>

  <div className="gate-result-stat stat-grade">
    <span>Gred</span>
    🏅 {grade}
  </div>
  {success && earnedReward && (
  <div className="gate-reward-box">
    <h3>🎁 Ganjaran</h3>

    <div className="gate-reward-list">
      <span>⭐ +{earnedReward.xp} XP</span>
      <span>🪙 +{earnedReward.coins}</span>
      <span>💎 +{earnedReward.gems}</span>

      {earnedReward.badge && (
        <span>🏅 Perfect</span>
      )}
    </div>
  </div>
)}
</div>

        <button
          className="gate-start-button"
          onClick={() => navigate("/gerbang-kalam")}
        >
          🗺 Kembali ke Gerbang
        </button>

        <button
  className="gate-retry-button"
  onClick={() => {
    setTimeLeft(duration);
    setScore(0);
    setCombo(0);
    setCorrectCount(0);
    setWrongCount(0);
    setFloatingScores([]);
    setActiveWords([]);
    setFinished(false);
    setTeacherMessage("Bersedia...");
    setStarted(false);
    setCountdown(null);
    setPlaying(false);
    setRewardClaimed(false);
    setEarnedReward(null);
  }}
>
  🔄 Cuba Lagi
</button>
      </div>
    </div>
  );
}

  if (!started) {
    return (
      <div className="gate-result-screen">
        <div className="gate-start-card">
          <h1>{title}</h1>
          <p>{instruction}</p>

          <button
            className="gate-start-button"
            onClick={startCountdown}
          >
            Mula Cabaran
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="gate-challenge">
      <GateHUD
    title={title}
    instruction={instruction}
    timeLeft={timeLeft}
    score={score}
    combo={combo}
    correctCount={correctCount}
    target={target}
 />
{countdown && (
  <div className="gate-countdown">
    {countdown}
  </div>
)}
      <div className="gate-play-area">
        {floatingScores.map((item) => (
  <div
    key={item.id}
   className={`floating-score ${item.type}`}
    style={{
      left: `${item.left}%`,
      top: `${item.top}%`,
    }}
  >
    {item.text}
  </div>
))}
        {activeWords.map((word) => (
          <FallingWord
            key={word.id}
            word={word}
            onCatch={handleCatch}
            onMiss={removeWord}
          />
        ))}
      </div>

      <div className="gate-teacher-box">
        <div className="gate-teacher-avatar">👨‍🏫</div>
        <div className="gate-teacher-message">

    <TeacherTyping
        text={teacherMessage}
    />

      </div>
      </div>
    </div>
  );
}