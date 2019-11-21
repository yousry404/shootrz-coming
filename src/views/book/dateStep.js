import React from 'react';
import DateFnsUtils from "@date-io/date-fns"

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from "@material-ui/pickers"
const DateStep = ({handleDateChange, selectedDate}) => (
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
       
      </MuiPickersUtilsProvider>
      
    </>
  )

export default DateStep;
