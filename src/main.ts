(async () => {
  try {
    // Import and wait for app shell component
    await import('./components/app-shell/app-shell.js');
    const appShell = document.querySelector('app-shell');

    if (appShell) {
      appShell.classList.toggle('loaded');
      appShell.innerHTML = 'Hello, world.';
    }
  } catch (e) {
    console.error('Could not initialize application', e);
  }
})();
