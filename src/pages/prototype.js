import React from "react"
import Layout from "../components/Applayout"
import Categories from "../components/home/categories"
import Pricing from "../components/home/pricing"
import WhyShootrz from "../components/home/why"
import Footer from "../components/home/footer"
import { Link } from "gatsby"
import "../css/layout.scss"
import SEO from "../components/seo"

const Home = () => {
  return (
    <div className="protoype">
      <SEO title="Shootrz - On-demand Photography" />
      <Layout>
        <div className="contain-header">
          <div className="header">
            <h1>
              Book a professional photographer at an affordable price in Egypt.
            </h1>
            <p>
              Our hand-picked photographers deliver high quality photo shoots
              for set fees starting from 1000 EGP, on-demand.
            </p>
            <Link to="/app/book" className="header__button">
              Book Now
            </Link>
          </div>
        </div>

        <div className="contain">
          <Categories />
          <Pricing />
          <WhyShootrz />
        </div>
        <Footer />
      </Layout>
    </div>
  )
}

export default Home
