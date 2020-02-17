import React from "react"
import InputLabel from "@material-ui/core/InputLabel"
import Input from "@material-ui/core/Input"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import { selectLocation, changeAddress, setActiveStep } from "./actions"
import DateFnsUtils from '@date-io/date-fns';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    fontFamily:"AGBold",
    fontSize: "14px"
  }
 
}));
const LocationStep = ({ selectLocation, selectedLocation, locations, address, changeAddress, setActiveStep }) => {
  const handleChange = ({target}) => {
    selectLocation({ location: target.value})
  }
  const handleAddressChange = ({target}) => {
    changeAddress({ address: target.value})
  }
  const handleClickNext = () => {
    setActiveStep({ activeStep: 3})
  }
  const classes = useStyles()
  return (
    // className={classes.formControl}
    <div className="book-page__location">
      <h1>Where is the shoot taking place?</h1>
      <div className="book-page__location__inputs">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">
          Governorate
        </InputLabel>
        <Select
        
          value={selectedLocation}
          onChange={handleChange}
          
        >
          {
            locations.map(location =>(<MenuItem key={location.id} value={location}>{location.name}</MenuItem>))

          }
          
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
      <Input placeholder="address" onChange={handleAddressChange} value={address} />
      <button className="book-page__location__next mt-3" onClick={handleClickNext}>
        Next
      </button>
      </div>
      
    </div>
  )
}

const mapStateToProps = ({ book }) => ({
  locations: book.locations,
  selectedLocation: book.selectedLocation,
  address: book.address
})
const mapDispatchToProps = dispatch => bindActionCreators({ 
  selectLocation,
  changeAddress,
  setActiveStep
},dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(LocationStep)

