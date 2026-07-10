import { createReflectionSummary } from "./reflectionSummary";
import { createReflectionMessage } from "./reflectionMessage";
import { createReflectionMotivation } from "./reflectionMotivation";
import { createRecommendation } from "./reflectionRecommendation";

export function createReflectionReport(result = {}, analytics = {}, meta = {}) {
  const summary = createReflectionSummary(result, analytics, meta);
  const message = createReflectionMessage(summary);
  const motivation = createReflectionMotivation(summary);
  const recommendation = createRecommendation(result, analytics);

  return {
    summary,
    message,
    motivation,
    recommendation,
    createdAt: new Date().toISOString(),
  };
}