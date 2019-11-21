import React from "react"
import { Row, Col } from "reactstrap"
import { connect } from "react-redux"
import { bindActionCreators} from "redux"
import {selectCategory} from "./actions"
const Type = ({ categories, selectedCategory, selectCategory}) => {
  const handleSelectCategory = (id) => {
    selectCategory({id})
  }
  return (
    <div className="book-page__type">
      <h1>What kind of photography you looking for?</h1>
      <Row>
        {categories.map(category => (
          <Col sm="3" key={category.id}>
            <div className={category.id === selectedCategory ? "selected-type" : "book-page__type__item"} onClick={() => handleSelectCategory(category.id)} >{category.name}</div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

const mapStateToProps = ({ book }) => ({
  categories: book.categories,
  selectedCategory: book.selectedCategory
})
const mapDispatchToProps = dispatch => bindActionCreators({ 
  selectCategory
},dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Type)
