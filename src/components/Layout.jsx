import Nav from "./Nav"

export default function Layout({children}) {
    return(
        <div id="StyleContainer">
            <Nav />
            <main>
                {children}
            </main>
            <footer>
                Resursarkiv arbeidskrav 2
            </footer>
           
        </div>
    )
}