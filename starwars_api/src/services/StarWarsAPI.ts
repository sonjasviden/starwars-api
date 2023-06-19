import axios from 'axios'
import { ResultFilms, ResultPeople, ResultPlanets, ResultSpecies, ResultStarships, ResultVehicles } from '../types'

const BASE_URL = 'https://swapi.thehiveresistance.com/api'

/**
 * Get all people
 */
export const getPeople = async (page: number) => {
    const res = await axios.get<ResultPeople>(`${BASE_URL}/people?page=${page}`)
    await new Promise(r => setTimeout(r, 1000))
    return res.data

}

/**
 * Get a single person
 */
export const getPerson = async (id: number) => {
    const res = await axios.get(`${BASE_URL}/people/${id}`)
    await new Promise(r => setTimeout(r, 1000))
    return res.data
}

/**
 * Get all films
 */
export const getFilms = async (page: number) => {
    const res = await axios.get<ResultFilms>(`${BASE_URL}/films?page=${page}`)
    await new Promise(r => setTimeout(r, 1000))
    return res.data
}

/**
 * Get a single film
 */
export const getFilm = async (id: number) => {
    const res = await axios.get(`${BASE_URL}/films/${id}`)
    await new Promise(r => setTimeout(r, 1000))
    return res.data
}

/**
 * Get all species
 */
export const getSpecies = async (page: number) => {
    const res = await axios.get<ResultSpecies>(`${BASE_URL}/species?page=${page}`)
    await new Promise(r => setTimeout(r, 1000))
    return res.data
}

/**
 * Get a single specie
 */
export const getSpecie = async (id: number) => {
    const res = await axios.get(`${BASE_URL}/species/${id}`)
    await new Promise(r => setTimeout(r, 1000))
    return res.data
}

/**
 * Get all planets
 */
export const getPlanets = async (page: number) => {
    const res = await axios.get(`${BASE_URL}/planets?page=${page}`)
    await new Promise(r => setTimeout(r, 1000))
    return res.data
}

/**
 * Get a single planet
 */
export const getPlanet = async (id: number) => {
    const res = await axios.get(`${BASE_URL}/planets/${id}`)
    await new Promise(r => setTimeout(r, 1000))
    return res.data
}

/**
 * Get all starships
 */
export const getStarships = async (page: number) => {
    const res = await axios.get(`${BASE_URL}/starships?page=${page}`)
    await new Promise(r => setTimeout(r, 1000))
    return res.data
}

/**
 * Get a single starship
 */
export const getStarship = async (id: number) => {
    const res = await axios.get(`${BASE_URL}/starships/${id}`)
    await new Promise(r => setTimeout(r, 1000))
    return res.data
}

/**
 * Get all vehicles
 */
export const getVehicles = async (page: number) => {
    const res = await axios.get(`${BASE_URL}/vehicles?page=${page}`)
    await new Promise(r => setTimeout(r, 1000))
    return res.data
}

/**
 * Get a single vehicle
 */
export const getVehicle = async (id: number) => {
    const res = await axios.get(`${BASE_URL}/vehicles/${id}`)
    await new Promise(r => setTimeout(r, 1000))
    return res.data
}

/**
 * Search
 */
export const getSearchFilms = async (query: string, page = 1) => {
    const res = await axios.get<ResultFilms>(`${BASE_URL}/films/?search=${query}&page=${page}`)
    await new Promise(r => setTimeout(r, 1000))
    return res.data
}

export const getSearchPeople = async (query: string, page = 1) => {
    const res = await axios.get<ResultPeople>(`${BASE_URL}/people/?search=${query}&page=${page}`)
    await new Promise(r => setTimeout(r, 1000))
    return res.data
}

export const getSearchPlanets = async (query: string, page = 1) => {
    const res = await axios.get<ResultPlanets>(`${BASE_URL}/planets/?search=${query}&page=${page}`)
    await new Promise(r => setTimeout(r, 1000))
    return res.data
}

export const getSearchSpecies = async (query: string, page = 1) => {
    const res = await axios.get<ResultSpecies>(`${BASE_URL}/species/?search=${query}&page=${page}`)
    await new Promise(r => setTimeout(r, 1000))
    return res.data
}

export const getSearchStarships = async (query: string, page = 1) => {
    const res = await axios.get<ResultStarships>(`${BASE_URL}/starships/?search=${query}&page=${page}`)
    await new Promise(r => setTimeout(r, 1000))
    return res.data
}

export const getSearchVehicles = async (query: string, page = 1) => {
    const res = await axios.get<ResultVehicles>(`${BASE_URL}/vehicles/?search=${query}&page=${page}`)
    await new Promise(r => setTimeout(r, 1000))
    return res.data
}