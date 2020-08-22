import { row, column, toStringObject } from "../helpers";

class Block {
	constructor(value, options) {
		this.value = value;
		this.options = options;
	}
	toHTML() {
		throw new Error("Метод должен работать");
	}
}

export class BlockTitle extends Block {
	constructor(value, options) {
		super(value, options);
	}
	toHTML() {
		const { tag = "h2", styles } = this.options;
		return row(column(`<${tag}>${this.value}</${tag}>`), styles);
	}
}

export class BlockText extends Block {
	constructor(value, options) {
		super(value, options);
	}
	toHTML() {
		const { styles } = this.options;
		return row(column(`<p>${this.value}</p>`), styles);
	}
}

export class BlockTextColumns extends Block {
	constructor(value, options) {
		super(value, options);
	}
	toHTML() {
		const { styles } = this.options;
		const html = this.value.map((item) => column(`<p>${item}</p>`));
		return row(html.join(""), styles);
	}
}

export class BlockImg extends Block {
	constructor(value, options) {
		super(value, options);
	}
	toHTML() {
		const { styles, alt } = this.options;
		return row(column(`<img src=${this.value} alt=${alt} style=${styles}/>`));
	}
}

export class BlockMenu extends Block {
	constructor(value, options) {
		super(value, options);
	}
	toHTML() {
		const { styles } = this.options;
		const html = this.value.map(
			(item) =>
				`<li style=${styles}><a href="
               #" style='text-decoration:none'>${item}</a></li>`
		);
		return row(
			`<ul style="list-style:none;display:flex;margin-top:.5rem">${html.join(
				""
			)}</ul>`
		);
	}
}
