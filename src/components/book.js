import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import DateFnsUtils from "@date-io/date-fns"
import { NavigateBefore, NavigateNext } from "@material-ui/icons"
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import { Row, Col } from "reactstrap"
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
  const classes = useStyles()

  const [age, setAge] = React.useState("")

  const inputLabel = React.useRef(null)
  const [
    labelWidth,
    // setLabelWidth
  ] = React.useState(0)
  // React.useEffect(() => {
  //   setLabelWidth(inputLabel.current.offsetWidth);
  // }, []);
  const [packages] = React.useState([
    { title: "Compact", price: "1000", time: "1" },
    { title: "Standard", price: "1800", time: "2" },
    { title: "Extended", price: "2400", time: "3" },
    { title: "Half Day", price: "2800", time: "4" },
    { title: "Full Day", price: "4500", time: "8" },
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
      return (
        <>
          <h1>What kind of photography you looking for?</h1>

          <button>Wedding</button>
          <button>Engagement</button>
          <button>Baby</button>
          <button>Couples</button>
          <button>Travel</button>
          <button>Birthday</button>
          <button>Business</button>
          <button>Party</button>
        </>
      )
    case 1:
      const handleChange = event => {
        setAge(event.target.value)
      }

      return (
        <>
          <h2>Where is the shoot taking place?</h2>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
              Governorate
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
              labelWidth={labelWidth}
            >
              <MenuItem value={10}>Cairo</MenuItem>
              <MenuItem value={20}>Alexandria</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
              Area
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
              labelWidth={labelWidth}
            >
              {/* <MenuItem value="">
                <em>None</em>
              </MenuItem> */}
              <MenuItem value={10}>Cairo</MenuItem>
              <MenuItem value={20}>Alexandria</MenuItem>
            </Select>
          </FormControl>
          <input placeholder="address" />
        </>
      )

    case 2:
      const handleDateChange = date => {
        setSelectedDate(date)
      }
      return (
        <>
          <h2>When do you need the photographer?</h2>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </MuiPickersUtilsProvider>
          d
        </>
      )

    case 3:
      return (
        <>
          <h2>Which package do you need?</h2>
          <Row>
            {packages.map(pack => {
              return (
                <Col md="4">
                  <div>
                    <h3>{pack.title}</h3>
                    <p>{pack.price} EGP</p>

                    <ul>
                      <li>{pack.time} hour shoot</li>
                      <li>Unlimited photos</li>
                      <li>Editing Included</li>
                    </ul>
                  </div>
                </Col>
              )
            })}
          </Row>
        </>
      )
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
              {/* <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button> */}

              {activeStep !== 0 && <NavigateBefore onClick={handleBack} />}
              {activeStep !== steps.length - 1 && (
                <NavigateNext onClick={handleNext} className={classes.button} />
              )}
              {/* <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const Book = () => {
  return (
    <div>
      <HorizontalLinearStepper />
    </div>
  )
}

export default Book
