export type SingleSpecie = {
    id: number,
    name: string,
    classification: string,
    designation: string,
    average_height: string,
    average_lifespan: string,
    eye_colors: string,
    hair_colors: string,
    skin_colors: cstring,
    language: string,
    created: string,
    edited: string,
    people: SpecieStarrIn[]
}

export type Specie = {
    id: number,
    name: string,
    classification: string,
    designation: string,
    average_height: string,
    average_lifespan: string,
    eye_colors: string,
    hair_colors: string,
    skin_colors: string,
    language: string,
    created: string,
    edited: string,
    people_count: number,
    films_count: number,
    homeworld: {
        id: number,
        name: string
    }
}

export type SpecieStarrIn = {
    id: number,
    name: string
}

