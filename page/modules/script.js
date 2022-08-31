"use strict"




let display = 0

let operands = [ display, null ]
let operator = null

const operators = {
	add: (x, y) => x + y,
	sub: (x, y) => x - y,
	mul: (x, y) => x * y,
	div: (x, y) => x / y,
}

const get_display = () => display
const get_operands = () => { operands }
const set_operator = op => { operator = op }
const set_operand = x => { operands[1] = x }

const update_display = () => {
	if (operator === null) {
		return
	}

	let x = operands[0]
	let y = operands[1]
	if (y === null) { y = x }
	
	let res = operators[op](x, y)

	display = res
}

const clear = () => {
	display = 0
	operands = [ display, null ]
	operator = null
}
