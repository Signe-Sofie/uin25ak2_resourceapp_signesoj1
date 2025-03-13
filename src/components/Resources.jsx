import { Link } from "react-router-dom"
import resources from "../assets/resources.js"
import PageTitle from "./PageTitle.jsx"


export default function Resources({category}) {
    const filter = resources.filter(resource => resource.category === category)
    console.log(filter)
    return(
        <>
                <PageTitle overskrift={filter [0].category} />
                {filter.map((filterResources) => 
                    <article key={filterResources.title}>
                    <h3 id="headtext">{filterResources.title}</h3>
                        <ul>
                           <li>
                                <Link to={filterResources.url}>Les mer</Link>
                            </li> 
                        </ul>
                </article>
            )}
        </>
    )
}