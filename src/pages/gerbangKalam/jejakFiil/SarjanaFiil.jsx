import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import "./SarjanaFiil.css";

import {
  fiilAsas,
  fiilAkademi,
  fiilMenara,
} from "../../../data/fiilQuestions";

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
    ...fiilAsas,
    ...fiilAkademi,
    ...fiilMenara,
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

export default function SarjanaFiil() {
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

  const progressPercentage =
    questions.length > 0
      ? ((currentIndex + 1) /
          questions.length) *
        100
      : 0;

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

    navigate("/jejak-fiil");
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
        "sarjanaFiilDone",
        "true"
      );

      playSound("reward.mp3", 0.7);

      setResult({
        passed: true,
        score: finalScore,
        title: "Sarjana Fi‘il Selesai!",
        message:
          "Tahniah! Anda telah menguasai semua tahap Fi‘il.",
      });

      return;
    }

    playSound("wrong.mp3", 0.5);

    setResult({
      passed: false,
      score: finalScore,
      title: "Belum Mencapai Tahap Sarjana",
      message:
        "Sarjana Fi‘il memerlukan semua jawapan betul. Sila ulang semula cabaran.",
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
      return "sarjana-fiil-answer--correct";
    }

    if (answer === selectedAnswer) {
      return "sarjana-fiil-answer--wrong";
    }

    return "sarjana-fiil-answer--dimmed";
  }

  if (!questions.length) {
    return (
      <main className="sarjana-fiil-screen">
        <div className="sarjana-fiil-empty">
          Soalan Sarjana Fi‘il tidak ditemui.
        </div>
      </main>
    );
  }

  return (
    <main className="sarjana-fiil-screen">
      <div className="sarjana-fiil-frame">
        <div
          className="sarjana-fiil-background"
          aria-hidden="true"
        />

        <button
          type="button"
          className="sarjana-fiil-back"
          onClick={kembaliKeJejak}
        >
          ← Kembali
        </button>

        {!started ? (
          <section className="sarjana-fiil-intro">
            <div className="sarjana-fiil-intro-badge">
              CABARAN TERAKHIR
            </div>

            <h1>Sarjana Fi‘il</h1>

            <p className="sarjana-fiil-intro-text">
              Buktikan penguasaan anda terhadap
              fi‘il māḍī, muḍāri‘ dan amar.
            </p>

            <div className="sarjana-fiil-rules">
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

            <p className="sarjana-fiil-warning">
              Tiada penerangan diberikan semasa
              cabaran berlangsung.
            </p>

            <button
              type="button"
              className="sarjana-fiil-start"
              onClick={mulakanSarjana}
            >
              Mulakan Cabaran
            </button>
          </section>
        ) : (
          <section className="sarjana-fiil-content">
            <header className="sarjana-fiil-header">
              <div>
                <span className="sarjana-fiil-level">
                  TAHAP SARJANA
                </span>

                <h1>Sarjana Fi‘il</h1>
              </div>

              <div className="sarjana-fiil-score">
                <span>Skor semasa</span>
                <strong>
                  {correctCount}/{questions.length}
                </strong>
              </div>
            </header>

            <div className="sarjana-fiil-progress">
              <div className="sarjana-fiil-progress-info">
                <span>
                  Soalan {currentIndex + 1}
                </span>

                <span>
                  daripada {questions.length}
                </span>
              </div>

              <div className="sarjana-fiil-progress-track">
                <div
                  className="sarjana-fiil-progress-fill"
                  style={{
                    width: `${progressPercentage}%`,
                  }}
                />
              </div>
            </div>

            <section className="sarjana-fiil-question">
              <span>SOALAN</span>

              <h2
                dir="auto"
                lang="ar"
              >
                {currentQuestion.question}
              </h2>
            </section>

            <div className="sarjana-fiil-answer-list">
              {currentQuestion.options.map(
                (answer, index) => (
                  <button
                    type="button"
                    key={`${currentIndex}-${index}-${answer}`}
                    className={[
                      "sarjana-fiil-answer",
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
                    <span className="sarjana-fiil-answer-number">
                      {String.fromCharCode(
                        65 + index
                      )}
                    </span>

                    <span
                      className="sarjana-fiil-answer-text"
                      dir="rtl"
                      lang="ar"
                    >
                      {answer}
                    </span>
                  </button>
                )
              )}
            </div>

            <footer className="sarjana-fiil-navigation">
              {questions.map((_, index) => {
                const classes = [
                  "sarjana-fiil-question-number",
                ];

                if (index < currentIndex) {
                  classes.push(
                    "sarjana-fiil-question-number--done"
                  );
                }

                if (index === currentIndex) {
                  classes.push(
                    "sarjana-fiil-question-number--current"
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
                  "sarjana-fiil-feedback",
                  `sarjana-fiil-feedback--${answerStatus}`,
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
          <div className="sarjana-fiil-result-overlay">
            <section
              className={[
                "sarjana-fiil-result",
                result.passed
                  ? "sarjana-fiil-result--passed"
                  : "sarjana-fiil-result--failed",
              ].join(" ")}
            >
              <div className="sarjana-fiil-result-icon">
                {result.passed ? "★" : "↻"}
              </div>

              <span className="sarjana-fiil-result-label">
                KEPUTUSAN AKHIR
              </span>

              <h2>{result.title}</h2>

              <div className="sarjana-fiil-final-score">
                <strong>{result.score}</strong>
                <span>
                  / {questions.length}
                </span>
              </div>

              <p>{result.message}</p>

              <div className="sarjana-fiil-result-actions">
                {!result.passed && (
                  <button
                    type="button"
                    onClick={ulangSarjana}
                  >
                    Ulang Sarjana Fi‘il
                  </button>
                )}

                <button
                  type="button"
                  onClick={kembaliKeJejak}
                >
                  Kembali ke Jejak Fi‘il
                </button>
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}