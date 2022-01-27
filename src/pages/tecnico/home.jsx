import Navbar from "../../components/tecnico/Navbar"
import BannerTecnico from "../../components/BannerTecnico"
import Section2_tecnico from "../../components/Section2Tecnico"
import Section21_tecnico from "../../components/Section2.1Tecnico"
import Section22_tecnico from "../../components/Section2.2_tecnico"
import Section3Tecnico from "../../components/Section3Tecnico"
import Footer from "../../components/Footer"


function home() {
    return (
        <>
            <Navbar fixed={true}/>
            <BannerTecnico />
            <Section2_tecnico />
            <Section21_tecnico />
            <Section22_tecnico />
            <Section3Tecnico/>
            <Footer />
        </>
    )
}

export default home