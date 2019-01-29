module.exports = {
	"hooks": {
		"pre-commit": "node __build__/tslint-check.js && npm test && node __build__/tslint-autofix.js"
	}
}