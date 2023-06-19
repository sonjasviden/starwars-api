export type SingleVehicle = {
    id: number,
    name: string,
    model: string,
    vehicle_class: string,
    manufacturer: string,
    length: string,
    cost_in_credits: string,
    crew: string,
    passengers: string,
    max_atmosphering_speed: string,
    cargo_capacity: string,
    consumables: string,
    created: string,
    edited: string,
    pilots: [],
    films: Films[]
}

export type Vehicle = {
    id: number,
    name: string,
    model: string,
    vehicle_class: string,
    manufacturer: string,
    length: string,
    cost_in_credits: string,
    crew: string,
    passengers: string,
    max_atmosphering_speed: string,
    cargo_capacity: string,
    consumables: string,
    created: string,
    edited: string,
    pilots_count: number,
    films_count: number
}

export type Films = {
    id: number,
    title: string
}