export const placeCursorAtEnd = (el: HTMLElement) => {
	const range = document.createRange();
	range.selectNodeContents(el);
	range.collapse(false);
	const sel = window.getSelection();
	if (!sel) return;
	sel.removeAllRanges();
	sel.addRange(range);
	el.scrollTop = el.scrollHeight;
};

export const makeFitToWidth = (content: string) =>
	content
		.split("<br>")
		.map(
			(line) => `
		  <span class="ftw-fit-to-width">
            <span><span>${line}</span></span>
            <span aria-hidden="true" class="ftw-invisible">${line}</span>
          </span>`,
		)
		.join("");
