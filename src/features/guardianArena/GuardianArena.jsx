import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import {  completeGerbangKalam,} from "../../utils/gameProgress";

import "./styles/GuardianArena.css";
import "./styles/GuardianLayout.css";
import "./styles/GuardianHeader.css";
import "./styles/GuardianPanel.css";
import "./styles/GuardianCharacter.css";
import "./styles/GuardianAnswers.css";
import "./styles/GuardianProgress.css";
import "./styles/GuardianEffects.css";
import "./styles/GuardianResponsive.css";

import ChapterComplete from "../chapterComplete/ChapterComplete";
import { createGuardianQuestions } from "../../data/guardianQuestions";

const INTRO_TEXT = `Selamat datang, wahai penuntut ilmu.

Tahniah kerana berjaya mengatasi segala halangan sebelum ini.
Ini adalah ujian terakhir di Gerbang Kalam.
Semoga berjaya!`;

const GUARDIAN_IMAGES = {
  normal: "/images/guardian/kalam/guardian-normal.webp",
  smile: "/images/guardian/kalam/guardian-smile.webp",
  serious: "/images/guardian/kalam/guardian-serious.webp",
};

export default function GuardianArena() {
  const navigate = useNavigate();

  const [typedText, setTypedText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);

  const [phase, setPhase] = useState("intro");
  const [countdown, setCountdown] = useState(3);
  const [showCountdown, setShowCountdown] = useState(false);

  const [questionStage, setQuestionStage] = useState("idle");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState(() =>
    createGuardianQuestions()
  );

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerState, setAnswerState] = useState("idle");
  const [correctCount, setCorrectCount] = useState(0);

  const [guardianEmotion, setGuardianEmotion] =
    useState("normal");

  const bgAudioRef = useRef(null);
  const correctAudioRef = useRef(null);
  const wrongAudioRef = useRef(null);
  const answerTimerRef = useRef(null);
  const resultTimerRef = useRef(null);

  const currentQuestion = questions[questionIndex];
  const isPassed = correctCount === questions.length;

  /*
   * Sediakan audio kesan bunyi.
   */
  useEffect(() => {
    correctAudioRef.current = new Audio("/sounds/correct.mp3");
    wrongAudioRef.current = new Audio("/sounds/wrong.mp3");

    correctAudioRef.current.volume = 0.45;
    wrongAudioRef.current.volume = 0.4;

    return () => {
      if (correctAudioRef.current) {
        correctAudioRef.current.pause();
        correctAudioRef.current.currentTime = 0;
      }

      if (wrongAudioRef.current) {
        wrongAudioRef.current.pause();
        wrongAudioRef.current.currentTime = 0;
      }
    };
  }, []);

  /*
   * Muzik latar arena.
   */
  useEffect(() => {
    const bgAudio = new Audio("/sounds/boss.mp3");

    bgAudio.loop = true;
    bgAudio.volume = 0.22;

    bgAudioRef.current = bgAudio;

    const startAudio = () => {
      bgAudio.play().catch(() => {});
    };

    window.addEventListener("pointerdown", startAudio, {
      once: true,
    });

    return () => {
      window.removeEventListener("pointerdown", startAudio);

      bgAudio.pause();
      bgAudio.currentTime = 0;
    };
  }, []);

  /*
   * Hentikan muzik boss apabila masuk ke ChapterComplete.
   */
  useEffect(() => {
    if (phase !== "chapterComplete") return;

    if (bgAudioRef.current) {
      bgAudioRef.current.pause();
      bgAudioRef.current.currentTime = 0;
    }
  }, [phase]);

  /*
   * Animasi teks sambutan.
   */
  useEffect(() => {
    if (typedText.length >= INTRO_TEXT.length) {
      setTypingComplete(true);
      return;
    }

    const nextCharacter = INTRO_TEXT[typedText.length];
    let typingDelay = 35;

    if (nextCharacter === ",") {
      typingDelay = 120;
    }

    if (
      nextCharacter === "." ||
      nextCharacter === "!" ||
      nextCharacter === "?"
    ) {
      typingDelay = 500;
    }

    if (nextCharacter === "\n") {
      typingDelay = 250;
    }

    const timer = window.setTimeout(() => {
      setTypedText(
        INTRO_TEXT.slice(0, typedText.length + 1)
      );
    }, typingDelay);

    return () => window.clearTimeout(timer);
  }, [typedText]);

  /*
   * Countdown 3, 2, 1, MULA.
   */
  useEffect(() => {
    if (phase !== "countdown") return;

    if (countdown < 0) {
      setShowCountdown(false);
      setPhase("questionIntro");
      setQuestionStage("bookGlow");
      return;
    }

    const timer = window.setTimeout(() => {
      setCountdown((value) => value - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [phase, countdown]);

  /*
   * Animasi buku bercahaya dan soalan naik.
   */
  useEffect(() => {
    if (phase !== "questionIntro") return;

    if (questionStage === "bookGlow") {
      const timer = window.setTimeout(() => {
        setQuestionStage("questionRising");
      }, 500);

      return () => window.clearTimeout(timer);
    }

    if (questionStage === "questionRising") {
      const timer = window.setTimeout(() => {
        setQuestionStage("ready");
        setPhase("playing");
      }, 900);

      return () => window.clearTimeout(timer);
    }
  }, [phase, questionStage]);

  /*
   * Bersihkan semua timeout apabila keluar daripada halaman.
   */
  useEffect(() => {
    return () => {
      if (answerTimerRef.current) {
        window.clearTimeout(answerTimerRef.current);
      }

      if (resultTimerRef.current) {
        window.clearTimeout(resultTimerRef.current);
      }
    };
  }, []);

  const handleStartTest = () => {
    setPhase("countdown");
    setCountdown(3);
    setShowCountdown(true);
  };

  const handleAnswerClick = (index) => {
    if (
      answerState !== "idle" ||
      phase !== "playing" ||
      !currentQuestion
    ) {
      return;
    }

    const selectedValue = currentQuestion.options[index];
    const isCorrect =
      selectedValue === currentQuestion.answer;

    /*
     * Kira markah akhir secara terus.
     * Ini penting untuk soalan terakhir kerana state React
     * tidak dikemas kini serta-merta.
     */
    const nextCorrectCount = isCorrect
      ? correctCount + 1
      : correctCount;

    const feedbackAudio = isCorrect
      ? correctAudioRef.current
      : wrongAudioRef.current;

    if (feedbackAudio) {
      feedbackAudio.currentTime = 0;
      feedbackAudio.play().catch(() => {});
    }

    setGuardianEmotion(
      isCorrect ? "smile" : "serious"
    );

    if (isCorrect) {
      setCorrectCount(nextCorrectCount);
    }

    setSelectedAnswer(index);
    setAnswerState("selected");

    answerTimerRef.current = window.setTimeout(() => {
      setAnswerState(isCorrect ? "correct" : "wrong");
    }, 200);

    resultTimerRef.current = window.setTimeout(() => {
      setGuardianEmotion("normal");
      setSelectedAnswer(null);
      setAnswerState("idle");

      const isLastQuestion =
        questionIndex + 1 >= questions.length;

      if (isLastQuestion) {
  const passedAllQuestions =
    nextCorrectCount === questions.length;

if (passedAllQuestions) {
  completeGerbangKalam();
  setPhase("chapterComplete");
} else {
  setPhase("result");
}

  return;
}

      setQuestionIndex((value) => value + 1);
    }, 1400);
  };

  const handleRetry = () => {
    if (answerTimerRef.current) {
      window.clearTimeout(answerTimerRef.current);
    }

    if (resultTimerRef.current) {
      window.clearTimeout(resultTimerRef.current);
    }

    setQuestions(createGuardianQuestions());

    setQuestionIndex(0);
    setCorrectCount(0);

    setSelectedAnswer(null);
    setAnswerState("idle");
    setGuardianEmotion("normal");

    setQuestionStage("idle");

    setCountdown(3);
    setShowCountdown(true);
    setPhase("countdown");
  };

  const handleBack = () => {
    if (bgAudioRef.current) {
      bgAudioRef.current.pause();
      bgAudioRef.current.currentTime = 0;
    }

    navigate("/gerbang-kalam");
  };

  /*
   * ChapterComplete ialah paparan berasingan.
   * Ia tidak berada di dalam guardian-stage.
   */
  if (phase === "chapterComplete") {
    return (
      <ChapterComplete
        correctCount={correctCount}
        totalQuestions={questions.length}
      />
    );
  }

  return (
    <main className="guardian-screen">
      <section className="guardian-stage">
        <img
          className="guardian-background"
          src="/images/guardian/kalam/arena.webp"
          alt="Arena Penjaga Kalam"
          draggable="false"
        />

        {phase === "result" && isPassed && (
          <Confetti
            recycle={false}
            numberOfPieces={250}
            gravity={0.18}
            colors={[
              "#FFD700",
              "#F5C542",
              "#22C55E",
              "#FFFFFF",
            ]}
          />
        )}

        <img
          src={GUARDIAN_IMAGES[guardianEmotion]}
          className="guardian-character"
          alt="Penjaga Kalam"
          draggable="false"
        />

        <div
          className={`guardian-book-glow ${
            questionStage === "bookGlow"
              ? "is-active"
              : ""
          }`}
        />

        {phase === "questionIntro" && (
          <div
            className={`guardian-question-rising ${
              questionStage === "questionRising"
                ? "is-rising"
                : ""
            }`}
          >
            {currentQuestion?.question}
          </div>
        )}

        <button
          type="button"
          className="guardian-back-button"
          aria-label="Kembali"
          onClick={handleBack}
        >
          ←
        </button>

        <header className="guardian-title">
          <span>PENJAGA UTAMA</span>
          <strong>KALAM</strong>
        </header>

        {phase === "intro" && (
          <section className="guardian-question-panel">
            <span className="guardian-question-number">
              Fasa Sambutan
            </span>

            <div className="guardian-typing-text">
              {typedText
                .split("\n")
                .map((line, index) => (
                  <p key={index}>
                    {line || "\u00A0"}
                  </p>
                ))}
            </div>

            {typingComplete && (
              <button
                type="button"
                className="guardian-start-button"
                onClick={handleStartTest}
              >
                MULAKAN UJIAN
              </button>
            )}
          </section>
        )}

        {phase === "countdown" &&
          showCountdown && (
            <section className="guardian-question-panel">
              <div
                key={countdown}
                className="guardian-countdown-text"
              >
                {countdown === 0
                  ? "MULA"
                  : countdown}
              </div>
            </section>
          )}

        {phase === "playing" && currentQuestion && (
          <section className="guardian-question-panel">
            <span className="guardian-question-number">
              Soalan {questionIndex + 1} /{" "}
              {questions.length}
            </span>

            <p className="guardian-playing-question">
              {currentQuestion.question}
            </p>
          </section>
        )}

        {phase === "result" && (
          <section className="guardian-question-panel">
            <span className="guardian-question-number">
              Ujian Tamat
            </span>

            <p className="guardian-playing-question">
              Teruskan Usaha
            </p>

            <p>
              Anda belum berjaya menjawab semua
              soalan dengan betul.
            </p>

            <h2>
              {correctCount} / {questions.length}
            </h2>

            <p>
              Anda perlu mendapat markah penuh untuk
              membuka Kota I&apos;rab.
            </p>

            <button
              type="button"
              className="guardian-start-button"
              onClick={handleRetry}
            >
              CUBA LAGI
            </button>
          </section>
        )}

        <section className="guardian-progress">
          <div className="guardian-progress-frame">
            <div
              className="guardian-progress-fill"
              style={{
                width: `${
                  questions.length > 0
                    ? (correctCount /
                        questions.length) *
                      100
                    : 0
                }%`,
              }}
            />
          </div>

          <div className="guardian-progress-text">
            {correctCount} / {questions.length}
          </div>
        </section>

        <section className="guardian-hud">
          <div>
            <span>Betul</span>

            <strong>
              {correctCount} / {questions.length}
            </strong>
          </div>
        </section>

        <section className="guardian-crystal-status">
          <div className="crystal-value crystal-green" />
          <div className="crystal-value crystal-red" />
          <div className="crystal-value crystal-purple" />
        </section>

        {phase === "playing" && currentQuestion && (
          <section className="guardian-answer-area">
            {currentQuestion.options.map(
              (option, index) => {
                const isSelected =
                  selectedAnswer === index;

                const stateClass =
                  isSelected &&
                  answerState === "correct"
                    ? "correct"
                    : isSelected &&
                        answerState === "wrong"
                      ? "wrong"
                      : "";

                return (
                  <button
                    key={`${option}-${index}`}
                    type="button"
                    onClick={() =>
                      handleAnswerClick(index)
                    }
                    disabled={
                      answerState !== "idle"
                    }
                    className={[
                      "answer-stone",
                      isSelected
                        ? "selected"
                        : "",
                      stateClass,
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <span>{option}</span>
                  </button>
                );
              }
            )}
          </section>
        )}
      </section>
    </main>
  );
}