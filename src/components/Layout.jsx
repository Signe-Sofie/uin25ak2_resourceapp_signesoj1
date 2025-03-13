import Nav from "./Nav"
import "../styles/layout.scss"

export default function Layout({children}) {
    return(
        <div id="StyleContainer">
            <Nav />
            <main>
                {children}
            </main>
            
        </div>
    )
}