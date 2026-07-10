import { useState } from "react";
import {
  Button,
  Card,
  Dialog,
  ProgressBar,
  Badge,
  Container,
  Section,
  Stack,
  Grid,
  Center,
} from "../ui";

export default function DeveloperSandbox() {
  const [open, setOpen] = useState(false);

  return (
    <Container width="lg">
      <Section>
        <Stack gap="lg">
          <h1>AJRUMIYYAH Developer Sandbox</h1>

          <Card>
            <Stack gap="md">
              <h2>Button</h2>
              <Grid columns={3}>
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
              </Grid>
            </Stack>
          </Card>

          <Card>
            <Stack gap="md">
              <h2>Badge</h2>
              <Grid columns={4}>
                <Badge>Lencana</Badge>
                <Badge variant="success">Lulus</Badge>
                <Badge variant="warning">Ulang</Badge>
                <Badge variant="gold">Artifak</Badge>
              </Grid>
            </Stack>
          </Card>

          <Card>
            <Stack gap="md">
              <h2>Progress</h2>
              <ProgressBar value={7} max={10} label="Kemajuan Soalan" />
            </Stack>
          </Card>

          <Card>
            <Stack gap="md">
              <h2>Dialog</h2>
              <Button onClick={() => setOpen(true)}>Buka Dialog</Button>
            </Stack>
          </Card>

          <Center>
            <Badge variant="gold">ADS Core Test</Badge>
          </Center>
        </Stack>
      </Section>

      <Dialog
        open={open}
        title="Dialog Berjaya"
        onClose={() => setOpen(false)}
      >
        Komponen Dialog ADS berfungsi.
      </Dialog>
    </Container>
  );
}