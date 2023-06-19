import { useEffect, useState } from "react"
import * as swapi from "../services/StarWarsAPI"
import { ResultPlanets } from "../types"
import { Link, useSearchParams } from "react-router-dom"
import Pagination from "../components/Pagination"
import Button from "react-bootstrap/Button"
import Loading from "../components/Loading"
import Search from "../components/SearchForm"
import { getSearchPlanets } from "../services/StarWarsAPI"
import Alert from "react-bootstrap/Alert"


const PlanetsPage = () => {
    const [data, setData] = useState<ResultPlanets | null>(null)
    const [page, setPage] = useState(1)
    const [error, setError] = useState<string | null>(null)
    const [searchInput, setSearchInput] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)

    const query = searchParams.get("query")

    const getPlanets = async () => {
        setError(null)
        setLoading(true)

        try {
            const res = await swapi.getPlanets(page)
            setData(res)
            console.log(res)

        } catch (err: any) {
            setError(err.message)
        }

        setLoading(false)
    }

    const searchStarWars = async (searchQuery: string, searchPage = 1) => {
        setError(null)
        setLoading(true)
        setData(null)

        try {
            const res = await getSearchPlanets(searchQuery, searchPage)
            setData(res)
            console.log(res)

        } catch (err: any) {
            setError(err.message)
        }

        setLoading(false)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!searchInput.trim().length) {
            return
        }

        searchStarWars(searchInput, 1)
        setSearchParams({ query: searchInput })
    }

    useEffect(() => {
        window.scrollTo(0, 0);

        if (!query) {
            getPlanets()
            return
        }

        searchStarWars(query, page)
    }, [query, page])

    return (
        <main>
            <h2 className="heading">Planets</h2>

            <Search
                handleSubmit={handleSubmit}
                setSearchInput={setSearchInput}
                searchInput={searchInput}
            />

            {error && <Alert variant='warning'>{error}</Alert>}

            {loading &&
                <Loading />
            }

            {data && (
                <>
                    {query && (
                        <p className="showingOfQuery">Showing {data.total} search results for "{query}"</p>
                    )}

                    <div className="results">
                        {data.data.map(data =>
                            <div className="cards-list" key={data.id}>
                                <div className="card">
                                    <h3>{data.name}</h3>
                                    <hr />
                                    <p><strong>Population: </strong> {data.population}</p>
                                    <p><strong>Orbital period: </strong>{data.orbital_period}</p>
                                    <p><strong>Climate: </strong> {data.climate}</p>
                                    <div className="readMore-div">
                                        <Button variant="dark">
                                            <Link to={`/planets/${data.id}`}>Read more</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <Pagination
                        page={page}
                        totalPages={data.last_page}
                        hasPreviousPage={page > 1}
                        hasNextPage={page < data.last_page}
                        onPreviousPage={() => { setPage(prevValue => prevValue - 1) }}
                        onNextPage={() => { setPage(prevValue => prevValue + 1) }}
                    />
                </>
            )}
        </main>
    )
}

export default PlanetsPage
