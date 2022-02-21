import React from "react"
import { Grid, Typography, List, ListItem } from "@mui/material"
import "../App.css"
import { GoogleLogin } from "react-google-login"

function Home() {
  const id = process.env.REACT_APP_CLIENT_ID
  const onLoginSuccess = () => {

    console.log("Login successful")
  }
  const onLoginFailure = () => {

    console.log("Login failed")
  }
  return (
    <div className="home">
      <Grid container spacing={0.5}>
        <Grid item md={8} className="home__info">
          <div className="home__info">
            <Typography>
              To use WhatsApp on your computer
            </Typography>
            <br />
            <br />
            <List>
              <ListItem>1. Open WhatsApp on your phone</ListItem>
              <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
              <ListItem>3. Point your phone to this screen to capture the code </ListItem>
            </List>
            {console.log(process.env)}
          </div>
        </Grid>
        <Grid item md={4} className="home__qr">

          <img src='https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg' />
          <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText=""
            isSignedIn={true}
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={'single_host_origin'}
          />

        </Grid>
      </Grid>
    </div>
  )
}

export default Home