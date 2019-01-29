#!/bin/node
const { execSync } = require("child_process")
const { Linter, Configuration } = require("tslint")
const fs = require("fs")
const chalk = require("chalk")



const FORMATTER = "msbuild",
	ENCODING = "utf8",
	CONFIG_FILE = "./tslint.check.json"


const files = execSync("git diff --name-only --cached")
	.toString()
	.split("\n")
	.filter(x => !!x)

const linter = new Linter({ fix: false, formatter: FORMATTER })
const configuration = Configuration.findConfiguration(CONFIG_FILE)

for (const file of files) {
	const contents = fs.readFileSync(file, ENCODING)
	linter.lint(file, contents, configuration.results)
	execSync(`git add ${file}`)
}



const { failures } = linter.getResult()
if (failures.length > 0) {
	console.log(chalk`{bold Lint:} {yellow ${failures.length}} files need to be manually corrected.`)
	for (const failure of failures) {
		console.log(chalk`\t {gray ${failure.fileName}} \t ${failure.failure}`)
	}
} else {
	console.log(chalk`{bold Lint:} No files have been auto corrected.`)
}

process.exit(0)