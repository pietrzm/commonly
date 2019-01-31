const size = (xs) => {
    switch (true) {
        case "length" in xs:
            return xs.length
        case "size" in xs:
            return xs.size
    }
}



export default size as {
    <T>(xs: Iterable<T> | Function): number
}
