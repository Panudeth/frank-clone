import {
  makeStyles,
  Theme,
  createStyles,
  Container,
  Grid,
  Link,
  Typography,
  Card,
  Avatar,
  Box,
} from "@material-ui/core"
import React from "react"
import {WhyFrank} from "./WhyFrank"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bannerSection: {
      borderTop: "1px solid #E5EBF3",
    },
    iframeVideos: {
      width: "100% !important",
      height: "700px !important",
    },
    cardFeedBack: {
      background: "#29579B",
      textAlign: "left",
      padding: "20px",
    },
    minHeigheCaption: {
      minHeight: "96px",
      color: "#fff",
      marginBottom: "70px",
    },
  })
)
export const FooterWrapper = () => {
  const classes = useStyles()

  return (
    <div className={classes.bannerSection}>
      <Container>
        <Grid container={true} spacing={4}>
          <Grid item={true} xs={12}>
            <div>
              <Link href="/">
                <img
                  style={{width: "100%"}}
                  src="/images/1599753397-addline-bigbanner.png"
                  alt="addline-bigbanner"
                />
              </Link>
              <div style={{marginTop: "20px"}}>
                <img
                  style={{width: "100%"}}
                  src="/images/1599753405-as_seen_on-1.png"
                  alt="addline-bigbanner"
                />
              </div>
            </div>
          </Grid>
          <Grid item={true} xs={12}>
            <Typography variant="h4" color="primary">
              Frank คือใครกันนะ ?
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              style={{marginBottom: "30px"}}
            >
              Frank ขอแนะนำตัวเองด้วยวีดิโอข้างล่างนี้ครับ!!
            </Typography>
            <div>
              <iframe
                className={classes.iframeVideos}
                title="Frank"
                src="https://www.youtube.com/embed/9LuYjc-QiK4?controls=0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </Grid>
          <WhyFrank />
          <Typography
            color="primary"
            variant="h4"
            style={{margin: "60px auto 30px auto"}}
          >
            ลูกค้าพูดถึง Frank อย่างไรบ้างนะ...
          </Typography>
          <Grid
            item={true}
            container={true}
            spacing={2}
            xs={12}
            style={{margin: "auto"}}
          >
            <Grid item={true} xs={12} sm={6} md={4}>
              <Card className={classes.cardFeedBack}>
                <Typography
                  variant="h6"
                  style={{color: "#fff", marginBottom: "50px"}}
                >
                  ประทับใจ ข้อมูลชัดเจนดี
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.minHeigheCaption}
                  style={{color: "#fff", marginBottom: "70px"}}
                >
                  การบริการทางsocialรวดเร็วทันใจดีค่ะ ประทับใจค่ะ
                  ติดตามงานให้ตลอด ให้ข้อมูลชัดเจน ราคาก็ถูกกว่าที่อื่น
                  ปีหน้าซื้ออีกค่ะ ขอบคุณค่ะ
                </Typography>
                <Box display="flex">
                  <Avatar
                    alt="Bacardi JP"
                    src="https://d1lcu695erj7bo.cloudfront.net/media/1352/20412/1599753396-11.jpg"
                  />
                  <Typography
                    variant="body1"
                    style={{color: "#fff", margin: "auto 0 auto 20px"}}
                  >
                    Bacardi JP
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item={true} xs={12} sm={6} md={4}>
              <Card className={classes.cardFeedBack}>
                <Typography
                  variant="h6"
                  style={{color: "#fff", marginBottom: "50px"}}
                >
                  เป็นครอบครัว เป็นเพื่อนที่จริงใจ
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.minHeigheCaption}
                >
                  ให้ความรู้ความเข้าใจ อธิบายได้ชัดเจนมากค่ะ ขอบคุณมากๆ
                  ในยามที่เราหันหน้าไปหาใครไม่เจอ พอได้คำตอบ คำอธิบาย
                  ช่วยให้สบายใจ มีสติค่ะ ขอบคุณอีกครั้ง"
                </Typography>
                <Box display="flex">
                  <Avatar
                    alt="Bacardi JP"
                    src="https://d1lcu695erj7bo.cloudfront.net/media/1352/20405/1599753396-1-1.jpg"
                  />
                  <Typography
                    variant="body1"
                    style={{color: "#fff", margin: "auto 0 auto 20px"}}
                  >
                    Aey Sawanya
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item={true} xs={12} sm={6} md={4}>
              <Card className={classes.cardFeedBack}>
                <Typography
                  variant="h6"
                  style={{color: "#fff", marginBottom: "50px"}}
                >
                  FRANK, YOU ARE AMAZING :)
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.minHeigheCaption}
                >
                  I received a much higher level of cover than I expected. Frank
                  beat other insurance companies I contacted hands down on price
                  and value.
                </Typography>
                <Box display="flex">
                  <Avatar
                    alt="Bacardi JP"
                    src="https://d1lcu695erj7bo.cloudfront.net/media/1352/20409/1599753396-51685639_10156319899247568_1989346774682173440_o.jpg"
                  />
                  <Typography
                    variant="body1"
                    style={{color: "#fff", margin: "auto 0 auto 20px"}}
                  >
                    Matt Collett
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
