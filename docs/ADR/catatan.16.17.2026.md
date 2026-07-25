Struktur:

src/features/guardianArena/styles/
├── GuardianArena.css
├── GuardianLayout.css
├── GuardianHeader.css
├── GuardianPanel.css
├── GuardianCharacter.css
├── GuardianAnswers.css
├── GuardianProgress.css
├── GuardianEffects.css
└── GuardianResponsive.css

1. GuardianArena.css

Simpan asas global dan container utama sahaja:

html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
}

body {
  overflow: hidden;
  background: #020504;
}

* {
  box-sizing: border-box;
}

button {
  font: inherit;
}

.guardian-screen {
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100dvh;

  overflow: hidden;
  background: #020504;
}

.guardian-stage {
  position: relative;

  width: min(100vw, calc(100dvh * 1.5));
  aspect-ratio: 3 / 2;

  flex: 0 0 auto;
  overflow: hidden;

  background: #050907;
  user-select: none;
  isolation: isolate;
}

.guardian-background {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  display: block;
  object-fit: contain;
  object-position: center;

  pointer-events: none;
  z-index: 0;
}

2. GuardianHeader.css

Masukkan:

.guardian-back-button {
  /* semua CSS butang back */
}

.guardian-title {
  /* semua CSS tajuk */
}

.guardian-title span {
  /* ... */
}

.guardian-title strong {
  /* ... */
}

3. GuardianPanel.css

Masukkan semua berkaitan:

.guardian-question-panel
.guardian-question-number
.guardian-playing-question
.guardian-typing-text
.guardian-typing-text p
.guardian-start-button
.guardian-countdown-text

Termasuk animasi typing, countdown dan panel keputusan.
4. GuardianCharacter.css

Masukkan:

.guardian-character
.guardian-book-glow
.guardian-book-glow.is-active
.guardian-question-rising
.guardian-question-rising.is-rising

Serta keyframe:

@keyframes guardian-book-glow
@keyframes guardian-question-rise

5. GuardianAnswers.css

Masukkan semua berkaitan batu:

.guardian-answer-area
.answer-stone
.answer-stone::before
.answer-stone::after
.answer-stone span
.answer-stone:hover
.answer-stone:active
.answer-stone.selected
.answer-stone.correct
.answer-stone.wrong

Dan keyframe:

@keyframes answer-wrong-shake

6. GuardianProgress.css

Masukkan:

.guardian-hud
.guardian-hud div
.guardian-hud strong
.guardian-progress
.guardian-progress-frame
.guardian-progress-fill
.guardian-progress-text

7. GuardianEffects.css

Masukkan semua kesan khas:

.guardian-success-petals
.success-petal
.petal-0
.petal-1
.petal-2

Termasuk:

@keyframes guardian-petal-fall

Jika ada CSS confetti tambahan, letak di sini juga.
8. GuardianLayout.css

Masukkan bahagian panel kiri:

.guardian-crystal-status
.crystal-value
.crystal-green
.crystal-red
.crystal-purple

Jika kristal hanya statik, fail ini akan kekal ringkas.
9. GuardianResponsive.css

Pindahkan semua media query ke sini:

@media (max-aspect-ratio: 3 / 2) {
  .guardian-stage {
    width: 100vw;
    height: auto;
  }
}

@media (min-aspect-ratio: 3 / 2) {
  .guardian-stage {
    width: auto;
    height: 100dvh;
  }
}

Import dalam GuardianArena.jsx

Gantikan satu import CSS dengan semua fail:

import "./styles/GuardianArena.css";
import "./styles/GuardianLayout.css";
import "./styles/GuardianHeader.css";
import "./styles/GuardianPanel.css";
import "./styles/GuardianCharacter.css";
import "./styles/GuardianAnswers.css";
import "./styles/GuardianProgress.css";
import "./styles/GuardianEffects.css";
import "./styles/GuardianResponsive.css";