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
import { getCategories, getLocations } from "./actions"
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

function getSteps() {
  return ["Photography Type", "Location", "Date Time", "Package"]
}

const GetStepContent = ({ step }) => {
  switch (step) {
    // case 0:
    //   return (
    //     <>
    //       <h2>Is your shoot for business or personal?</h2>
    //       <button>Business</button>
    //       <button>Personal</button>
    //     </>
    //   )
    case 0:
      return <Type />
    case 1:
      return <LocationStep />

    case 2:
      return <DateStep />

    case 3:
      return <PackageStep />
    default:
      return "Unknown step"
  }
}
const HorizontalLinearStepper = ({ bookProps }) => {
  const classes = useStyles()
  const {
    selectedCategory,
    selectedPackage,
    selectedDate,
    address,
    selectedLocation,
  } = bookProps
  const [activeStep, setActiveStep] = React.useState(0)
  // const [setSkipped] = React.useState(new Set())
  const steps = getSteps()

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  const isFormComplete =
    selectedCategory &&
    selectedPackage &&
    selectedDate &&
    address &&
    selectedLocation
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel className={classes.step}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <div style={{ textAlign: "center" }}>
        <div>
          <div className={classes.instructions}>
            {<GetStepContent step={activeStep} />}
          </div>
          <div>
            {activeStep !== 0 && (
              <NavigateBefore
                onClick={handleBack}
                className="book-page__buttons"
              />
            )}
            {activeStep !== steps.length - 1 && (
              <NavigateNext
                onClick={handleNext}
                className="book-page__buttons"
              />
            )}
          </div>
          <div>
            {!isFormComplete ? <p className="book-page__warning">Fill all Required Fields in order to proceed</p> : ""}
            <button
              disabled={!isFormComplete}
              className={
                isFormComplete
                  ? "book-page__proceed form-control"
                  : "book-page__proceed--disabled form-control"
              }
            >
              Proceed to Confirm
            </button>
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
      getLocations
    },
    dispatch
  )

const Book = ({ getCategories, book, getLocations }) => {
  useEffect(() => {
    getCategories()
    getLocations()
  }, [])
  return (
    <div className="book-page">
      <HorizontalLinearStepper bookProps={book} />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book)
