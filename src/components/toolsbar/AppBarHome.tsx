import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import {Container, createStyles, Hidden, makeStyles, Theme} from "@material-ui/core"
import {HoverMenu} from "./HoverMenu"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logoContainer: {
      backgroundImage: "var(--main-logo_-_background-image)",
      height: "80px",
      width: "160px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "center",
    },
    appBarStyle: {
      backgroundColor: "#fff",
      boxShadow:
        "0px 2px 1px -1px #29579b0d, 0px 1px 1px 0px #29579b0d, 0px 1px 3px 0px #29579b0d;",
    },
    toolBar: {
      justifyContent: "space-between",
      padding: "0",
    },
  })
)

export const AppBarHome = () => {
  const classes = useStyles()
  return (
    <AppBar position="static" elevation={1} className={classes.appBarStyle}>
      <Container>
        <Toolbar className={classes.toolBar}>
          <div className={classes.logoContainer}>
            <a href="/">
              <div className={classes.logoContainer}></div>
            </a>
          </div>
          <Hidden smDown={true}>
            <HoverMenu />
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
