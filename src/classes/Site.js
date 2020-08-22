import {
	BlockTitle,
	BlockMenu,
	BlockImg,
	BlockText,
	BlockTextColumns,
} from "./Block";

const typeOfConstructor = {
	title: BlockTitle,
	text: BlockText,
	textColumns: BlockTextColumns,
	picture: BlockImg,
	menu: BlockMenu,
};

export class Site {
	constructor(selector) {
		this.$el = document.querySelector(selector);
	}
	render(model) {
		this.$el.innerHTML = "";
		model.forEach((block) =>
			this.$el.insertAdjacentHTML("beforeend", block.toHTML())
		);
	}
}

export class Sidebar {
	constructor(selector, update) {
		this.$el = document.querySelector(selector);
		this.update = update;
		this.init();
	}
	init() {
		this.$el.addEventListener("submit", this.addBlock.bind(this));
		this.$el.innerHTML = this.template;
	}

	get template() {
		return [block("title"), block("text")].join("");
	}
	addBlock(event) {
		event.preventDefault();
		const type = event.target.name;
		const value = event.target.value.value;
		const styles = event.target.styles.value;
		console.log(styles, "STYLES");
		const Constructor = typeOfConstructor[type];
		const block = new Constructor(value, { styles });
		this.update(block);
		event.target.value.value = "";
		event.target.styles.value = "";
	}
}

const block = (type) => {
	return `
    <form name=${type}>
        <div class="form-group" >
            <h4>${type}</h4>
           <div class="form-group">
              <input class="form-control form-control-sm" name='value' placeholder='value'/>
           </div>
           <div class="form-group">
              <input class="form-control form-control-sm" name='styles' placeholder='styles'/>
           </div>
               
        </div>
 
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
        `;
};
