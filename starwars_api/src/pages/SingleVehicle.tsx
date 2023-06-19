import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as swapi from "../services/StarWarsAPI"
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Loading from '../components/Loading'
import { SingleVehicle } from '../types/vehicles'

const SingleVehiclePage = () => {
    const [data, setData] = useState<SingleVehicle | null>(null)

    const { id } = useParams()
    const vehicleId = Number(id)

    const getVehicle = async (id: number) => {
        const res = await swapi.getVehicle(id)
        setData(res)
    }

    useEffect(() => {
        getVehicle(vehicleId)
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
                        <Link to="/vehicles">
                            <Button variant="light">← Back to all vehicles</Button>
                        </Link>
                    </div>
                    <h2>{data.name}</h2>
                    <div className="single-info">
                        <div className='info-list'>
                            <div className='info-box'>
                                <p><strong>Cargo capacity: </strong>{data.cargo_capacity}</p>
                                <p><strong>Consumables: </strong>{data.consumables}</p>
                                <p><strong>Cost in credits: </strong>{data.cost_in_credits}</p>
                                <p><strong>Crew: </strong>{data.crew}</p>
                                <p><strong>Length: </strong>{data.length}</p>
                                <p><strong>Manufacturer: </strong>{data.manufacturer}</p>
                                <p><strong>Max atmosphering speed: </strong>{data.max_atmosphering_speed}</p>
                                <p><strong>Model: </strong>{data.model}</p>
                                <p><strong>Passengers: </strong>{data.passengers}</p>
                                <p><strong>Pilots: </strong>{data.pilots}</p>
                                <p><strong>Vehicle class: </strong>{data.vehicle_class}</p>
                            </div>
                        </div>
                        <div className='info-list'>
                            <h2>Films where <strong>{data.name}</strong> appear:</h2>
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

export default SingleVehiclePage
