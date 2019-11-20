import React, { useState } from "react"
import { Card, CardImg, CardTitle } from "reactstrap"
import weddingSrc from "../../images/wedding.webp"
import portraitSrc from "../../images/portrait.webp"
import foodSrc from "../../images/food.webp"
import eventSrc from "../../images/wedding.webp"
import fashionSrc from "../../images/fashion.webp"
import babySrc from "../../images/baby.webp"
import graduationSrc from "../../images/graduation.webp"
import realEstateSrc from "../../images/real-estate.webp"
const Categories = () => {
  const [categories] = useState([
    { name: "Wedding/Engagement", src: weddingSrc },
    { name: "Portrait/Cooperate photoshoot", src: portraitSrc },
    { name: "Food", src: foodSrc },
    { name: "Event", src: eventSrc },
    { name: "Fashion", src: fashionSrc },
    { name: "Real Estate", src: realEstateSrc },
    { name: "Baby/Family", src: babySrc },
    { name: "Graduation", src: graduationSrc },
  ])
  return (
    <section className="categories">
      <h1>Categories</h1>
      <div className="row">
        {categories.map(category => {
          return (
            <div className="col-md-3 card-item" key={category.name}>
              <div className="card-contain">
                <Card>
                  <CardImg
                    src={category.src}
                    top
                    height="340"
                    alt="Card image cap"
                  />
                  <div className="card__body">
                    <CardTitle className="card__title">
                      {category.name}
                    </CardTitle>
                  </div>
                </Card>
              </div>
            </div>
          )
        })}
      </div>
      
    </section>
  )
}

export default Categories
