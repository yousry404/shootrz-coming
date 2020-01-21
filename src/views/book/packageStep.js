import React from "react"
import { Row, Col } from "reactstrap"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {selectPackage, setActiveStep} from "./actions"
const PackageStep = ({ packages, selectedPackage, selectPackage, setActiveStep }) => {
    const handleSelectPackage  = (packag) => {
        selectPackage({packag})
        setActiveStep({ activeStep: 5 })

    }
    return (
  <div className="book-page__package">
    <h1>Which package do you need?</h1>

    <Row>
      {packages && packages.map(packag => (
        <Col sm="6" key={packag.id}>
          <div
            className={
              packag.id === selectedPackage.id
                ? "selected-package"
                : "book-page__package__item"
            }
            onClick={() => handleSelectPackage(packag)}
          >
              <p>{packag.hours} Hours</p>
              <p>{packag.price} EGP</p>
           
          </div>
        </Col>
      ))}
    </Row>
  </div>
)}
const mapStateToProps = ({ book }) => ({
    packages: book.packages,
    selectedPackage: book.selectedPackage
  })
  const mapDispatchToProps = dispatch => bindActionCreators({ 
    selectPackage,
    setActiveStep
  },dispatch)
  export default connect(mapStateToProps, mapDispatchToProps)(PackageStep)
