const round = (number: number, precision: number = 0): number => {
    precision = Math.pow(10, precision)
    return Math.round(number * precision) / precision
}



export default round
