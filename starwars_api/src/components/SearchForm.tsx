import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

interface IProps {
    handleSubmit: (e: React.FormEvent) => void
    setSearchInput: (value: React.SetStateAction<string>) => void
    searchInput: string
}

const SearchForm: React.FC<IProps> = ({ handleSubmit, setSearchInput, searchInput }) => {

    return (
        <>
            <Form className="mb-4 search-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="searchQuery">
                    <Form.Label className="form-title">Search Query</Form.Label>
                    <Form.Control
                        onChange={e => setSearchInput(e.target.value)}
                        placeholder="Enter your search query"
                        required
                        type="text"
                        value={searchInput}
                    />
                </Form.Group>

                <div className="d-flex justify-content-end">
                    <Button
                        type="submit"
                        disabled={!searchInput.trim().length}
                        className="search-btn"
                    >Search</Button>
                </div>
            </Form>
        </>
    )

}

export default SearchForm