module.exports = {
	"hooks": {
		"pre-commit": "node __build__/githooks/lint/frisk.js && npm test && node __build__/githooks/lint/autofix.js"
	}
}