#!/bin/node
const { execSync } = require("child_process")
const { Linter, Configuration } = require("tslint")
const fs = require("fs")
const chalk = require("chalk")



const FORMATTER = "msbuild",
	ENCODING = "utf8",
	CONFIG_FILE = "./tslint.autofix.json"


const files = execSync("git diff --name-only --cached")
	.toString()
	.split("\n")
	.filter(x => !!x)

const linter = new Linter({ fix: true, formatter: FORMATTER })
const configuration = Configuration.findConfiguration(CONFIG_FILE)

for (const file of files) {
	const contents = fs.readFileSync(file, ENCODING)
	linter.lint(file, contents, configuration.results)
	execSync(`git add ${file}`)
}



const { fixes } = linter.getResult()
if (fixes.length > 0) {
	console.log(chalk`{bold Lint:} {yellow ${fixes.length}} files have been auto corrected.`)
	for (const fix of fixes) {
		console.log(chalk`\t {gray ${fix.fileName}} \t ${fix.failure}`)
	}
} else {
	console.log(chalk`{bold Lint:} No files have been auto corrected.`)
}

process.exit(0)