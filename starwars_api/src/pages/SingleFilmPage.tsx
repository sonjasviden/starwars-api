import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as swapi from "../services/StarWarsAPI"
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Loading from '../components/Loading'
import { SingleFilm } from '../types/films'

const SingleFilmPage = () => {
    const [data, setData] = useState<SingleFilm | null>(null)

    const { id } = useParams()
    const filmId = Number(id)

    const getFilm = async (id: number) => {
        const res = await swapi.getFilm(id)
        setData(res)
    }

    useEffect(() => {
        getFilm(filmId)
    }, [])

    if (!data) {
        return (
            <>
                <Loading />
            </>
        )
    }

    return (
        <>
            {data && (
                <div className='section'>
                    <div className='goback-btn'>
                        <Link to="/films">
                            <Button variant="light">← Back to all films</Button>
                        </Link>
                    </div>
                    <h2>{data.title}</h2>
                    <div className="single-info">
                        <div className='info-list'>
                            <div className='info-box'>
                                <p><strong>Director: </strong>{data.director}</p>
                                <p><strong>Opening crawl: </strong>{data.opening_crawl}</p>
                                <p><strong>Producer: </strong>{data.producer}</p>
                                <p><strong>Release date: </strong>{data.release_date}</p>
                            </div>
                        </div>
                        <div className='info-list'>
                            <h2>Characters who starr in: <strong>{data.title}</strong></h2>
                            <hr />
                            <ListGroup>
                                {data.characters.map((person) =>
                                (
                                    <ListGroup.Item
                                        key={person.id}
                                        action
                                        as={Link}
                                        to={`/people/${person.id}`}
                                    >{person.name}
                                    </ListGroup.Item>
                                )
                                )}
                            </ListGroup>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )

}

export default SingleFilmPage
