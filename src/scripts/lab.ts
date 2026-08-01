const bindQuiz = (selector: string, right: string, feedback: string, hint?: string) => {
  const root = document.querySelector(selector);
  const output = document.querySelector<HTMLElement>(feedback);
  root?.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('button[data-answer]');
    if (!button || !output) return;
    const correct = button.dataset.answer === right;
    output.textContent = correct
      ? 'Correct. ' + (selector === '[data-mapper]' ? 'Inventory is an asset, so this exchanges one asset for another.' : 'That links the evidence before making a conclusion.')
      : 'Not quite. Re-read the question, ask for a hint if available, and try again.';
    output.dataset.state = correct ? 'right' : 'wrong';
  });
  if (hint) document.querySelector('[data-mapper-hint]')?.addEventListener('click', () => { if (output) output.textContent = hint; });
};
bindQuiz('[data-mapper]', 'swap', '[data-mapper-feedback]', 'Think: inventory is a resource the company controls.');
bindQuiz('[data-linked]', 'right', '[data-linked-feedback]');
bindQuiz('[data-filing]', 'right', '[data-filing-feedback]');
bindQuiz('[data-scenario]', 'right', '[data-scenario-feedback]');
document.querySelector('[data-calc]')?.addEventListener('click', () => {
  const assets = Number((document.querySelector('[data-ca]') as HTMLInputElement).value);
  const liabilities = Number((document.querySelector('[data-cl]') as HTMLInputElement).value);
  const output = document.querySelector<HTMLElement>('[data-ratio-feedback]');
  if (!output) return;
  output.textContent = liabilities > 0 ? `Current ratio: ${(assets / liabilities).toFixed(2)}×. Now inspect what those current assets actually are and when liabilities fall due.` : 'Current liabilities must be greater than zero.';
});
