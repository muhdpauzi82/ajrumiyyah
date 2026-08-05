import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { latihanCampuranQuestions } from
  "./latihanCampuranQuestions";

import "./LatihanCampuran.css";

const TOTAL_QUESTIONS = 10;
const ANSWER_DELAY = 1100;

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
  return shuffleArray(questionBank)
    .slice(
      0,
      Math.min(TOTAL_QUESTIONS, questionBank.length)
    )
    .map((question) => ({
      ...question,
      options: shuffleArray(question.options),
    }));
}

export default function LatihanCampuran() {
  const navigate = useNavigate();

  const questions = useMemo(
    () =>
      prepareQuestions(
        latihanCampuranQuestions
      ),
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

    setCorrectCount(
      (current) =>
        current + (isCorrect ? 1 : 0)
    );

    setWrongCount(
      (current) =>
        current + (isCorrect ? 0 : 1)
    );

    window.setTimeout(() => {
      if (isLastQuestion) {
        localStorage.setItem(
          "latihanIrabCampuranDone",
          "true"
        );

        localStorage.setItem(
          "lorongIrabDone",
          "true"
        );

        setPhase("result");
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
      return "ayat-answer";
    }

    if (option === currentQuestion.answer) {
      return "ayat-answer correct";
    }

    if (option === selectedAnswer) {
      return "ayat-answer wrong";
    }

    return "ayat-answer muted";
  }

  function restartQuiz() {
    window.location.reload();
  }

  if (phase === "result") {
    return (
      <main className="ayat-quiz-page campuran-theme">
        <section className="ayat-result-card">
          <span className="ayat-result-icon">
            🏆
          </span>

          <p className="ayat-result-kicker">
            LORONG LATIHAN SELESAI
          </p>

          <h1>Latihan Campuran</h1>

          <p>
            Anda telah menyelesaikan keempat-empat
            tahap Lorong Latihan I‘rab.
          </p>

          <div className="ayat-result-score">
            <div>
              <span>Betul</span>
              <strong>{correctCount}</strong>
            </div>

            <div>
              <span>Belum tepat</span>
              <strong>{wrongCount}</strong>
            </div>

            <div>
              <span>Jumlah</span>
              <strong>{questions.length}</strong>
            </div>
          </div>

          <div className="ayat-result-actions">
            <button
              type="button"
              onClick={restartQuiz}
            >
              Cuba Lagi
            </button>

            <button
              type="button"
              onClick={() =>
                navigate("/lorong-latihan-irab")
              }
            >
              Kembali ke Lorong
            </button>

            <button
              type="button"
              className="primary"
              onClick={() =>
                navigate("/kota-irab")
              }
            >
              Kembali ke Kota I‘rab →
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="ayat-quiz-page campuran-theme">
      <section className="ayat-quiz-frame">
        <header className="ayat-quiz-header">
          <button
            type="button"
            onClick={() =>
              navigate("/lorong-latihan-irab")
            }
          >
            ← Lorong Latihan
          </button>

          <div>
            <span>TAHAP 4 · CABARAN AKHIR</span>
            <h1>LATIHAN CAMPURAN</h1>
          </div>

          <strong>
            {questionIndex + 1}/
            {questions.length}
          </strong>
        </header>

        <div className="ayat-progress-track">
          <span
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <section className="ayat-question-area">
          <article
            key={currentQuestion.id}
            className="ayat-question-card"
          >
            <span className="campuran-category">
              {currentQuestion.category}
            </span>

            <span className="ayat-question-number">
              Soalan {questionIndex + 1}
            </span>

            <h2>{currentQuestion.question}</h2>

            <div
              className="ayat-arabic-sentence"
              dir="rtl"
              lang="ar"
            >
              {currentQuestion.sentenceParts.map(
                (part, index) => (
                  <span
                    key={`${currentQuestion.id}-${index}`}
                    className={
                      part.highlight
                        ? "ayat-target-word"
                        : ""
                    }
                  >
                    {part.text}
                  </span>
                )
              )}
            </div>

            <div className="ayat-target-label">
              <span>Perkataan dikaji</span>

              <strong
                dir="rtl"
                lang="ar"
              >
                {currentQuestion.target}
              </strong>
            </div>
          </article>

          <section className="ayat-answer-list">
            {currentQuestion.options.map(
              (option, index) => (
                <button
                  type="button"
                  key={`${currentQuestion.id}-${option}`}
                  className={getAnswerClass(
                    option
                  )}
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

          <aside className="ayat-feedback">
            {!selectedAnswer && (
              <strong>
                Pilih jawapan paling tepat
              </strong>
            )}

            {selectedAnswer ===
              currentQuestion.answer && (
              <>
                <strong className="correct">
                  Betul
                </strong>

                <p>
                  {
                    currentQuestion.explanation
                  }
                </p>
              </>
            )}

            {selectedAnswer &&
              selectedAnswer !==
                currentQuestion.answer && (
                <>
                  <strong className="wrong">
                    Belum tepat
                  </strong>

                  <p>
                    {
                      currentQuestion.explanation
                    }
                  </p>
                </>
              )}
          </aside>
        </section>

        <footer className="ayat-question-footer">
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