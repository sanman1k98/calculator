"use strict"

class calculator {
	#display;
	#operation;
	#operands;
	#current_operand;
	#prev_event;

	static operations = {
		"+": (x, y) => x + y,
		"-": (x, y) => x - y,
		"x": (x, y) => x * y,
		"/": (x, y) => x / y,
	}

	constructor() {
		this.all_clear();
	}

	all_clear() {
		this.#display = "";
		this.#operation = null;
		this.#operands = [ 0, null ];
		this.#current_operand = 0;
		this.#prev_event = null;
	}

	set_op(op) {
		this.#operation = op;
		this.#current_operand = 1;
		this.#prev_event = "set_op";
	}

	append_digit(x) {
		if (this.#prev_event === "set_op") {
			this.#display = "";
			this.#current_operand = 1;
			this.#prev_event = null;
		}

		let num = this.#operands[this.#current_operand];
		let decimal_point = this.#display.indexOf(".");

		if (decimal_point === -1) {
			this.#display.concat(x);
		} else if (x === ".") {
			return;
		} else {
			this.#display.concat(x);
		}

		this.#operands[this.#current_operand] = parseFloat(this.#display);
	}

	evaluate() {
		if (this.#operation === null) return;

		const x = this.#operands[0]
		if (this.#operands[1] === null) this.#operands[1] = x;
		const y = this.#operands[1];

		const result = this.operations[this.#operation](x, y);

		this.#display = result.toString();
		this.#operands = result
	}

	handle_click(e) {
		const btn = e.target.textContent;
		this.input(btn);
	}

	input(btn) {
		const num = parseInt(btn)

		if (!isNaN(num)) {
			this.append_digit(num);
			return;
		}

		switch (btn) {
			case "=":
				this.evaluate();
				break;
			case "clear":
				this.all_clear();
				break;
			case ".":
				this.append_digit(btn);
				break;
			default:
				this.set_op(btn);
		}
	}

	get display() {
		if (this.#display === "") return "0";
		else return this.#display;
	}
}

export default { calculator };
