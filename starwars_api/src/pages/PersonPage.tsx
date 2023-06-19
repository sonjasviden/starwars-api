import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as swapi from "../services/StarWarsAPI"
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Loading from '../components/Loading'
import { SinglePerson } from '../types/people'

const SinglePersonPage = () => {
    const [data, setData] = useState<SinglePerson | null>(null)

    const { id } = useParams()
    const personId = Number(id)

    const getPerson = async (id: number) => {
        const res = await swapi.getPerson(id)
        setData(res)
    }

    useEffect(() => {
        getPerson(personId)
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
                        <Link to="/people">
                            <Button variant="light">← Back to all characters</Button>
                        </Link>
                    </div>
                    <h2>{data.name}</h2>
                    <div className="single-info">
                        <div className='info-list'>
                            <div className='info-box'>
                                <p><strong>Birth year: </strong>{data.birth_year}</p>
                                <p><strong>Eye color: </strong>{data.eye_color}</p>
                                <p><strong>Hair color: </strong>{data.hair_color}</p>
                                <p><strong>Height: </strong>{data.height}</p>
                                <p><strong>Mass: </strong>{data.mass} kg</p>
                                <p><strong>Skin color: </strong>{data.skin_color}</p>
                            </div>
                        </div>
                        <div className='info-list'>
                            <h2>Films <strong>{data.name}</strong> starr in</h2>
                            <hr />
                            <ListGroup>
                                {data.films.map((film) =>
                                (
                                    <ListGroup.Item
                                        key={film.id}
                                        action
                                        as={Link}
                                        to={`/films/${film.id}`}
                                    >{film.title}
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

export default SinglePersonPage
