export type SinglePlanet = {
    id: number,
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    created: string,
    edited: string,
    residents: Characters[]
}

export type Planet = {
    id: number,
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    created: string,
    edited: string,
    residents_count: number,
    films_count: number
}

export type Characters = {
    id: number,
    name: string
}