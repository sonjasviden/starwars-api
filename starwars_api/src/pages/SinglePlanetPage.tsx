import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as swapi from "../services/StarWarsAPI"
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Loading from '../components/Loading'
import { SinglePlanet } from '../types/planets'

const SinglePlanetPage = () => {
    const [data, setData] = useState<SinglePlanet | null>(null)

    const { id } = useParams()
    const planetId = Number(id)

    const getPlanet = async (id: number) => {
        const res = await swapi.getPlanet(id)
        setData(res)
    }

    useEffect(() => {
        getPlanet(planetId)
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
                        <Link to="/planets">
                            <Button variant="light">← Back to all planets</Button>
                        </Link>
                    </div>
                    <h2>{data.name}</h2>
                    <div className="single-info">
                        <div className='info-list'>
                            <div className='info-box'>
                                <p><strong>Climate: </strong>{data.climate}</p>
                                <p><strong>Created: </strong>{data.created}</p>
                                <p><strong>Diameter: </strong>{data.diameter}</p>
                                <p><strong>Gravity: </strong>{data.gravity}</p>
                                <p><strong>Orbitual period: </strong>{data.orbital_period}</p>
                                <p><strong>Population: </strong>{data.population}</p>
                            </div>
                        </div>
                        <div className='info-list'>
                            <h2>Residents on: <strong>{data.name}</strong></h2>
                            <hr />
                            <ListGroup>
                                {data.residents.map((person) =>
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

export default SinglePlanetPage
