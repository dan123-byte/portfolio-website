import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Projects from "./components/Projects";
import TechnicalSkills from "./components/TechnicalSkills";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Home />
                <Education />
                <Projects />
                <TechnicalSkills />
            </main>

            <Footer />
        </>
    );
}

export default App;