import React from "react"
import InputLabel from "@material-ui/core/InputLabel"
import Input from "@material-ui/core/Input"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import { selectLocation, changeAddress } from "./actions"

const LocationStep = ({ selectLocation, selectedLocation, locations, address, changeAddress }) => {
  const handleChange = ({target}) => {
    selectLocation({ id: target.value})
  }
  const handleAddressChange = ({target}) => {
    changeAddress({ address: target.value})
  }
  return (
    // className={classes.formControl}
    <div className="book-page__location">
      <h2>Where is the shoot taking place?</h2>
      <div className="book-page__location__inputs">
      <FormControl variant="outlined" className="book-page__location__input">
        <InputLabel>
          Governorate
        </InputLabel>
        <Select
        
          value={selectedLocation}
          onChange={handleChange}
          
        >
          {
            locations.map(location =>(<MenuItem key={location.id} value={location.id}>{location.name}</MenuItem>))

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
  changeAddress
},dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(LocationStep)

