import { Link } from "react-router-dom";
import "../styles/nav.scss"

export default function Nav() {
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="html">HTML</Link></li>
                    <li><Link to="css">CSS</Link></li>
                    <li><Link to="javascript">Javascript</Link></li>
                    <li><Link to="react">React</Link></li>
                    <li><Link to="headless-cms">Headless-CMS</Link></li>
                </ul>
            </nav>
        </header>
    )
}