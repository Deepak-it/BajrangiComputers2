import React from "react"
import Contact from "./contact"
import About from "./About"
import Services from "./services"
import '../assets/globals.css'
import Categories from "./categories"
import DocumentTitle from "../changeTitle"
import Testimonials from "./CustomerReviews"
import IntroSlides from "./IntroSlides"



const Dashboard = () => {
    DocumentTitle("Dashboard || Bajrang Computers")
    return <>
            <IntroSlides/>
            <About />
            <Services />
            <Categories />
            <Testimonials />
            <Contact />
            </>
}
 export default Dashboard