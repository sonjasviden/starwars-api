import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <h1 className='not-found'>Sorry, that page could not be found!</h1>
            <div className='section'>
                <img className="notfound-img" src="/star-wars-danger.png" alt="starwars-character" />
                <div className='goback-btn'>
                    <Link to="/">
                        <Button variant="light">← Go back to start</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NotFound
