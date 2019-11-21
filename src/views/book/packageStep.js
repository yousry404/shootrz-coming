import React from "react"
import { Row, Col } from "reactstrap"
const PackageStep = ({ packages, selectedPackage }) => (
  <>
    <h2>Which package do you need?</h2>

    <Row>
      {packages.map(packag => (
        <Col sm="3" key={packag.id}>
          <div
            className={
              packag.id === selectedPackage
                ? "selected-type"
                : "book-page__type__item"
            }
            // onClick={() => handleSelectCategory(packag.id)}
          >
            {packag.name}
          </div>
        </Col>
      ))}
    </Row>
  </>
)

export default PackageStep
