const words = (string: string) =>
    string.match(/(?:^|[A-Z])[a-z]+|[A-Z]+(?![a-z])|[a-zA-Z0-9]+/g) || []



export default words
