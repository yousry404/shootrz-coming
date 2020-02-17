import React from "react"
import { Row, Col } from "reactstrap"
import { connect } from "react-redux"
import { bindActionCreators} from "redux"
import {selectCategory, setActiveStep} from "./actions"
const Type = ({ categories, selectedCategory, selectCategory, setActiveStep, selectedType}) => {
  const handleSelectCategory = (category) => {
    selectCategory({category})
    setActiveStep({activeStep: 2})
  }
  return (
    <div className="book-page__type">
      <h1>What kind of photography you looking for?</h1>
      <Row>
        {categories.filter(cat => cat["event_type"] === selectedType || cat["event_type"] === "both" ).map(category => (
          <Col sm="6" key={category.id}>
            <div className={category.id === selectedCategory.id ? "selected-type" : "book-page__type__item"} onClick={() => handleSelectCategory(category)} >{category.name}</div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

const mapStateToProps = ({ book: {categories, selectedCategory, selectedType} }) => ({
  categories,
  selectedCategory,
  selectedType
})
const mapDispatchToProps = dispatch => bindActionCreators({ 
  selectCategory,
  setActiveStep
},dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Type)
