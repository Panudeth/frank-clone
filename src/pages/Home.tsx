import React from "react"
import {
  Box,
  Grid,
  Typography,
  createStyles,
  makeStyles,
  Theme,
  Container,
} from "@material-ui/core"
import {InsuranceCard} from "../components/InsuranceCard"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    penguin: {
      width: "240px",
      height: "280px",
    },
    cardSection: {
      backgroundImage:
        "url(https://www.frank.co.th/assets/country/th-TH/bg-desktop.svg)",
      backgroundSize: "contain",
      padding: "20px 0",
      backgroundRepeat: " no-repeat",
      backgroundPosition: "bottom",
    },
    penguinGank: {
      position: "relative",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    cardInsuran: {
      marginLeft: "auto",
    },
    bannerSection: {
      borderTop: "1px solid #E5EBF3",
    },
    iframeVideos: {
      width: "100% !important",
      height: "700px !important",
    },
    w100px: {
      width: "100px",
      height: "100px",
    },
    cardHowTo: {
      width: "180px",
      padding: "5px",
      margin: "auto",
    },
  })
)

const menuList = [
  {
    header: "ประกันภัยรถยนต์",
    image: "/images/card-vertical-big-icons.svg",
    id: 1,
    position: {backgroundPosition: "50% 0", backgroundPositionY: "0"},
    link:'/ประกันภัยรถยนต์'
  },
  {
    header: "พ.ร.บ.รถยนต์",
    image: "/images/card-vertical-big-icons.svg",
    id: 2,
    position: {backgroundPosition: "50% 0", backgroundPositionY: "-98px"},
    link:'/ประกันภัยรถยนต์'
  },
  {
    header: "ประกันรถมอเตอร์ไซค์",
    image: "/images/card-vertical-big-icons.svg",
    id: 3,
    position: {backgroundPosition: "50% 0", backgroundPositionY: "-498px"},
    link:'/ประกันภัยรถยนต์'
  },
  {
    header: "พ.ร.บ.รถจักรยานยนต์",
    image: "/images/card-vertical-big-icons.svg",
    id: 4,
    position: {backgroundPosition: "50% 0", backgroundPositionY: "-1097px"},
    link:'/ประกันภัยรถยนต์'
  },
  {
    header: "ประกันไวรัสโคโรนา",
    image: "/images/card-vertical-big-icons.svg",
    id: 5,
    position: {backgroundPosition: "50% 0", backgroundPositionY: "-1579px"},
    link:'/ประกันภัยรถยนต์'
  },
  {
    header: "ประกันอุบัติเหตุส่วนบุคคล",
    image: "/images/card-vertical-big-icons.svg",
    id: 6,
    position: {backgroundPosition: "50% 0", backgroundPositionY: "-897px"},
    link:'/ประกันภัยรถยนต์'
  },
  {
    header: "ประกันโรคร้ายแรง",
    image: "/images/card-vertical-big-icons.svg",
    id: 7,
    position: {backgroundPosition: "50% 0", backgroundPositionY: "-1473px"},
    link:'/ประกันภัยรถยนต์'
  },
  {
    header: "ประกันการเดินทาง",
    image: "/images/card-vertical-big-icons.svg",
    id: 8,
    position: {backgroundPosition: "50% 0", backgroundPositionY: "-803px"},
    link:'/ประกันภัยรถยนต์'
  },
  {
    header: "ประกันสุขภาพ",
    image: "/images/card-vertical-big-icons.svg",
    id: 9,
    position: {backgroundPosition: "50% 0", backgroundPositionY: "-1297pxpx"},
    link:'/ประกันภัยรถยนต์'
  },
  {
    header: "ประกันบ้านและทรัพย์สิน",
    image: "/images/card-vertical-big-icons.svg",
    id: 10,
    position: {backgroundPosition: "50% 0", backgroundPositionY: "-1011px"},
    link:'/ประกันภัยรถยนต์'
  },
  {
    header: "ประกันกลุ่ม",
    image: "/images/card-vertical-big-icons.svg",
    id: 11,
    position: {backgroundPosition: "50% 0", backgroundPositionY: "-1196px"},
    link:'/ประกันภัยรถยนต์'
  },
]

export const Home = () => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.cardSection}>
        <Container>
          <Grid container={true} spacing={1}>
            <Grid item={true} md={3} sm={6} xs={12} style={{margin: "0 auto"}}>
              <Box className={classes.penguinGank}>
                <Typography variant="h4" color="primary">
                  รวดเร็ว เรียบง่าย <br /> และจริงใจกับคุณ
                </Typography>
                <img
                  className={classes.penguin}
                  src="/images/penguin-group.png"
                  alt="penguin-gank"
                />
                <Typography variant="h5" color="primary">
                  ไม่ต้องรอ!! รับกรมธรรม์ผ่านทางออนไลน์ทันที
                </Typography>
              </Box>
            </Grid>
            <Grid
              className={classes.cardInsuran}
              container={true}
              item={true}
              md={9}
              spacing={4}
            >
              {menuList.map((menu) => (
                <Grid item={true} md={3} sm={6} xs={6} key={menu.id}>
                  <InsuranceCard menuItem={menu} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}
