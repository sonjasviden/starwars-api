import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as swapi from "../services/StarWarsAPI"
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Loading from '../components/Loading'
import { SingleSpecie } from '../types/species'

const SingleSpeciePage = () => {
    const [data, setData] = useState<SingleSpecie | null>(null)

    const { id } = useParams()
    const specieId = Number(id)

    const getPerson = async (id: number) => {
        const res = await swapi.getSpecie(id)
        setData(res)
    }

    useEffect(() => {
        getPerson(specieId)
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
                        <Link to="/species">
                            <Button variant="light">← Back to all species</Button>
                        </Link>
                    </div>
                    <h2>{data.name}</h2>
                    <div className="single-info">
                        <div className='info-list'>
                            <div className='info-box'>
                                <p><strong>Average height: </strong>{data.average_height}</p>
                                <p><strong>Average lifespan: </strong>{data.average_lifespan}</p>
                                <p><strong>Classification: </strong>{data.classification}</p>
                                <p><strong>Created: </strong>{data.created}</p>
                                <p><strong>Designation: </strong>{data.designation}</p>
                                <p><strong>Eye colors: </strong>{data.eye_colors}</p>
                            </div>
                        </div>
                        <div className='info-list'>
                            <h2>Characters that are: <strong>{data.name}</strong></h2>
                            <hr />
                            <ListGroup>
                                {data.people.map((person) =>
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

export default SingleSpeciePage
