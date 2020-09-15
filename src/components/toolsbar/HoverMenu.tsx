import React, {useState} from "react"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import {Phone} from "@material-ui/icons/"
import {
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hoverBtn: {
      background: "#fff",
      color: "var(--primary-blue)",
      fontWeight: "bold",
    },
    contactStyle: {
      background: "var(--primary-blue)",
      width: "26px",
      height: "26px",
      color: "#fff",
      margin: "auto 10px",
      transition: "0.2s",
      transform: "",
      overflow: "hidden",
      "&:hover": {
        width: "100px",
        color: "var(--primary-blue)",
        borderRadius: "50px",
      },
      "&:hover $numberTel": {
        display: "block",
      },
    },
    lngStyle: {
      width: "26px",
      height: "26px",
      margin: "auto",
    },
    contactIcon: {
      height: "16px",
    },
    expandMenu: {
      background: "#0000",
      color: "#617179",
      position: "fixed",
      top: "50px",
      zIndex: 99999,
      padding: "30px 0 0 0",
      minWidth: "300px",
    },
    subMenu: {
      border: "1px solid #61717929",
      padding: "0px",
      background: "#fff",
    },
    hoverSubMenu: {
      padding: 0,
    },
    listMenu: {
      height: "60px",
    },
    numberTel: {
      display: "none",
      color: "var(--primary-blue)",
    },
  })
)

export const HoverMenu = ({hoverMenu}: {hoverMenu: any}) => {
  const classes = useStyles()
  const [menuSelect, setMenuSelect] = useState<number>(-1)

  const handleSelecrMenu = (id: number) => () => {
    setMenuSelect(id)
  }

  return (
    <>
      <Box display="flex">
        {hoverMenu.map((menu: any) => (
          <div style={{position: "relative"}} key={menu.header}>
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              className={classes.hoverBtn}
              onMouseEnter={handleSelecrMenu(menu.id)}
              onMouseLeave={handleSelecrMenu(-1)}
              disableElevation={true}
              size="medium"
              disableRipple={true}
            >
              {menu.header}
            </Button>
            {menuSelect !== -1 && menuSelect === menu.id && (
              <div
                className={classes.expandMenu}
                onMouseEnter={handleSelecrMenu(menu.id)}
                onMouseLeave={handleSelecrMenu(-1)}
              >
                {menu.subMenu.map((sub: any) => (
                  <div className={classes.subMenu} key={sub.title}>
                    <List
                      component="nav"
                      className={classes.hoverSubMenu}
                      aria-label="menu-header"
                    >
                      <ListItem button className={classes.listMenu}>
                        <Typography variant="body1">
                          <Link href={sub.link}>{sub.title}</Link>
                        </Typography>
                      </ListItem>
                    </List>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <IconButton
          className={classes.contactStyle}
          size="small"
          aria-label="contact"
          color="secondary"
          disableRipple={true}
        >
          <Box display="flex">
            <Phone className={classes.contactIcon} />
            <Typography variant="caption" className={classes.numberTel}>
              02-2225555
            </Typography>
          </Box>
        </IconButton>
        <IconButton
          className={classes.lngStyle}
          size="small"
          aria-label="contact"
          color="primary"
          disableRipple={true}
        >
          EN
        </IconButton>
      </Box>
    </>
  )
}
