import React, { useState } from "react"
import { Card, CardImg, CardBody } from "reactstrap"
import easy from "../../images/easy.svg"
import affordable from "../../images/affordable.svg"
import top from "../../images/top.svg"
import fast from "../../images/fast.svg"
const WhyShootrz = () => {
  const [reasons] = useState([
    {
      src: easy,
      title: "Easy",
      body: "Book in less than 3 minutes.",
    },
    {
      src: affordable,
      title: "Affordable",
      body: "Up to 50% market price.",
    },
    {
      src: top,
      title: "Top Talents",
      body: "We accept only to 10% of photographers.",
    },
    {
      src: fast,
      title: "Fast Delivery",
      body: "Receive edited photos within 48 hours after the photoshoot.",
    },
  ])
  return (
    <section className="why">
      <h1>Why Shootrz?</h1>
      <div className="why__items">
        {reasons.map(reason => {
          return (
            <Card key={reason.title}>
              <CardImg
                top
                
                height="100"
                src={reason.src}
                alt="Card image cap"
              />

              <CardBody>
                <h3>{reason.title}</h3>
                <p>{reason.body}</p>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default WhyShootrz
