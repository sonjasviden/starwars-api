import { useEffect, useState } from "react"
import * as swapi from "../services/StarWarsAPI"
import { ResultFilms } from "../types"
import { Link, useSearchParams } from "react-router-dom"
import Pagination from "../components/Pagination"
import Button from "react-bootstrap/Button"
import Loading from "../components/Loading"
import Search from "../components/SearchForm"
import Alert from "react-bootstrap/Alert"

const FilmsPage = () => {
    const [data, setData] = useState<ResultFilms | null>(null)
    const [page, setPage] = useState(1)
    const [error, setError] = useState<string | null>(null)
    const [searchInput, setSearchInput] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)

    const query = searchParams.get("query")

    const getFilms = async () => {
        setError(null)
        setLoading(true)

        try {
            const res = await swapi.getFilms(page)
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
            const res = await swapi.getSearchFilms(searchQuery, searchPage)
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
            getFilms();
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
            <h2 className="heading">Films</h2>

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
                                    <h3>{data.title}</h3>
                                    <hr />
                                    <p><strong>Director: </strong> {data.director}</p>
                                    <p><strong>Release date: </strong>{data.release_date}</p>
                                    <p><strong>Planets count: </strong> {data.planets_count}</p>
                                    <div className="readMore-div">
                                        <Button variant="dark">
                                            <Link to={`/films/${data.id}`}>Read more</Link>
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

export default FilmsPage
