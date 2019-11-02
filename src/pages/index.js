import React, { useState } from "react"

import SEO from "../components/seo"
import "../css/style.css"
import Logo from "../images/logo.svg"
import Airtable from "airtable"
// import dotenv from "dotenv"

const IndexPage = () => {
  // dotenv.config()
  const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE }).base(
    "appchyGLZEPkWM5qj"
  )
  const [email, setEmail] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleChangeEmail = e => {
    setEmail(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()

    if (email.length > 0) {
      setLoading(true)
      base("Email").create(
        [
          {
            fields: {
              Name: email,
            },
          },
        ],
        function(err, records) {
          setLoading(false)
  
          if (err) {
            console.error(err)
            setError(true)
            return
          }
          records.forEach(function(record) {
            setSuccess(true)
          })
        }
      )
    }
   
  }

  return (
    <>
      <SEO title="Shootrz - On-demand Photography" />
      <header>
        <div className="row">
          <div className="col-md-7">
            <div className="shootrz">
              <h1>Shootrz</h1>
              <p className="on-demand">
                Photographers on-demand in MENA Region, <span>coming soon!</span>
              </p>
              <p className="interested">Interested in the idea? we can notify you once we start.</p>
              <div className="subscribe">
                <form className="input-group" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter you email"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      onChange={handleChangeEmail}
                      value={email}
                    />
                    <div className="input-group-append ">
                      <input
                        className="btn btn-light subscribe__button"
                        id="button-addon2"
                        type="submit"
                        value="Subscribe"
                        disabled={loading}
                       />
                    </div>
                </form>

                {success && <p className="result">Thank you</p>}
                {error && <p className="result">Please try again</p>}
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="image-container">
              <img src={Logo} alt="Shootz" />
            </div>
          </div>
        </div>
      </header>
      <footer>
        <p>&copy; All Copyrights reserved to Shootrz 2019.</p>
      </footer>
    </>
  )
}

export default IndexPage
