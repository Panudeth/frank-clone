import {
  makeStyles,
  Theme,
  createStyles,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CardActionArea,
  Link,
} from "@material-ui/core"
import React from "react"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    w100px: {
      width: "100px",
      height: "100px",
    },
    cardHowTo: {
      //   width: "170px",
      padding: "5px",
      //   margin: "0 20px",
      minHeight: "200px",
    },
  })
)

export const WhyFrank = () => {
  const classes = useStyles()
  return (
    <Container>
      <Typography variant="h4" color="primary">
        วิธีใหม่ในการซื้อประกันออนไลน์
      </Typography>
      <Typography
        variant="body1"
        color="primary"
        style={{marginBottom: "30px"}}
      >
        ประกันรถยนต์ - ประกันภัยจักรยานยนต์ - พ.ร.บ. - ประกันการเดินทาง -
        ประกันอุบัติเหตุส่วนบุคคล - ประกันบ้านและอัคคีภัย - ประกันกลุ่ม
      </Typography>
      <Container style={{width: "80%"}}>
        <Grid container={true} spacing={6}>
          <Grid item={true} xs={12} sm={6} md={3}>
            <Card className={classes.cardHowTo}>
              <CardActionArea style={{margin: "auto"}}>
                <CardContent>
                  <img
                    className={classes.w100px}
                    src="https://d1lcu695erj7bo.cloudfront.net/media/18287/17900/1599753408-fast_2x.png"
                    alt="fast"
                  />
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    เบื่อที่ต้องรอเจ้าหน้าที่ขายติดต่อกลับ?
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Typography style={{marginTop: "20px"}}>
              <Link href="#" variant="h6" style={{textDecoration: "underline"}}>
                เช็คเบี้ยรวดเร็วทางออนไลน์
              </Link>
            </Typography>
          </Grid>
          <Grid item={true} xs={12} sm={6} md={3}>
            <Card className={classes.cardHowTo}>
              <CardActionArea>
                <CardContent>
                  <img
                    className={classes.w100px}
                    src="https://d1lcu695erj7bo.cloudfront.net/media/18287/17901/1599753409-bki_2x.png"
                    alt="fast"
                  />
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    ต้องการบริษัทประกันที่เชื่อถือได้?
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Typography style={{marginTop: "20px"}}>
              <Link href="#" variant="h6" style={{textDecoration: "underline"}}>
                ความคุ้มครองจากบริษัทประกันที่ดีที่สุดในประเทศไทย
              </Link>
            </Typography>
          </Grid>
          <Grid item={true} xs={12} sm={6} md={3}>
            <Card className={classes.cardHowTo}>
              <CardActionArea>
                <CardContent>
                  <img
                    className={classes.w100px}
                    src="https://d1lcu695erj7bo.cloudfront.net/media/18287/17902/1599753410-refund-icon_2x.png"
                    alt="fast"
                  />
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    เคลมเร็ว เคลมง่าย ซ่อมไว
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Typography style={{marginTop: "20px"}}>
              <Link href="#" variant="h6" style={{textDecoration: "underline"}}>
                โทรหาเราที่ <span style={{color: "#ffc12c"}}>02-106-5800</span>{" "}
                เพื่อเคลมง่ายๆ
              </Link>
            </Typography>
          </Grid>
          <Grid item={true} xs={12} sm={6} md={3}>
            <Card className={classes.cardHowTo}>
              <CardActionArea>
                <CardContent>
                  <img
                    className={classes.w100px}
                    src="https://d1lcu695erj7bo.cloudfront.net/media/18287/17904/1599753411-frank_2x.png"
                    alt="fast"
                  />
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    อยากได้วิธีที่เร็วที่สุดในการประกันใช่มั้ยครับ
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Typography style={{marginTop: "20px"}}>
              <Link href="#" variant="h6" style={{textDecoration: "underline"}}>
                รับความคุ้มครองออนไลน์
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}
