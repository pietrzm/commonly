import isObject from "Type/isObject/isObject"



const isReduced = (rx) =>
	isObject(rx) && rx["@@reduce/reduced"]



export default isReduced