#!/bin/node
const lint = require("./__internal/core")
const chalk = require("chalk")



const { fixes } = lint.autofix()
if (fixes.length > 0) {
	console.log(
		chalk`{bold.blue Lint} ${lint.level("(Frisk)", fixes.length)}{bold.blue :} Found ${lint.level(fixes.length)} ${fixes.length === 1 ? "issues" : "issue"}, following files were auto corrected.`
	)
	for (const fix of fixes) {
		console.log(
			chalk`\t {gray ${fix.fileName}} \t ${fix.failure}`
		)
	}
} else {
	console.log(chalk`{bold.blue Lint} {green (Frisk)}{bold.blue :} No files needed to be auto corrected.`)
}


process.exit(0)