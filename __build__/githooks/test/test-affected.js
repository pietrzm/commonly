#!/bin/node
const { spawn } = require("child_process")
const { getStagedFiles } = require("../__internal/core")



const files = getStagedFiles()
if (files.length !== 0) {
	spawn(`npm`, [ "run test", "--", "--findRelatedTests", ...files ], { shell: true, stdio: 'inherit' })
}