import React from "react"
import InputLabel from "@material-ui/core/InputLabel"
import Input from "@material-ui/core/Input"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
const LocationStep = ({ handleChange, age }) => {
  const inputLabel = React.useRef(null)
  const [labelWidth] = React.useState(0)
  return (
    // className={classes.formControl}
    <div className="book-page__location">
      <h2>Where is the shoot taking place?</h2>
      <div className="book-page__location__inputs">
      <FormControl variant="outlined" className="book-page__location__input">
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
      {/* className={classes.formControl} */}
      {/* <FormControl variant="outlined">
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
          <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
          <MenuItem value={10}>Cairo</MenuItem>
          <MenuItem value={20}>Alexandria</MenuItem>
        </Select>
      </FormControl> */}
      <Input placeholder="address" />
      </div>
      
    </div>
  )
}

export default LocationStep