import React from "react"
import { Row, Col } from "reactstrap"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {selectPackage} from "./actions"
const PackageStep = ({ packages, selectedPackage, selectPackage }) => {
    const handleSelectPackage  = (id) => {
        selectPackage({id})
    }
    return (
  <div className="book-page__package">
    <h2>Which package do you need?</h2>

    <Row>
      {packages && packages.map(packag => (
        <Col sm="3" key={packag.id}>
          <div
            className={
              packag.id === selectedPackage
                ? "selected-package"
                : "book-page__package__item"
            }
            onClick={() => handleSelectPackage(packag.id)}
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
    selectPackage
  },dispatch)
  export default connect(mapStateToProps, mapDispatchToProps)(PackageStep)
