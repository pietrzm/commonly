const { execSync } = require("child_process")
const { Linter, Configuration } = require("tslint")
const fs = require("fs")



const getStagedFiles = () => {
	return execSync("git diff --name-only --cached --diff-filter=d")
		.toString()
		.split("\n")
		.filter(x => !!x)
}

const lint = (configuration, files = [], options) => {
	const FORMATTER = "msbuild",
		ENCODING = "utf8"
	options = Object.assign({ fix: false, formatter: FORMATTER }, options)


	const linter = new Linter(options)
	const tslintConfig = Configuration.findConfiguration(configuration)
	for (const file of files) {
		const contents = fs.readFileSync(file, ENCODING)
		linter.lint(file, contents, tslintConfig.results)
		execSync(`git add ${file}`)
	}

	return linter.getResult()
}


exports.autofix = () => {
	return lint(
		`${ __dirname }/configurations/tslint.autofix.json`,
		getStagedFiles(),
		{ fix: true }
	)
}

exports.frisk = () => {
	return lint(
		`${ __dirname }/configurations/tslint.frisk.json`,
		getStagedFiles(),
		{ fix: false }
	)
}

