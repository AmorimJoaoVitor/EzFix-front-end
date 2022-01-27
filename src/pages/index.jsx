import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Section2 from "../components/Section2"
import Section6 from "../components/Section6"
import Footer from "../components/Footer"
import Section3 from "../components/Section3"
import Section4 from "../components/Section4"
import Section5 from "../components/Section5"


function Home() {
    return (
        <>
            <Navbar fixed={true}/>
            <Banner />
            <Section2 />
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Footer />
        </>
    )
}

export default Home