const notebookKey = 'statement-lab-notebook';
const form = document.querySelector<HTMLFormElement>('[data-notebook]');
const fields = ['company', 'filing', 'context', 'evidence', 'risks', 'conclusion'];
const feedback = document.querySelector<HTMLElement>('[data-notebook-feedback]');
const load = (data: Record<string, string>) => fields.forEach((name) => { const field = form?.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null; if (field) field.value = data[name] || ''; });
load(JSON.parse(localStorage.getItem(notebookKey) || '{}'));
form?.addEventListener('submit', (event) => { event.preventDefault(); const data = Object.fromEntries(fields.map((name) => [name, String((form.elements.namedItem(name) as HTMLInputElement).value)])); localStorage.setItem(notebookKey, JSON.stringify(data)); if (feedback) feedback.textContent = 'Saved on this device.'; });
document.querySelector('[data-export]')?.addEventListener('click', () => { const blob = new Blob([localStorage.getItem(notebookKey) || '{}'], { type: 'application/json' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = 'statement-lab-notebook.json'; link.click(); URL.revokeObjectURL(link.href); });
document.querySelector<HTMLInputElement>('[data-import]')?.addEventListener('change', async (event) => { const file = (event.target as HTMLInputElement).files?.[0]; if (!file) return; try { const data = JSON.parse(await file.text()); localStorage.setItem(notebookKey, JSON.stringify(data)); load(data); if (feedback) feedback.textContent = 'Backup imported.'; } catch { if (feedback) feedback.textContent = 'That file is not a valid notebook backup.'; } });
