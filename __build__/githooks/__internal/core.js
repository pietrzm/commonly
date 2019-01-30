const { execSync } = require("child_process")



exports.getStagedFiles = () => {
	return execSync("git diff --name-only --cached --diff-filter=d")
		.toString()
		.split("\n")
		.filter(x => !!x)
		.filter(x => x.includes("src"))
}