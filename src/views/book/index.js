import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import { NavigateBefore, NavigateNext } from "@material-ui/icons"
import Type from "./typeStep"
import LocationStep from "./locationStep"
import DateStep from "./dateStep"
import PackageStep from "./packageStep"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {getCategories} from "./actions"
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
  const [age, setAge] = React.useState("")

  const [packages] = React.useState([
    { id:1, name: "Compact", price: "1000", time: "1" },
    { id:2, name: "Standard", price: "1800", time: "2" },
    { id:3,name: "Extended", price: "2400", time: "3" },
    { id:4,name: "Half Day", price: "2800", time: "4" },
    { id:5,name: "Full Day", price: "4500", time: "8" },
  ])
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  )

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
      const handleChange = event => {
        setAge(event.target.value)
      }

      return <LocationStep handleChange={handleChange} age={age} />

    case 2:
      const handleDateChange = date => {
        setSelectedDate(date)
      }
      return (
        <DateStep
          handleDateChange={handleDateChange}
          selectedDate={selectedDate}
        />
      )

    case 3:
      return <PackageStep packages={packages} />
    default:
      return "Unknown step"
  }
}
function HorizontalLinearStepper() {
  const classes = useStyles()

  const [activeStep, setActiveStep] = React.useState(0)
  // const [setSkipped] = React.useState(new Set())
  const steps = getSteps()

  const isStepOptional = step => {}

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.")
  //   }

  //   setActiveStep(prevActiveStep => prevActiveStep + 1)
  //   setSkipped(prevSkipped => {
  //     const newSkipped = new Set(prevSkipped.values())
  //     newSkipped.add(activeStep)
  //     return newSkipped
  //   })
  // }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          if (isStepOptional(index)) {
          }

          return (
            <Step key={label}>
              <StepLabel className={classes.step}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <div style={{ textAlign: "center" }}>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>
              {<GetStepContent step={activeStep} />}
            </div>
            <div>
              {activeStep !== 0 && <NavigateBefore onClick={handleBack} className="book-page__buttons" />}
              {activeStep !== steps.length - 1 && (
                <NavigateNext onClick={handleNext} className="book-page__buttons" />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const Book = ({getCategories}) => {
  useEffect(() => {
    getCategories()
  }, [])
  return (
    <div className="book-page">
      <HorizontalLinearStepper />
    </div>
  )
}
const mapStateToProps = ({ events }) => ({
  loading: events.loading,
  events: events.events,
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCategories,
    },
    dispatch
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book)
