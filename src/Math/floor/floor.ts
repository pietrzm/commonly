const floor = (number: number, precision: number = 0): number => {
    precision = Math.pow(10, precision)
    return Math.floor(number * precision) / precision
}



export default floor
