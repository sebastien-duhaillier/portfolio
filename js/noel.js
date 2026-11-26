(() => {
  const hero = document.querySelector('.hero-noel');
  if (!hero) return;

  const snow = hero.querySelector('.noel-neige');
  const displayControls = document.querySelector('.nav-affichage');
  const themeSelect = displayControls.querySelector('select');
  const darkButton = displayControls.querySelector('.mode-sombre');
  const portrait = hero.querySelector('#profile-img');
  const portraitFrame = hero.querySelector('.hero-image');
  const soundButton = hero.querySelector('.noel-son');
  const greeting = document.querySelector('.noel-message');
  const AudioEngine = window.AudioContext || window.webkitAudioContext;
  // The Bells of Santa Claus, BrianJamesLong (Freesound, CC0).
  // https://freesound.org/people/BrianJamesLong/sounds/330415/
  const bellsUrl = new URL('../assets/clochettes-noel.mp3', document.currentScript.src);
  const themes = {
    noel: 'assets/photo-noel-decor.webp',
    normal: 'assets/photo.jpg',
  };
  const interval = 30_000;
  const duration = 7_600;
  let theme = 'noel';
  let audio;
  let bells;
  let soundEnabled = false;
  let passage;
  let greetingTimer;
  let nextPassageTimer;
  let themeVersion = 0;

  for (let i = 0; i < 46; i++) {
    const flake = document.createElement('span');
    flake.className = 'noel-flocon';
    flake.style.setProperty('--position', `${Math.random() * 100}%`);
    flake.style.setProperty('--taille', `${3 + Math.random() * 5}px`);
    flake.style.setProperty('--duree', `${7 + Math.random() * 8}s`);
    flake.style.setProperty('--delai', `${-Math.random() * 15}s`);
    flake.style.setProperty('--derive', `${Math.random() * 70 - 35}px`);
    snow.append(flake);
  }

  function stopSound() {
    if (!passage) return;
    const { master, source } = passage;
    passage = undefined;
    const now = audio.currentTime;
    if (master.gain.cancelAndHoldAtTime) master.gain.cancelAndHoldAtTime(now);
    else master.gain.cancelScheduledValues(now);
    master.gain.setTargetAtTime(0, now, 0.025);
    source.stop(now + 0.1);
  }

  function playBells() {
    if (!soundEnabled || audio.state !== 'running') return;
    stopSound();

    const start = audio.currentTime;
    const length = Math.min(bells.duration, duration / 1_000);
    const source = audio.createBufferSource();
    const master = audio.createGain();
    const panner = audio.createStereoPanner?.();
    source.buffer = bells;
    source.connect(master);
    if (panner) {
      master.connect(panner).connect(audio.destination);
      panner.pan.setValueAtTime(0.86, start);
      panner.pan.linearRampToValueAtTime(-0.86, start + length);
    } else {
      master.connect(audio.destination);
    }
    master.gain.setValueAtTime(0.002, start);
    master.gain.exponentialRampToValueAtTime(0.34, start + length * 0.45);
    master.gain.exponentialRampToValueAtTime(0.001, start + length);
    passage = { master, source };
    source.onended = () => {
      if (passage?.source === source) passage = undefined;
      source.disconnect();
      master.disconnect();
      panner?.disconnect();
    };
    source.start(start, 0, length);
  }

  function showPassage() {
    window.clearTimeout(nextPassageTimer);
    if (theme !== 'noel') return;
    nextPassageTimer = window.setTimeout(showPassage, interval);

    const frame = portraitFrame.getBoundingClientRect();
    if (document.hidden || frame.top >= window.innerHeight || frame.bottom <= 0) return;

    window.clearTimeout(greetingTimer);
    greeting.hidden = true;
    // Restart the animation when the sound button triggers a new passage.
    void greeting.offsetWidth;
    greeting.hidden = false;
    greetingTimer = window.setTimeout(() => { greeting.hidden = true; }, duration);
    playBells();
  }

  function applyTheme(selection) {
    themeVersion++;
    theme = Object.hasOwn(themes, selection) ? selection : 'noel';
    const christmas = theme === 'noel';
    themeSelect.value = theme;
    hero.classList.toggle('hero-noel', christmas);
    document.body.classList.toggle('theme-noel', christmas);
    if (portrait.getAttribute('src') !== themes[theme]) portrait.src = themes[theme];
    soundButton.hidden = !christmas || !AudioEngine;
    soundButton.setAttribute('aria-pressed', 'false');
    soundEnabled = false;
    stopSound();
    window.clearTimeout(greetingTimer);
    window.clearTimeout(nextPassageTimer);
    greeting.hidden = true;
    if (christmas) nextPassageTimer = window.setTimeout(showPassage, 1_800);
  }

  try { theme = window.localStorage.getItem('portfolio-theme') || 'noel'; } catch {}
  applyTheme(theme);
  displayControls.hidden = false;
  themeSelect.addEventListener('change', () => {
    applyTheme(themeSelect.value);
    try { window.localStorage.setItem('portfolio-theme', theme); } catch {}
  });

  function applyAppearance(dark) {
    document.documentElement.dataset.apparence = dark ? 'sombre' : 'claire';
    darkButton.setAttribute('aria-pressed', String(dark));
    darkButton.querySelector('.mode-sombre-icone').textContent = dark ? '☀' : '☾';
    darkButton.querySelector('.mode-sombre-label').textContent = dark ? 'Clair' : 'Sombre';
    darkButton.title = dark ? 'Passer en mode clair' : 'Passer en mode sombre';
  }

  let dark = false;
  try { dark = window.localStorage.getItem('portfolio-apparence') === 'sombre'; } catch {}
  applyAppearance(dark);
  darkButton.addEventListener('click', () => {
    dark = !dark;
    applyAppearance(dark);
    try { window.localStorage.setItem('portfolio-apparence', dark ? 'sombre' : 'claire'); } catch {}
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopSound();
  });

  if (!AudioEngine) return;
  soundButton.addEventListener('click', async () => {
    if (soundEnabled) {
      soundEnabled = false;
      soundButton.setAttribute('aria-pressed', 'false');
      stopSound();
      return;
    }

    const requestedThemeVersion = themeVersion;
    soundButton.disabled = true;
    soundButton.title = '';
    try {
      audio ??= new AudioEngine();
      await audio.resume();
      if (!bells) {
        const response = await fetch(bellsUrl);
        if (!response.ok) throw new Error('Clochettes introuvables.');
        bells = await audio.decodeAudioData(await response.arrayBuffer());
      }
      soundEnabled = audio.state === 'running' && theme === 'noel' && themeVersion === requestedThemeVersion;
      soundButton.setAttribute('aria-pressed', String(soundEnabled));
      if (soundEnabled) showPassage();
    } catch {
      soundButton.title = 'Le son est indisponible. Clique pour réessayer.';
      soundButton.setAttribute('aria-pressed', 'false');
    } finally {
      soundButton.disabled = false;
    }
  });
})();
