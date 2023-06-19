import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { useSearchParams } from 'react-router-dom'

interface IPaginationProps {
    page: number
    totalPages: number
    hasPreviousPage: boolean
    hasNextPage: boolean
    onPreviousPage: () => void
    onNextPage: () => void
}

const Pagination: React.FC<IPaginationProps> = ({
    page,
    totalPages,
    hasPreviousPage,
    hasNextPage,
    onPreviousPage,
    onNextPage,
}) => {
    const [searchParams, setSearchParams] = useSearchParams()

    const handlePageChange = (pageNumber: number) => {
        setSearchParams({ page: pageNumber.toString() })
    }

    useEffect(() => {
        localStorage.setItem('currentPage', page.toString())
    }, [page])

    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="prev">
                <Button
                    disabled={!hasPreviousPage}
                    onClick={() => {
                        handlePageChange(page - 1)
                        onPreviousPage()
                    }}
                    variant="primary"
                >
                    Previous Page
                </Button>
            </div>

            <div className="page">
                Page {searchParams.get('page') ?? page}/{totalPages}
            </div>

            <div className="next">
                <Button
                    disabled={!hasNextPage}
                    onClick={() => {
                        handlePageChange(page + 1)
                        onNextPage()
                    }}
                    variant="primary"
                >
                    Next Page
                </Button>
            </div>
        </div>
    )
}

export default Pagination
