#!/bin/node
const lint = require("./__internal/core")
const chalk = require("chalk")



const { fixes } = lint.autofix()
if (fixes.length > 0) {
	console.log(chalk`{bold Lint:} {yellow ${fixes.length}} files have been auto corrected.`)
	for (const fix of fixes) {
		console.log(chalk`\t {gray ${fix.fileName}} \t ${fix.failure}`)
	}
} else {
	console.log(chalk`{bold Lint:} No files have been auto corrected.`)
}

process.exit(0)