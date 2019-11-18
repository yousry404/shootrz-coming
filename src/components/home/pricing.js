import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import {Link} from 'gatsby'
const Pricing = () => {
  const [packages] = useState([
    { title: "Compact", price: "1000", time: "1" },
    { title: "Standard", price: "1800", time: "2" },
    { title: "Extended", price: "2400", time: "3" },
    { title: "Half Day", price: "2800", time: "4" },
    { title: "Full Day", price: "4500", time: "8" }
  ]);
  return (
    <section className="pricing" id="pricing">
      <h1>Pricing</h1>
      <div className="pricing__items d-flex justify-content-between">
        {packages.map(pack => {
          return (
            <div className="pricing__item" key={pack.time}>
            <Card>
                <CardBody>
                <CardTitle>{pack.title}</CardTitle>
                <CardSubtitle>{pack.price} EGP</CardSubtitle>
                
                    <ul>
                        <li>{pack.time} hour shoot</li>
                        <li>Unlimited photos</li>
                        <li>Editing Included</li>
                    </ul>
                
                </CardBody>
                <Link to="/book" className="pricing__item__button">Book now</Link>
              
            </Card>
            </div>
          );
        })}
      </div>
     
    </section>
  );
};

export default Pricing;
