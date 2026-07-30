import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import "./SarjanaHuruf.css";

import {
  hurufAsas,
  hurufAkademi,
  hurufMenara,
} from "../../../data/hurufQuestions";

const TOTAL_QUESTIONS = 20;
const ANSWER_DELAY = 750;

function playSound(fileName, volume = 0.5) {
  const audio = new Audio(`/sounds/${fileName}`);

  audio.volume = volume;
  audio.play().catch(() => {});
}

function shuffleArray(items) {
  const result = [...items];

  for (
    let index = result.length - 1;
    index > 0;
    index -= 1
  ) {
    const randomIndex = Math.floor(
      Math.random() * (index + 1)
    );

    [result[index], result[randomIndex]] = [
      result[randomIndex],
      result[index],
    ];
  }

  return result;
}

function prepareQuestions() {
  const allQuestions = [
    ...hurufAsas,
    ...hurufAkademi,
    ...hurufMenara,
  ];

  return shuffleArray(allQuestions)
    .slice(
      0,
      Math.min(
        TOTAL_QUESTIONS,
        allQuestions.length
      )
    )
    .map((question) => ({
      ...question,
      options: shuffleArray(question.options),
    }));
}

export default function SarjanaHuruf() {
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const [questions, setQuestions] = useState(
    () => prepareQuestions()
  );

  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [correctCount, setCorrectCount] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState(null);

  const [answerStatus, setAnswerStatus] =
    useState(null);

  const [result, setResult] = useState(null);

  const currentQuestion =
    questions[currentIndex];

  useEffect(() => {
    const bgMusic = new Audio("/sounds/boss.mp3");

    bgMusic.loop = true;
    bgMusic.volume = 0.2;

    bgMusic.play().catch(() => {});

    return () => {
      bgMusic.pause();
      bgMusic.currentTime = 0;

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function kembaliKeJejak() {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    navigate("/jejak-huruf");
  }

  function mulakanSarjana() {
    playSound("click.mp3", 0.35);

    setStarted(true);
    setCurrentIndex(0);
    setCorrectCount(0);
    setSelectedAnswer(null);
    setAnswerStatus(null);
    setResult(null);
  }

  function ulangSarjana() {
    setQuestions(prepareQuestions());
    setCurrentIndex(0);
    setCorrectCount(0);
    setSelectedAnswer(null);
    setAnswerStatus(null);
    setResult(null);
    setStarted(true);

    playSound("click.mp3", 0.35);
  }

  function tamatSarjana(finalScore) {
    const passed =
      finalScore === questions.length;

    if (passed) {
      localStorage.setItem(
        "sarjanaHurufDone",
        "true"
      );

      playSound("reward.mp3", 0.7);

      setResult({
        passed: true,
        score: finalScore,
        title: "Sarjana Huruf Selesai!",
        message:
          "Tahniah! Anda telah menguasai semua tahap Huruf.",
      });

      return;
    }

    playSound("wrong.mp3", 0.5);

    setResult({
      passed: false,
      score: finalScore,
      title: "Belum Mencapai Tahap Sarjana",
      message:
        "Sarjana Huruf memerlukan semua jawapan betul. Sila ulang semula cabaran.",
    });
  }

  function jawab(answer) {
    if (
      selectedAnswer !== null ||
      result ||
      !currentQuestion
    ) {
      return;
    }

    const isCorrect =
      answer === currentQuestion.answer;

    const updatedCorrectCount = isCorrect
      ? correctCount + 1
      : correctCount;

    setSelectedAnswer(answer);
    setAnswerStatus(
      isCorrect ? "correct" : "wrong"
    );

    if (isCorrect) {
      setCorrectCount(updatedCorrectCount);
      playSound("correct.mp3");
    } else {
      playSound("wrong.mp3");
    }

    const isLastQuestion =
      currentIndex === questions.length - 1;

    timeoutRef.current = window.setTimeout(
      () => {
        if (isLastQuestion) {
          tamatSarjana(updatedCorrectCount);
          return;
        }

        setCurrentIndex(
          (previousIndex) =>
            previousIndex + 1
        );

        setSelectedAnswer(null);
        setAnswerStatus(null);
      },
      ANSWER_DELAY
    );
  }

  function getAnswerClass(answer) {
    if (selectedAnswer === null) {
      return "";
    }

    if (answer === currentQuestion.answer) {
      return "sarjana-huruf-answer--correct";
    }

    if (answer === selectedAnswer) {
      return "sarjana-huruf-answer--wrong";
    }

    return "sarjana-huruf-answer--dimmed";
  }

  if (!questions.length) {
    return (
      <main className="sarjana-huruf-screen">
        <div className="sarjana-huruf-empty">
          Soalan Sarjana Huruf tidak ditemui.
        </div>
      </main>
    );
  }

  const progressPercentage =
    ((currentIndex + 1) /
      questions.length) *
    100;

  return (
    <main className="sarjana-huruf-screen">
      <div className="sarjana-huruf-frame">
        <div
          className="sarjana-huruf-background"
          aria-hidden="true"
        />

        <button
          type="button"
          className="sarjana-huruf-back"
          onClick={kembaliKeJejak}
        >
          ← Kembali
        </button>

        {!started ? (
          <section className="sarjana-huruf-intro">
            <span className="sarjana-huruf-intro-badge">
              CABARAN TERAKHIR
            </span>

            <h1>Sarjana Huruf</h1>

            <p className="sarjana-huruf-intro-text">
              Buktikan penguasaan anda terhadap
              jenis, fungsi dan penggunaan huruf.
            </p>

            <div className="sarjana-huruf-rules">
              <div>
                <strong>20</strong>
                <span>Soalan campuran</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Pilihan jawapan</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Syarat kelulusan</span>
              </div>
            </div>

            <p className="sarjana-huruf-warning">
              Tiada penerangan diberikan semasa
              cabaran berlangsung.
            </p>

            <button
              type="button"
              className="sarjana-huruf-start"
              onClick={mulakanSarjana}
            >
              Mulakan Cabaran
            </button>
          </section>
        ) : (
          <section className="sarjana-huruf-content">
            <header className="sarjana-huruf-header">
              <div>
                <span className="sarjana-huruf-level">
                  TAHAP SARJANA
                </span>

                <h1>Sarjana Huruf</h1>
              </div>

              <div className="sarjana-huruf-score">
                <span>Skor semasa</span>

                <strong>
                  {correctCount}/{questions.length}
                </strong>
              </div>
            </header>

            <div className="sarjana-huruf-progress">
              <div className="sarjana-huruf-progress-info">
                <span>
                  Soalan {currentIndex + 1}
                </span>

                <span>
                  daripada {questions.length}
                </span>
              </div>

              <div className="sarjana-huruf-progress-track">
                <div
                  className="sarjana-huruf-progress-fill"
                  style={{
                    width: `${progressPercentage}%`,
                  }}
                />
              </div>
            </div>

            <section className="sarjana-huruf-question">
                <h2 dir="auto">
                {currentQuestion.question}
              </h2>
            </section>

            <div className="sarjana-huruf-answer-list">
              {currentQuestion.options.map(
                (answer, index) => (
                  <button
                    type="button"
                    key={`${currentIndex}-${index}-${answer}`}
                    className={[
                      "sarjana-huruf-answer",
                      getAnswerClass(answer),
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    disabled={
                      selectedAnswer !== null
                    }
                    onClick={() => {
                      playSound(
                        "click.mp3",
                        0.3
                      );

                      jawab(answer);
                    }}
                  >
                    <span className="sarjana-huruf-answer-number">
                      {String.fromCharCode(
                        65 + index
                      )}
                    </span>

                    <span
                      className="sarjana-huruf-answer-text"
                      dir="auto"
                    >
                      {answer}
                    </span>
                  </button>
                )
              )}
            </div>

            <footer className="sarjana-huruf-navigation">
              {questions.map((_, index) => {
                const classes = [
                  "sarjana-huruf-question-number",
                ];

                if (index < currentIndex) {
                  classes.push(
                    "sarjana-huruf-question-number--done"
                  );
                }

                if (index === currentIndex) {
                  classes.push(
                    "sarjana-huruf-question-number--current"
                  );
                }

                return (
                  <span
                    key={index}
                    className={classes.join(" ")}
                  >
                    {index + 1}
                  </span>
                );
              })}
            </footer>

            {answerStatus && (
              <div
                className={[
                  "sarjana-huruf-feedback",
                  `sarjana-huruf-feedback--${answerStatus}`,
                ].join(" ")}
              >
                {answerStatus === "correct"
                  ? "Betul"
                  : "Belum tepat"}
              </div>
            )}
          </section>
        )}

        {result && (
          <div className="sarjana-huruf-result-overlay">
            <section
              className={[
                "sarjana-huruf-result",
                result.passed
                  ? "sarjana-huruf-result--passed"
                  : "sarjana-huruf-result--failed",
              ].join(" ")}
            >
              <div className="sarjana-huruf-result-icon">
                {result.passed ? "★" : "↻"}
              </div>

              <span className="sarjana-huruf-result-label">
                KEPUTUSAN AKHIR
              </span>

              <h2>{result.title}</h2>

              <div className="sarjana-huruf-final-score">
                <strong>{result.score}</strong>
                <span>
                  / {questions.length}
                </span>
              </div>

              <p>{result.message}</p>

              <div className="sarjana-huruf-result-actions">
                {!result.passed && (
                  <button
                    type="button"
                    onClick={ulangSarjana}
                  >
                    Ulang Sarjana Huruf
                  </button>
                )}

                <button
                  type="button"
                  onClick={kembaliKeJejak}
                >
                  Kembali ke Jejak Huruf
                </button>
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}