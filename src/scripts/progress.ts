const progressKey = 'statement-lab-progress';
const completed = new Set<string>(JSON.parse(localStorage.getItem(progressKey) || '[]'));
const checks = [...document.querySelectorAll<HTMLInputElement>('[data-complete]')];
const update = () => {
  checks.forEach((check) => { check.checked = completed.has(check.dataset.complete!); });
  const count = completed.size;
  const percent = checks.length ? (count / checks.length) * 100 : 0;
  const bar = document.querySelector<HTMLElement>('[data-progress-bar]');
  const label = document.querySelector<HTMLElement>('[data-progress-label]');
  if (bar) bar.style.width = `${percent}%`;
  if (label) label.textContent = `${count} of ${checks.length} complete`;
};
checks.forEach((check) => check.addEventListener('change', () => {
  const id = check.dataset.complete!;
  check.checked ? completed.add(id) : completed.delete(id);
  localStorage.setItem(progressKey, JSON.stringify([...completed])); update();
}));
document.querySelector('[data-reset-progress]')?.addEventListener('click', () => { completed.clear(); localStorage.removeItem(progressKey); update(); });
update();
