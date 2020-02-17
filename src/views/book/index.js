import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"

import { NavigateBefore, NavigateNext } from "@material-ui/icons"
import Type from "./typeStep"
import LocationStep from "./locationStep"
import DateStep from "./dateStep"
import PackageStep from "./packageStep"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import ConfirmationStep from "./confirmationStep"
import {
  getCategories,
  getLocations,
  selectType,
  setActiveStep,
} from "./actions"
const useStyles = makeStyles(theme => ({
  root: {
    width: "90%",
    margin: "auto",
  },
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: "#fe515f",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  step: {
    color: "#fe515f",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const GetStepContent = ({ step, handleSelectType, bookProps }) => {
  switch (step) {
    case 0:
      return (
        <div className="book-page__business">
          <h2>Is your shoot for business or personal?</h2>
          <div
            className={
              bookProps.selectedType === "business"
                ? "book-page__business__option--selected"
                : "book-page__business__option"
            }
            onClick={() => handleSelectType("business")}
          >
            Business
          </div>
          <div
            className={
              bookProps.selectedType === "personal"
                ? "book-page__business__option--selected"
                : "book-page__business__option"
            }
            onClick={() => handleSelectType("personal")}
          >
            Personal
          </div>
        </div>
      )
    case 1:
      return <Type />
    case 2:
      return <LocationStep />

    case 3:
      return <DateStep />

    case 4:
      return <PackageStep />
    case 5:
      return <ConfirmationStep />
    default:
      return "Unknown step"
  }
}
const HorizontalLinearStepper = ({ bookProps, selectType, setActiveStep }) => {
  const classes = useStyles()
  const {
    selectedCategory,
    selectedPackage,
    selectedDate,
    address,
    selectedLocation,
    formSubmitted,
    error,
    message,
    activeStep,
  } = bookProps
  // const [activeStep, setActiveStep] = React.useState(0)
  // const [setSkipped] = React.useState(new Set())
  const steps = ["Type", "Photography Type", "Location", "Date Time", "Package"]

  const handleBack = () => {
    setActiveStep({ activeStep: activeStep - 1 })
  }
  const handleSelectType = type => {
    setActiveStep({ activeStep: activeStep + 1 })
    selectType({ shootType: type })
  }

  const isFormComplete =
    selectedCategory &&
    selectedPackage &&
    selectedDate &&
    address &&
    selectedLocation
  return (
    <div className={classes.root}>
      <div className="book-page__stepper">
        {activeStep < 5 && (
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => {
              return (
                <Step key={label}>
                  <StepLabel className={classes.step}>{label}</StepLabel>
                </Step>
              )
            })}
          </Stepper>
        )}
      </div>
      <div className="book-page__stepper-mobile">
        <ul>
        {steps.map((label, index) => {
              return (
                <li key={label+index} className={activeStep === index + 1 && "active-step"}>
                  {label}
                </li>
              )
            })}
        </ul>
    
      </div>
      <div style={{ textAlign: "center" }}>
        <div className="book-page__steps">
          <div className={classes.instructions}>
            {
              <GetStepContent
                step={activeStep}
                handleSelectType={handleSelectType}
                bookProps={bookProps}
              />
            }
          </div>
          <div className="book-page__before-button">
            {activeStep !== 0 && (
              <NavigateBefore
                onClick={handleBack}
                className="book-page__buttons"
              />
            )}
            {/* {activeStep !== steps.length - 1 && (
              <NavigateNext
                onClick={handleNext}
                className="book-page__buttons"
              />
            )} */}
          </div>
          <div>
            {!isFormComplete}
            {(selectedCategory ||
              selectedPackage ||
              selectedLocation ||
              address) && (
              <p
                style={{
                  width: "55%",
                  textAlign: "left",
                  margin: "auto",
                  fontSize: "16px",
                }}
              >
                {Object.keys(selectedCategory).length > 0 &&
                  selectedCategory.constructor === Object &&
                  selectedCategory.name + " > "}
                {selectedLocation && selectedLocation.name}
                {address && ", " + address}
              </p>
            )}
          </div>
          <div>
            {formSubmitted && !error && (
              <div className="alert alert-success" role="alert">
                Your Event is placed successfully
              </div>
            )}
            {formSubmitted && error && (
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ book }) => ({
  book,
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCategories,
      getLocations,
      selectType,
      setActiveStep,
    },
    dispatch
  )

const Book = ({
  getCategories,
  book,
  getLocations,
  selectType,
  setActiveStep,
}) => {
  useEffect(() => {
    getCategories()
    getLocations()
  }, [])
  return (
    <div className="book-page">
      <HorizontalLinearStepper
        bookProps={book}
        selectType={selectType}
        setActiveStep={setActiveStep}
      />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book)
