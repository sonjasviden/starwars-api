// import { useState } from "react"
// import { useSearchParams } from "react-router-dom"
// import { SearchResponse } from "../types/films"
// import ListGroup from "react-bootstrap/esm/ListGroup"

// const SearchResult = () => {
//     const [searchResult, setSearchResult] = useState<SearchResponse | null>(null)
//     const [searchParams, setSearchParams] = useSearchParams()

//     const query = searchParams.get("query")

//     return (
//         <>
//             {searchResult && (
//                 <div className="search-result">
//                     <p>Showing {searchResult.total} search results for "{query}"</p>

//                     <ListGroup className="mb-3">
//                         {searchResult.data.map(result => (
//                             <ListGroup.Item
//                                 action
//                                 href={result.episode_id}
//                                 key={result.id}
//                             >
//                                 <h2 className="h3">{result.title}</h2>
//                                 <p className="text-muted small mb-0">
//                                     {result.director} points by {result.producer}
//                                 </p>
//                             </ListGroup.Item>
//                         ))}
//                     </ListGroup>
//                 </div>
//             )}
//         </>
//     )
// }

// export default SearchResult