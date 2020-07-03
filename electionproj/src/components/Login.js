import React from 'react'
import TextField from '@material-ui/core/TextField'
// import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'


const Login = () => {
  // const history = useHistory()

  // const userLoggedIn = (e) => {
  //   e.preventDefault()
  //   document.cookie = "loggedIn=true;max-age=60*1000"
  //   history.push("/")

  return (
    <div>
      <form>
        <br />
        <TextField id="standard-basic" label="Username*"style={{width: "40%"}}/>
        <br />
        <TextField id="standard-basic" label="Password*" style={{width: "40%"}} />
        <br />
        <Button type="submit" variant="contained" color="inherit" style={{margin: "30px", width:"40%"}} >
          Login
        </Button>
      </form>
    </div> 
  )
}

export default Login;