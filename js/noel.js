(() => {
  const hero = document.querySelector('.hero-noel');
  if (!hero) return;

  const snow = hero.querySelector('.noel-neige');
  const soundButton = hero.querySelector('.noel-son');
  const greeting = hero.querySelector('.noel-message');
  const AudioEngine = window.AudioContext || window.webkitAudioContext;
  const interval = 30_000;
  const duration = 4_800;
  let audio;
  let soundEnabled = false;
  let passage;
  let greetingTimer;
  let nextPassageTimer;

  for (let i = 0; i < 28; i++) {
    const flake = document.createElement('span');
    flake.className = 'noel-flocon';
    flake.style.setProperty('--position', `${Math.random() * 100}%`);
    flake.style.setProperty('--taille', `${2 + Math.random() * 4}px`);
    flake.style.setProperty('--duree', `${9 + Math.random() * 10}s`);
    flake.style.setProperty('--delai', `${-Math.random() * 19}s`);
    flake.style.setProperty('--derive', `${Math.random() * 70 - 35}px`);
    snow.append(flake);
  }

  function stopSound() {
    if (!passage) return;
    const { gain } = passage;
    gain.cancelScheduledValues(audio.currentTime);
    gain.setTargetAtTime(0, audio.currentTime, 0.025);
    passage = undefined;
  }

  function playBells() {
    if (!soundEnabled || audio.state !== 'running') return;
    stopSound();

    const start = audio.currentTime;
    const length = duration / 1_000;
    const master = audio.createGain();
    const panner = audio.createStereoPanner?.();
    if (panner) {
      master.connect(panner).connect(audio.destination);
      panner.pan.setValueAtTime(0.86, start);
      panner.pan.linearRampToValueAtTime(-0.86, start + length);
    } else {
      master.connect(audio.destination);
    }
    master.gain.setValueAtTime(0.002, start);
    master.gain.exponentialRampToValueAtTime(0.125, start + 2);
    master.gain.exponentialRampToValueAtTime(0.001, start + length);
    passage = master;

    const rhythm = [0.1, 0.32, 0.65, 0.87, 1.24, 1.44, 1.77, 1.99, 2.36, 2.55,
      2.9, 3.12, 3.47, 3.68, 4.03, 4.24];
    const tones = [740, 880, 988, 831, 1_109];
    const partials = [1, 2.41, 3.56];
    rhythm.forEach((offset, index) => {
      partials.forEach((ratio, partial) => {
        const strike = start + offset;
        const tail = 0.43 - partial * 0.08;
        const oscillator = audio.createOscillator();
        const volume = audio.createGain();
        oscillator.frequency.value = tones[index % tones.length] * ratio;
        volume.gain.setValueAtTime(0.001, strike);
        volume.gain.linearRampToValueAtTime(0.45 / (partial + 1), strike + 0.008);
        volume.gain.exponentialRampToValueAtTime(0.001, strike + tail);
        oscillator.connect(volume).connect(master);
        oscillator.start(strike);
        oscillator.stop(strike + tail);
        oscillator.onended = () => {
          oscillator.disconnect();
          volume.disconnect();
          if (index === rhythm.length - 1 && partial === 0) {
            if (passage === master) passage = undefined;
            master.disconnect();
            panner?.disconnect();
          }
        };
      });
    });
  }

  function showPassage() {
    window.clearTimeout(nextPassageTimer);
    nextPassageTimer = window.setTimeout(showPassage, interval);

    const portrait = hero.querySelector('.hero-image').getBoundingClientRect();
    if (document.hidden || portrait.top >= window.innerHeight || portrait.bottom <= 0) return;

    window.clearTimeout(greetingTimer);
    greeting.hidden = true;
    // Restart the animation when the sound button triggers a new passage.
    void greeting.offsetWidth;
    greeting.hidden = false;
    greetingTimer = window.setTimeout(() => { greeting.hidden = true; }, duration);
    playBells();
  }

  nextPassageTimer = window.setTimeout(showPassage, 1_800);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopSound();
  });

  if (!AudioEngine) return;
  soundButton.hidden = false;
  soundButton.addEventListener('click', async () => {
    if (soundEnabled) {
      soundEnabled = false;
      soundButton.setAttribute('aria-pressed', 'false');
      stopSound();
      return;
    }

    soundButton.disabled = true;
    try {
      audio ??= new AudioEngine();
      await audio.resume();
      soundEnabled = audio.state === 'running';
      soundButton.setAttribute('aria-pressed', String(soundEnabled));
      if (soundEnabled) showPassage();
    } catch {
      soundButton.setAttribute('aria-pressed', 'false');
    } finally {
      soundButton.disabled = false;
    }
  });
})();
