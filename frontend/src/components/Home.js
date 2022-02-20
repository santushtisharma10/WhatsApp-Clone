import React from "react"
import {Grid, Typography, List, ListItem} from "@mui/material"
import "../App.css"


function Home() {

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
            <ListItem>3. Point your phone to this screen to capture the code</ListItem>
          </List>
          </div>
        </Grid>
        <Grid item md={4} className="home__qr">
    
          <img src='https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg' />
        
        </Grid>
      </Grid>
    </div>
  )
}

export default Home