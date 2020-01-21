import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  selectPackage,
  setActiveStep,
  addConfirmFormError,
  bookEvent,
} from "./actions"
import format from "date-fns/format"
import addHours from "date-fns/addHours"
import CreateIcon from "@material-ui/icons/Create"

const OrderConfirmation = ({
  address,
  selectedPackage,
  selectedDate,
  selectedCategory,
  selectedLocation,
  setActiveStep,
  addConfirmFormError,
  confirmFormError,
  bookEvent,
}) => {
  const handleClickDate = () => {
    setActiveStep({ activeStep: 3 })
  }
  const handleClickLocation = () => {
    setActiveStep({ activeStep: 2 })
  }
  const token = JSON.parse(localStorage.getItem("shootrzToken"))

  const handleConfirm = () => {
    if (
      !address ||
      !selectedDate ||
      !selectedCategory ||
      !selectedPackage ||
      !selectedLocation
    ) {
      addConfirmFormError({ isError: true})
    } else {
      bookEvent({
        token,
        packageId: selectedPackage.id,
        typeId: selectedCategory.id,
        locationId: selectedLocation.id,
        address,
        date: selectedDate,
      })
    }
  }
  const editButtonStyle = {
    fontSize: "16px",
    lineHeight: "16px",
    cursor: "pointer",
  }
  return (
    <div className="book-page__confirm">
      <h1>Order Confirmation</h1>
      <div className="book-page__confirm__border">
        <p>For: {}</p>
        <p>
          <CreateIcon onClick={handleClickDate} style={editButtonStyle} />{" "}
          {format(selectedDate, "EEEE MMMM d, yyyy")} |{" "}
          {format(selectedDate, "h:m a")} -{" "}
          {format(addHours(selectedDate, 2), "h:m a")}
        </p>
        {address && (
          <p>
            <CreateIcon onClick={handleClickLocation} style={editButtonStyle} />{" "}
            {address}
          </p>
        )}
        {selectedLocation && (
          <p>
            {" "}
            <CreateIcon
              onClick={handleClickLocation}
              style={editButtonStyle}
            />{" "}
            {selectedLocation.name}
          </p>
        )}
        <p>{selectedCategory.name} Photography</p>
        <p>
          {selectedPackage.name} Package x {selectedPackage.hours} Hours
        </p>
      </div>
      <button
        className="book-page__confirm__button mt-3"
        onClick={handleConfirm}
      >
        Confirm
      </button>
      {confirmFormError && (
        <p>Please fill all required data in order to confirm.</p>
      )}
    </div>
  )
}
const mapStateToProps = ({
  book: {
    selectedPackage,
    selectedDate,
    selectedLocation,
    address,
    selectedCategory,
    confirmFormError,
  },
}) => ({
  selectedPackage,
  selectedDate,
  selectedLocation,
  address,
  selectedCategory,
  confirmFormError,
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectPackage,
      setActiveStep,
      addConfirmFormError,
      bookEvent,
    },
    dispatch
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderConfirmation)
