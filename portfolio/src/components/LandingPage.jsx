import "../styles/LandingPage.css"
import background from "../assets/heroimage4.PNG"
import Typewriter from "../components/typewriter"
import Menu from "../components/Menu"

function LandingPage() {
    return (
        <main>
            <Menu />
            <section className="landing-page">
                <img src={background} alt="Arrière-plan ordinateur" />
                <span></span>
                <div className="landing-description">
                    <p className="first-p">Welcome I'm</p>
                    <h2>Maera Contaret</h2>
                    <Typewriter />
                </div>
            </section>
        </main>
        
    )
}

export default LandingPage