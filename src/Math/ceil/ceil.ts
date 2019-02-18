const ceil = (number: number, precision: number = 0): number => {
    precision = Math.pow(10, precision)
    return Math.ceil(number * precision) / precision
}



export default ceil
