import round from "Math/round/round"



const random = ([ lower, upper ] = [ 0, 1 ], precision = 0) =>
    round(Math.random() * (upper - lower) + lower, precision)



export default random
