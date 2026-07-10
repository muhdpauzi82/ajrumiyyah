import { Button, Grid } from "../../../ui";

export default function AnswerGrid({ options = [], onAnswer }) {
  return (
    <Grid columns={2} gap="md">
      {options.map((option) => (
        <Button
          key={option}
          variant="primary"
          size="large"
          onClick={() => onAnswer(option)}
        >
          {option}
        </Button>
      ))}
    </Grid>
  );
}