import React, {useState} from "react"
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Collapse from "@material-ui/core/Collapse"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import StarBorder from "@material-ui/icons/StarBorder"
import {Button, Container, Divider, Grid, Typography} from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      //   maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    mainContainer: {
      //   height: "1000px",
      marginTop: "50px",
      background: "#F7F7F7",
      padding: "50px 0",
    },
    headerExpand: {
      fontWeight: "bold",
      fontSize: "20px",
      color: "var(--primary-blue)",
    },
    detailText: {
      color: "var(--primary-blue)",
      padding: "50px 20px ",
    },
  })
)

export const FrankQA = () => {
  const classes = useStyles()
  const [open, setOpen] = useState<0 | 1 | 2 | 3>(1)

  const handleClick = (id: 0 | 1 | 2 | 3) => () => {
    let old = id
    if (old !== open) {
      setOpen(id)
    } else {
      setOpen(0)
    }
  }

  return (
    <div className={classes.mainContainer}>
      <Container>
        <Typography variant="h4" color="primary" style={{marginBottom: "50px"}}>
          Frank ทำให้ประกันเป็นเรื่องรวดเร็ว เรียบง่าย และจริงใจกับทุกคน
        </Typography>
        <Grid container={true}>
          <Grid item={true} md={3} sm={12} xs={12}>
            <img
              style={{width: "100%"}}
              src="https://d1lcu695erj7bo.cloudfront.net/media/18287/17914/1599753412-family-1.png"
              alt="penguin-fam"
            />
          </Grid>
          <Grid item={true} md={9} sm={12} xs={12}>
            <div>
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
              >
                <ListItem button onClick={handleClick(1)}>
                  <Typography className={classes.headerExpand}>
                    Frank ทำให้ประกันภัยเป็นเรื่องง่าย ตรงไปตรงมา และเชื่อถือได้
                  </Typography>
                  {open === 1 ? (
                    <ExpandLess color="primary" style={{marginLeft: "auto"}} />
                  ) : (
                    <ExpandMore color="primary" style={{marginLeft: "auto"}} />
                  )}
                </ListItem>
                <Collapse in={open === 1} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem className={classes.nested}>
                      <Typography className={classes.detailText}>
                        เรามุ่งมั่นที่จะทำให้การประกันภัยเป็นเรื่องสนุก
                        ตรงไปตรงมา และไม่ซับซ้อน
                        ด้วยการทำงานที่มีประสิทธิภาพของทีมงานระดับมืออาชีพ
                        เพื่อให้ Frank
                        เป็นประกันภัยออนไลน์อันดับหนึ่งของประเทศไทย Frank
                        ไม่เพียงแค่คุ้มครองรถยนต์และครอบครัวของคุณ
                        แต่เรายังคุ้มครองข้อมูลส่วนตัวของลูกค้า
                        ด้วยมาตรฐานการรับรองความปลอดภัยชั้นนำระดับโลก
                      </Typography>
                    </ListItem>
                  </List>
                </Collapse>
              </List>
              <Divider />
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
              >
                <ListItem button onClick={handleClick(2)}>
                  <Typography className={classes.headerExpand}>
                    ที่สุดของการบริการในราคาคุ้มค่าสำหรับคุณ
                  </Typography>
                  {open === 2 ? (
                    <ExpandLess color="primary" style={{marginLeft: "auto"}} />
                  ) : (
                    <ExpandMore color="primary" style={{marginLeft: "auto"}} />
                  )}
                </ListItem>
                <Collapse in={open === 2} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem className={classes.nested}>
                      <Typography className={classes.detailText}>
                        ในเมื่อการซื้อประกันเป็นเรื่องที่ทำปีละครั้งเราจึงตั้งใจที่จะทำให้การซื้อประกันรถยนต์เป็นเหมือนประสบการณ์พิเศษที่น่าจดจำ
                      </Typography>
                    </ListItem>
                  </List>
                </Collapse>
              </List>
              <Divider />
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
              >
                <ListItem button onClick={handleClick(3)}>
                  <Typography className={classes.headerExpand}>
                    มีคำถามมั้ยครับ?
                  </Typography>
                  {open === 3 ? (
                    <ExpandLess color="primary" style={{marginLeft: "auto"}} />
                  ) : (
                    <ExpandMore color="primary" style={{marginLeft: "auto"}} />
                  )}
                </ListItem>
                <Collapse in={open === 3} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem className={classes.nested}>
                      <Typography className={classes.detailText}>
                        อ่านเพิ่มเติมเกี่ยวกับความคุ้มครองประกันรถยนต์
                        ความคุ้มครองประกันการเดินทาง หรือความคุ้มครองมอเตอร์ไซค์
                        ตามลิงค์ข้างล่างไปเพื่อเข้าสู่หน้านั้นๆ ได้เลยครับ
                      </Typography>
                    </ListItem>
                  </List>
                </Collapse>
              </List>
              <Divider />
            </div>
          </Grid>
        </Grid>
        <div style={{marginTop: "30px"}}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{color: "var(--primary-blue)", marginBottom: "30px"}}
          >
            คลิกดูเบี้ยประกัน
          </Button>
          <Typography variant="body1" color="primary">
            คำถามเพิ่มเติม ติดต่อเราที่ 02-106-5800
          </Typography>
        </div>
      </Container>
    </div>
  )
}
