import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { dewanQuestions } from "./dewanQuestions";
import "./DewanPengijazahan.css";

const TOTAL_QUESTIONS = 20;
const ANSWER_DELAY = 850;

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

function prepareQuestions(questionBank) {
  const keadaanQuestions = shuffleArray(
    questionBank.filter(
      (question) =>
        question.source === "keadaan"
    )
  ).slice(0, 5);

  const tandaQuestions = shuffleArray(
    questionBank.filter(
      (question) =>
        question.source === "tanda"
    )
  ).slice(0, 5);

  const ayatQuestions = shuffleArray(
    questionBank.filter(
      (question) =>
        question.source === "ayat"
    )
  ).slice(0, 10);

  return shuffleArray([
    ...keadaanQuestions,
    ...tandaQuestions,
    ...ayatQuestions,
  ]).map((question) => ({
    ...question,
    options: shuffleArray(question.options),
  }));
}

export default function DewanPengijazahan() {
  const navigate = useNavigate();

  const questions = useMemo(
    () => prepareQuestions(dewanQuestions),
    []
  );

  const [questionIndex, setQuestionIndex] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState(null);

  const [correctCount, setCorrectCount] =
    useState(0);

  const [wrongCount, setWrongCount] =
    useState(0);

  const [phase, setPhase] =
    useState("playing");

  const currentQuestion =
    questions[questionIndex];

  const isLastQuestion =
    questionIndex === questions.length - 1;

  const progress =
    ((questionIndex + 1) / questions.length) *
    100;

  function chooseAnswer(option) {
    if (
      selectedAnswer ||
      phase !== "playing"
    ) {
      return;
    }

    setSelectedAnswer(option);

    const isCorrect =
      option === currentQuestion.answer;

    const nextCorrectCount =
      correctCount + (isCorrect ? 1 : 0);

    const nextWrongCount =
      wrongCount + (isCorrect ? 0 : 1);

    setCorrectCount(nextCorrectCount);
    setWrongCount(nextWrongCount);

    window.setTimeout(() => {
      if (isLastQuestion) {
        const perfectScore =
          nextCorrectCount ===
          questions.length;

        if (perfectScore) {
          localStorage.setItem(
            "dewanIrabDone",
            "true"
          );

          localStorage.setItem(
            "istanaQadhiUnlocked",
            "true"
          );

          setPhase("passed");
        } else {
          setPhase("retry");
        }

        return;
      }

      setQuestionIndex(
        (current) => current + 1
      );

      setSelectedAnswer(null);
    }, ANSWER_DELAY);
  }

  function getAnswerClass(option) {
    if (!selectedAnswer) {
      return "dewan-answer";
    }

    if (option === currentQuestion.answer) {
      return "dewan-answer correct";
    }

    if (option === selectedAnswer) {
      return "dewan-answer wrong";
    }

    return "dewan-answer muted";
  }

  function ulangSemula() {
    window.location.reload();
  }

  if (phase === "retry") {
    return (
      <main className="dewan-page">
        <section className="dewan-frame">
          <img
            src="/images/kotaIrab/kitab-classroom-bg.webp"
            className="dewan-bg"
            alt=""
            draggable="false"
          />

          <section className="dewan-result retry">
            <span className="dewan-result-icon">
              📚
            </span>

            <span className="dewan-result-kicker">
              TERUSKAN USAHA
            </span>

            <h1>Sila Ulang Semula</h1>

            <p>
              Dewan Pengijazahan memerlukan
              semua jawapan dijawab dengan betul.
            </p>

            <div className="dewan-score-display">
              <strong>
                {correctCount} / {questions.length}
              </strong>

              <span>
                Markah penuh diperlukan: 20 / 20
              </span>
            </div>

            <button
              type="button"
              className="dewan-retry-button"
              onClick={ulangSemula}
            >
              ULANG SEMULA
            </button>
          </section>
        </section>
      </main>
    );
  }

  if (phase === "passed") {
    return (
      <main className="dewan-page">
        <section className="dewan-frame">
          <img
            src="/images/kotaIrab/kitab-classroom-bg.webp"
            className="dewan-bg"
            alt=""
            draggable="false"
          />

          <section className="dewan-result passed">
            <span
              className="dewan-congratulations"
              dir="rtl"
              lang="ar"
            >
              تَهَانِينَا
            </span>

            <span className="dewan-result-icon">
              🏆
            </span>

            <span className="dewan-result-kicker">
              PENGIJAZAHAN SELESAI
            </span>

            <h1>Tahniah!</h1>

            <p>
              Anda berjaya menjawab semua soalan
              Dewan Pengijazahan dengan betul.
            </p>

            <div className="dewan-perfect-score">
              20 / 20
            </div>

            <div className="dewan-certificate">
              <span>SIJIL PENGUASAAN</span>

              <strong>I‘RAB</strong>
            </div>

            <button
              type="button"
              className="dewan-palace-button"
              onClick={() =>
                navigate("/istana-qadhi-irab")
              }
            >
              MASUK KE ISTANA QADHI →
            </button>
          </section>
        </section>
      </main>
    );
  }

  return (
    <main className="dewan-page">
      <section className="dewan-frame">
        <img
          src="/images/kotaIrab/kitab-classroom-bg.webp"
          className="dewan-bg"
          alt=""
          draggable="false"
        />

        <header className="dewan-header">
          <button
            type="button"
            onClick={() =>
              navigate("/kota-irab")
            }
          >
            ← Kota I‘rab
          </button>

          <div>
            <span>LOKASI 5 · PEPERIKSAAN AKHIR</span>

            <h1>DEWAN PENGIJAZAHAN</h1>
          </div>

          <strong>
            {questionIndex + 1}/
            {questions.length}
          </strong>
        </header>

        <div className="dewan-progress-track">
          <span
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <section className="dewan-content">
          <article
            key={currentQuestion.id}
            className="dewan-question-panel"
          >
            <div className="dewan-question-meta">
              <span>
                {currentQuestion.category}
              </span>

              <strong>
                Soalan {questionIndex + 1}
              </strong>
            </div>

            <h2>{currentQuestion.question}</h2>

            <div
              className="dewan-arabic-sentence"
              dir="rtl"
              lang="ar"
            >
              {currentQuestion.sentenceParts.map(
                (part, index) => (
                  <span
                    key={`${currentQuestion.id}-${index}`}
                    className={
                      part.highlight
                        ? "dewan-target-word"
                        : ""
                    }
                  >
                    {part.text}
                  </span>
                )
              )}
            </div>

            {currentQuestion.target && (
              <div className="dewan-target-label">
                <span>Kalimah dikaji</span>

                <strong
                  dir="rtl"
                  lang="ar"
                >
                  {currentQuestion.target}
                </strong>
              </div>
            )}
          </article>

          <section className="dewan-answer-list">
            {currentQuestion.options.map(
              (option, index) => (
                <button
                  type="button"
                  key={`${currentQuestion.id}-${option}`}
                  className={getAnswerClass(option)}
                  disabled={Boolean(
                    selectedAnswer
                  )}
                  onClick={() =>
                    chooseAnswer(option)
                  }
                >
                  <span>
                    {String.fromCharCode(
                      65 + index
                    )}
                  </span>

                  <strong
                    dir="rtl"
                    lang="ar"
                  >
                    {option}
                  </strong>
                </button>
              )
            )}
          </section>

          <aside className="dewan-feedback">
            {!selectedAnswer && (
              <strong>
                Pilih jawapan paling tepat
              </strong>
            )}

            {selectedAnswer ===
              currentQuestion.answer && (
              <strong className="correct">
                ✓ Betul
              </strong>
            )}

            {selectedAnswer &&
              selectedAnswer !==
                currentQuestion.answer && (
                <strong className="wrong">
                  Belum tepat
                </strong>
              )}
          </aside>
        </section>

        <footer className="dewan-footer">
          {questions.map((question, index) => (
            <span
              key={question.id}
              className={[
                index === questionIndex
                  ? "active"
                  : "",
                index < questionIndex
                  ? "completed"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {index + 1}
            </span>
          ))}
        </footer>
      </section>
    </main>
  );
}