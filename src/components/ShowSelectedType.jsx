import  React from "react"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

const ShowSelectedType = ({toggleSelected}) => {
  const [show, setShow] = React.useState("All")

  const handleChange = (event) => {
    setShow(event.target.value)
    toggleSelected(event.target.value)
  }

  return (
    <React.Fragment>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={show}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Withdrawal">Withdrawal</MenuItem>
          <MenuItem value="Refill">Refill</MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
  )
}

export default ShowSelectedType