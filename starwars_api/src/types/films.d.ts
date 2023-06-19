export type SingleFilm = {
    id: number,
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    characters: Character[]
}

export type Film = {
    id: number,
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    characters_count: number,
    planets_count: number,
    starships_count: number,
    vehicles_count: number,
    species_count: number
}

export type Character = {
    id: number,
    name: string
}

export type Films = Film[]