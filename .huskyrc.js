module.exports = {
	"hooks": {
		"pre-commit": "node __build__/githooks/lint/frisk.js && " +
			"node __build__/githooks/test/test-affected.js && " +
			"node __build__/githooks/lint/autofix.js"
	}
}