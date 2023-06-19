import { Film, Films } from './films'
import { People, Person } from './people'
import { Planet } from './planets'
import { Specie } from './species'
import { Starship } from './starships'
import { Vehicle } from './vehicles'

export type ResultFilms = {
    current_page: number
    data: Film[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: []
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: number | null
    to: number
    total: number
}

export type ResultPeople = {
    current_page: number
    data: Person[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: []
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: number | null
    to: number
    total: number
}

export type ResultPlanets = {
    current_page: number
    data: Planet[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: []
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: number | null
    to: number
    total: number
}

export type ResultSpecies = {
    current_page: number
    data: Specie[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: []
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: number | null
    to: number
    total: number
}

export type ResultStarships = {
    current_page: number
    data: Starship[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: []
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: number | null
    to: number
    total: number
}

export type ResultVehicles = {
    current_page: number
    data: Vehicle[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: []
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: number | null
    to: number
    total: number
}