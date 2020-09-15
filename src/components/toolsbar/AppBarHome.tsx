import React, {useState} from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import {
  Collapse,
  Container,
  createStyles,
  Divider,
  Hidden,
  Link,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import {HoverMenu} from "./HoverMenu"
import {Menu, Close} from "@material-ui/icons/"

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

const headerMenu = [
  {
    header: "รถยนต์",
    id: 1,
    subMenu: [
      {title: "ซื้อประกันรถยนต์", link: "/ประกันภัยรถยนต์"},
      {title: "ชั้น1", link: "/ประกันภัยรถยนต์"},
      {title: "ชั้น2", link: "/ประกันภัยรถยนต์"},
      {title: "ชั้น3", link: "/ประกันภัยรถยนต์"},
    ],
  },
  {
    header: "รถจักรยายยนต์",
    id: 2,
    subMenu: [
      {title: "ซื้อประกันรถรถจักรยานยนต์", link: "/ประกันภัยรถยนต์"},
      {title: "ชั้น1", link: "/ประกันภัยรถยนต์"},
      {title: "ชั้น2", link: "/ประกันภัยรถยนต์"},
      {title: "ชั้น3", link: "/ประกันภัยรถยนต์"},
    ],
  },
  {
    header: "เดินทาง",
    id: 3,
    subMenu: [
      {title: "ซื้อประกันเดินทาง", link: "/ประกันภัยรถยนต์"},
      {title: "ความคุ้มครองวีซ่า", link: "/ประกันภัยรถยนต์"},
      {title: "ความคุ้มครองค่ารักษาพยาบาล", link: "/ประกันภัยรถยนต์"},
    ],
  },
  {
    header: "อุบัติเหตุ",
    id: 4,
    subMenu: [{title: "ซื้อประกันอุบัติเหตุ", link: "/ประกันภัยรถยนต์"}],
  },
  {
    header: "ที่อยู่อาศัย",
    id: 5,
    subMenu: [
      {title: "ซื้อประกันบ้านและทรัพย์สิน", link: "/ประกันภัยรถยนต์"},
      {title: "เคล็ดลับประกันบ้าน", link: "/ประกันภัยรถยนต์"},
      {title: "ข้อตกลงและเงื่อนไข", link: "/ประกันภัยรถยนต์"},
      {title: "คำถามที่พบบ่อย", link: "/ประกันภัยรถยนต์"},
    ],
  },
  {
    header: "ประกันกลุ่ม",
    id: 6,
    subMenu: [
      {title: "ขอใบเสนอราคา", link: "/ประกันภัยรถยนต์"},
      {title: "ข้อตกลงและเงื่อนไข", link: "/ประกันภัยรถยนต์"},
    ],
  },
  {
    header: "ประกันสุขภาพ",
    id: 7,
    subMenu: [
      {title: "ซื้อประกันประกันสุขภาพ", link: "/ประกันภัยรถยนต์"},
      {title: "เคล็ดลับประกันสุขภาพ", link: "/ประกันภัยรถยนต์"},
      {title: "ข้อตกลงและเงื่อนไข", link: "/ประกันภัยรถยนต์"},
      {title: "คำถามที่พบบ่อย", link: "/ประกันภัยรถยนต์"},
    ],
  },
  {
    header: "เกี่ยวกับเรา",
    id: 8,
    subMenu: [{title: "หน้าหลัก", link: "/"}],
  },
]

export const AppBarHome = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <>
      <AppBar position="static" elevation={1} className={classes.appBarStyle}>
        <Container>
          <Toolbar className={classes.toolBar}>
            <div className={classes.logoContainer}>
              <a href="/">
                <div className={classes.logoContainer}></div>
              </a>
            </div>
            <Hidden smDown={true}>
              <HoverMenu hoverMenu={headerMenu} />
            </Hidden>
            <Hidden smUp={true}>
              <List component="nav" aria-labelledby="nested-list-subheader">
                <ListItem button onClick={handleClick}>
                  {open ? <Close color="primary" /> : <Menu color="primary" />}
                </ListItem>
              </List>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      {open && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            background: "#fff",
            top: "82px",
            zIndex: 9999,
          }}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List
              style={{textDecoration: "none"}}
              component="div"
              disablePadding
            >
              {headerMenu.map((each) => (
                <Link href="/ประกันภัยรถยนต์" key={each.id}>
                  <ListItem button divider={true}>
                    <Typography variant="body1" color="primary">
                      {each.header}
                    </Typography>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Collapse>
        </div>
      )}
    </>
  )
}
