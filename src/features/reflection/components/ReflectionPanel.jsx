import { Card, Badge, Button, Stack } from "../../../ui";
import "./ReflectionPanel.css";

export default function ReflectionPanel({
  report,
  onRetry,
  onContinue,
}) {
  if (!report) return null;

  const { summary, message, motivation, recommendation } = report;

  return (
    <Card variant="gold" padding="large" className="reflection-panel">
      <Stack gap="md" align="center">
        <Badge variant={summary.score.passed ? "success" : "warning"}>
          {summary.score.passed ? "Lulus" : "Perlu Ulang"}
        </Badge>

        <h2>{message.title}</h2>

        <p>{message.message}</p>

        <div className="reflection-score">
          {summary.score.correct} / {summary.score.total}
        </div>

        <p className="reflection-percent">
          {summary.score.percentage}%
        </p>

        <p className="reflection-motivation">
          {motivation.message}
        </p>

        <p className="reflection-recommendation">
          {recommendation.message}
        </p>

        <div className="reflection-actions">
          {!summary.score.passed && (
            <Button variant="secondary" onClick={onRetry}>
              Cuba Lagi
            </Button>
          )}

          {summary.score.passed && (
            <Button variant="primary" onClick={onContinue}>
              Teruskan
            </Button>
          )}
        </div>
      </Stack>
    </Card>
  );
}