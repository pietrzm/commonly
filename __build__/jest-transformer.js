const typescript = require("typescript"),
    config = require("./../tsconfig.json")


const process = (source, path) =>
    typescript.transpile(source, config.compilerOptions, path, [])


module.exports = {
    process
}