export class QuestionSession {
  constructor(questions = []) {
    this.questions = questions;

    this.currentIndex = 0;

    this.answers = [];

    this.startedAt = null;

    this.finishedAt = null;
  }

  start() {
    this.startedAt = Date.now();
  }

  current() {
    return this.questions[this.currentIndex] || null;
  }

  hasNext() {
    return this.currentIndex < this.questions.length - 1;
  }

  next() {
    if (this.hasNext()) {
      this.currentIndex++;
      return this.current();
    }

    this.finishedAt = Date.now();
    return null;
  }

  submit(result) {
    this.answers.push(result);
  }

  progress() {
    return {
      current: this.currentIndex + 1,
      total: this.questions.length,
      percent:
        this.questions.length === 0
          ? 0
          : Math.round(
              ((this.currentIndex + 1) / this.questions.length) * 100
            ),
    };
  }

  duration() {
    if (!this.startedAt) return 0;

    const end = this.finishedAt || Date.now();

    return Math.floor((end - this.startedAt) / 1000);
  }

  isFinished() {
    return this.currentIndex >= this.questions.length - 1;
  }
}