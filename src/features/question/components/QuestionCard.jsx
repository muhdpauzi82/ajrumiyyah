import { Card, Badge, ProgressBar } from "../../../ui";

export default function QuestionCard({
  question,
  currentIndex,
  total,
  children,
}) {
  if (!question) return null;

  return (
    <Card variant="default" padding="large">
      <Badge variant="gold">Soalan {currentIndex + 1} / {total}</Badge>

      <ProgressBar value={currentIndex + 1} max={total} label="Kemajuan" />

      <h2>{question.question}</h2>

      {children}
    </Card>
  );
}