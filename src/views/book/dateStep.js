import React from 'react';
import DateFnsUtils from "@date-io/date-fns"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {selectDate} from "./actions"
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardTimePicker
  } from "@material-ui/pickers"
const DateStep = ({selectDate, selectedDate}) => {
    const today = new Date();
    const handleDateChange = (date) => {
        selectDate({date})
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
          minDate={today}
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
            'aria-label': 'change time',
          }}
        />
       
      </MuiPickersUtilsProvider>
      
    </>
  )}

const mapStateToProps = ({ book }) => ({
    selectedDate: book.selectedDate,
  })
  const mapDispatchToProps = dispatch => bindActionCreators({ 
    selectDate
  },dispatch)
  export default connect(mapStateToProps, mapDispatchToProps)(DateStep)

