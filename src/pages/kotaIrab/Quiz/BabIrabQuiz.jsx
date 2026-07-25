import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  babIrabQuestions as irabQuestions,
} from "../../../data/babIrabQuestions";

import "./BabIrabQuiz.css";

const TOTAL_QUESTIONS = 10;
const ANSWER_DELAY = 700;

function shuffleArray(items) {
  const result = [...items];

  for (let index = result.length - 1; index > 0; index -= 1) {
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

export default function BabIrabQuiz() {
  const navigate = useNavigate();

  const questions = useMemo(
    () => prepareQuestions(irabQuestions),
    []
  );

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] =
    useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [finalResult, setFinalResult] = useState(null);

  const currentQuestion = questions[questionIndex];
  const totalQuestions = questions.length;

  const progress =
    totalQuestions > 0
      ? ((questionIndex + 1) / totalQuestions) * 100
      : 0;

  function handleAnswer(option) {
    if (
      selectedAnswer ||
      finalResult ||
      !currentQuestion
    ) {
      return;
    }

    setSelectedAnswer(option);

    const isCorrect =
      option === currentQuestion.answer;

    const updatedCorrectCount = isCorrect
      ? correctCount + 1
      : correctCount;

    const updatedWrongCount = isCorrect
      ? wrongCount
      : wrongCount + 1;

    setCorrectCount(updatedCorrectCount);
    setWrongCount(updatedWrongCount);

    window.setTimeout(() => {
      const isLastQuestion =
        questionIndex === totalQuestions - 1;

      if (isLastQuestion) {
        const passed =
          updatedCorrectCount === totalQuestions;

        if (passed) {
          localStorage.setItem(
            "babIrabQuizDone",
            "true"
          );

          localStorage.setItem(
            "perpustakaanNahuUnlocked",
            "true"
          );

          setFinalResult("passed");
        } else {
          setFinalResult("failed");
        }

        return;
      }

      setQuestionIndex(
        (previousIndex) => previousIndex + 1
      );

      setSelectedAnswer("");
    }, ANSWER_DELAY);
  }

  function handleFinishQuiz() {
    navigate("/kota-irab", {
      state: {
        correctCount,
        wrongCount,
        totalQuestions,
        passed: finalResult === "passed",
      },
    });
  }

  function handleRepeatQuiz() {
    window.location.reload();
  }

  function getOptionClass(option) {
    if (!selectedAnswer) {
      return "";
    }

    if (option === currentQuestion.answer) {
      return "correct";
    }

    if (option === selectedAnswer) {
      return "wrong";
    }

    return "inactive";
  }

  if (!currentQuestion) {
    return (
      <main className="bab-irab-screen">
        <p>Bank soalan Bab I‘rab belum tersedia.</p>

        <button
          type="button"
          onClick={() => navigate("/kota-irab")}
        >
          Kembali
        </button>
      </main>
    );
  }

  return (
    <main className="bab-irab-screen">
      <section className="bab-irab-stage">
        <img
          className="bab-irab-background"
          src="/images/kotaIrab/bg-latihan-irab.webp"
          alt=""
          draggable="false"
        />

        <button
          type="button"
          className="bab-irab-back-hotspot"
          onClick={() => navigate("/kota-irab")}
          aria-label="Kembali ke Kota I'rab"
          title="Kembali ke Kota I'rab"
        />

        <aside className="bab-irab-progress-content">
          <span className="bab-irab-progress-label">
            KEMAJUAN
          </span>

          <strong>
            Soalan {questionIndex + 1}
          </strong>

          <p>daripada {totalQuestions}</p>

          <div className="bab-irab-progress-track">
            <div
              className="bab-irab-progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </aside>

        <aside className="bab-irab-status-content">
          <span className="bab-irab-status-label">
            STATUS LATIHAN
          </span>

          <div className="bab-irab-status-row">
    <span>✔ Betul</span>
    <strong>{correctCount}</strong>
</div>

<div className="bab-irab-status-row">
    <span>✖ Belum Tepat</span>
    <strong>{wrongCount}</strong>
</div>
        </aside>

        <section className="bab-irab-question-area">
          {currentQuestion.vocabulary?.arabic && (
            <div className="bab-irab-vocabulary">
              <div className="bab-irab-arabic-line">
                <h2 dir="rtl" lang="ar">
                  {
                    currentQuestion.vocabulary
                      .arabic
                  }
                </h2>

                </div>

              <p>
                {
                  currentQuestion.vocabulary
                    .meaning
                }
              </p>
            </div>
          )}

          {currentQuestion.sentence && (
            <p
              className="bab-irab-sentence"
              dir="rtl"
              lang="ar"
            >
              {currentQuestion.sentence}
            </p>
          )}

          <p className="bab-irab-question">
            {currentQuestion.question}
          </p>

          <div className="bab-irab-options">
            {currentQuestion.options.map(
              (option, index) => (
                <button
                  key={`${currentQuestion.id}-${index}`}
                  type="button"
                  className={`bab-irab-option ${getOptionClass(
                    option
                  )}`}
                  onClick={() =>
                    handleAnswer(option)
                  }
                  disabled={Boolean(
                    selectedAnswer
                  )}
                >
                  {option}
                </button>
              )
            )}
          </div>
        </section>

        <nav
          className="bab-irab-question-navigation"
          aria-label="Kemajuan latihan"
        >
          {questions.map((question, index) => {
            const isCurrent =
              index === questionIndex;

            const isCompleted =
              index < questionIndex;

            return (
              <span
                key={question.id ?? index}
                className={[
                  "bab-irab-number",
                  isCurrent ? "current" : "",
                  isCompleted
                    ? "completed"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {index + 1}
              </span>
            );
          })}
        </nav>

        {finalResult && (
  <div className="bab-irab-result-overlay">
    <section
      className={`bab-irab-result-card ${finalResult}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="bab-irab-result-title"
    >
      {finalResult === "passed" ? (
        <>
          <span className="bab-irab-result-arabic">
            تهنئة      </span>

          <h2 id="bab-irab-result-title">
            TAHNIAH!
          </h2>

          <p className="bab-irab-result-message">
            Anda berjaya menamatkan latihan Bab I‘rab.
          </p>

          <div className="bab-irab-result-score">
            <span>Markah Anda</span>
            <strong>
              {correctCount} / {totalQuestions}
            </strong>
          </div>

          <button
            type="button"
            className="bab-irab-result-button passed"
            onClick={handleFinishQuiz}
          >
            TERUSKAN
          </button>
        </>
      ) : (
        <>
          <span className="bab-irab-result-icon">
            📖
          </span>

          <h2 id="bab-irab-result-title">
            BELUM BERJAYA
          </h2>

          <p className="bab-irab-result-message">
            Anda belum menguasai latihan ini.
            Sila ulangi.
          </p>

          <div className="bab-irab-result-score">
            <span>Markah Anda</span>
            <strong>
              {correctCount} / {totalQuestions}
            </strong>
          </div>

          <p className="bab-irab-result-detail">
            Betul: {correctCount}
            <span aria-hidden="true"> • </span>
            Belum tepat: {wrongCount}
          </p>

          <button
            type="button"
            className="bab-irab-result-button failed"
            onClick={handleRepeatQuiz}
          >
            ULANGI LATIHAN
          </button>
        </>
      )}
    </section>
  </div>
)}
      </section>
    </main>
  );
}