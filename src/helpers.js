export const row = (content, styles = "") => {
	return `<div class="row" style=${styles}>${content}</div>`;
};

export const column = (content) => `<div class="col-sm">${content}</div>`;

export const toStringObject = (obj) =>
	Object.keys(obj)
		.map((elem) => `${elem}:${obj[elem]}`)
		.join(";");
