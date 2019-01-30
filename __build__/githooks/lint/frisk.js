#!/bin/node
const lint = require("./__internal/core")
const chalk = require("chalk")



const { failures } = lint.frisk()
if (failures.length > 0) {
	console.log(
		chalk`{bold.blue Lint} ${lint.level("(Frisk)", failures.length)}{bold.blue :} Found ${lint.level(failures.length)} ${failures.length === 1 ? "issues" : "issue"}, following files need to be manually corrected.`
	)
	for (const failure of failures) {
		console.log(
			chalk`\t {gray ${failure.fileName}} \t ${failure.failure}`
		)
	}
} else {
	console.log(chalk`{bold.blue Lint} {green (Frisk)}{bold.blue :} No issues found.`)
}


process.exit(0)