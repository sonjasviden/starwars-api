import { useEffect, useState } from "react"
import * as swapi from "../services/StarWarsAPI"
import { ResultSpecies } from "../types"
import { Link, useSearchParams } from "react-router-dom"
import Pagination from "../components/Pagination"
import Button from "react-bootstrap/Button"
import Loading from "../components/Loading"
import Search from "../components/SearchForm"
import Alert from "react-bootstrap/Alert"

const SpeciesPage = () => {
    const [data, setData] = useState<ResultSpecies | null>(null)
    const [page, setPage] = useState(1)
    const [error, setError] = useState<string | null>(null)
    const [searchInput, setSearchInput] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)

    const query = searchParams.get("query")

    const getSpecies = async () => {
        setError(null)
        setLoading(true)

        try {
            const res = await swapi.getSpecies(page)
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
            const res = await swapi.getSearchSpecies(searchQuery, searchPage)
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

        const pageQueryParam = searchParams.get("page")
        if (pageQueryParam) {
            const pageValue = parseInt(pageQueryParam, 10)
            if (!isNaN(pageValue) && pageValue !== page) {
                setPage(pageValue)
                return
            }
        }

        if (!query) {
            getSpecies();
            return;
        }

        searchStarWars(query, page);
    }, [query, page, searchParams]);

    const handlePageChange = (pageNumber: number) => {
        setPage(pageNumber)
        setSearchParams({ ...searchParams, page: pageNumber.toString() })
    }

    return (
        <main>
            <h2 className="heading">Species</h2>

            <Search
                handleSubmit={handleSubmit}
                setSearchInput={setSearchInput}
                searchInput={searchInput}
            />

            {error && <Alert variant='warning'>{error}</Alert>}

            {loading && <Loading />}

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
                                    <p><strong>Eye colors: </strong> {data.eye_colors}</p>
                                    <p><strong>Hair colors: </strong>{data.hair_colors}</p>
                                    <p><strong>Language: </strong> {data.language}</p>
                                    <div className="readMore-div">
                                        <Button variant="dark">
                                            <Link to={`/species/${data.id}`}>Read more</Link>
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
                        onPreviousPage={() => handlePageChange(page - 1)}
                        onNextPage={() => handlePageChange(page + 1)}
                    />
                </>
            )}
        </main>
    )
}

export default SpeciesPage
