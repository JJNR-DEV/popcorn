import { genreFormat } from '../components/SelectedMovie'

// correct format of expected API data
const dummy = {
    genres: [
        {name: "Comedy"},
        {name: "Science Fiction"},
        {name: "Family"}
    ]
}

// bad format of received data
const badDummy = {
    noGenre: "Bad Data"
}

describe("Returns String of all Genres", () => {
    const allGenres = genreFormat(dummy)
    const badData = genreFormat(badDummy)

    test("value is of type String", () => {       
        const type = typeof allGenres
        expect(type).toBe("string")
    })

    test("value should be 'Comedy - Science Fiction - Family'", () => {
        expect(allGenres).toBe("Comedy - Science Fiction - Family")
    })

    test("return empty String when unexpected format data", () => {
        expect(badData).toBe("")
    })
})
