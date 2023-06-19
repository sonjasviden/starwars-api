export type SinglePerson = {
    id: number,
    name: string,
    birth_year: string,
    eye_color: string,
    hair_color: string,
    height: string,
    mass: string,
    skin_color: string,
    films: PersonStarrIn[]
}

export type Person = {
    id: number,
    name: string,
    birth_year: string,
    eye_color: string,
    hair_color: string,
    height: string,
    mass: string,
    skin_color: string,
    films_count: number,
    species_count: number,
    starships_count: number,
    vehicles_count: number,
    homeworld: {
        id: number,
        name: string
    }
}

export type PersonStarrIn = {
    id: number,
    title: string
}