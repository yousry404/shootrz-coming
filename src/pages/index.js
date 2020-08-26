import React, { useState } from "react"

import SEO from "../components/seo"
import "../css/style.css"
import Logo from "../images/logo.svg"
import Airtable from "airtable";
import Camera  from "../images/shootrz-photo.webp"

const IndexPage = () => {
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
            setEmail("");
          })
        }
      )
    }
  }

  return (
    <div className="page-container">
      <SEO title="Shootrz - On-demand Photography" />
      <header>
        <div className="row no-gutters">
          <div className="col-md-5 offset-md-2">
            <div className="shootrz">
              <div className="title">
              <img src={Logo} alt="Shootz" />
              <h1>SHOOTRZ</h1>
              </div>
              <p className="on-demand">
                Photographers on-demand
              </p>
              <p className="mena">in Egypt</p>
              <p className="soon">coming soon!</p>
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
                      className={loading ? "subscribe__button button-loading" : "subscribe__button"}
                      id="button-addon2"
                      type="submit"
                      value="Subscribe"
                      disabled={loading}
                      />
                  </div>
                  {success && <p className="result">Thank you for subscribing to Shootrz</p>}
                  {error && <p className="result">Please try again</p>}
                </form>
                <a className="interested" href="https://photographer.shootrz.co/app/signup" target="_blank">Are you a photographer? You can join from here.</a>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="image-container">
              <img src={Camera} alt="Shootz" />
            </div>
          </div>
        </div>
      </header>
      <footer>
        <p>&copy; All Copyrights reserved to Shootrz 2020.</p>
      </footer>
    </div>
  )
}

export default IndexPage
