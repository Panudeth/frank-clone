import React, {useState} from "react"
import {
  makeStyles,
  Theme,
  createStyles,
  Card,
  CardContent,
  Typography,
  CardActions,
  Collapse,
  Button,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core"
import {red} from "@material-ui/core/colors"
import {InsuranceData} from "../../data/InsuranceData"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
          maxWidth: "100%",
        margin:'0 0 20px 0'
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
    middleDetail: {
      textAlign: "left",
      display: "flex",
      justifyContent: "space-between",
    },
  })
)

export const ResultCard = ({dataInsure}: {dataInsure: InsuranceData}) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const checkProtection = (status: boolean) => {
    const result = status ? "คุ้มครอง" : "ไม่คุ้มครอง"
    return result
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container={true}>
          <Grid item={true} md={4}>
            <div style={{padding: "30px 30px 30px 10px"}}>
              <Box display="flex">
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    margin: "auto 20px auto",
                  }}
                  src="https://www.frank.co.th/assets/provider/dhipaya-logo.svg"
                  alt="ทิพย"
                />
                <div style={{textAlign: "left"}}>
                  <Typography variant="body1">{`ชั้น ${dataInsure.classInsurance}`}</Typography>
                  <Typography variant="body1">{dataInsure.brand}</Typography>
                  <Typography variant="h6">{dataInsure.price}</Typography>
                  <Typography variant="caption">ต่อปี</Typography>
                </div>
              </Box>
            </div>
          </Grid>
          <Grid item={true} md={4}>
            <div style={{padding: "30px 30px 30px 10px"}}>
              <Box display="block">
                <div className={classes.middleDetail}>
                  <Typography variant="body1">ทุนประกัน </Typography>
                  <Typography variant="body1"></Typography>
                </div>
                <div className={classes.middleDetail}>
                  <Typography variant="body1">ค่าความเสียหายส่วนแรก</Typography>
                  <Typography variant="body1">
                    {dataInsure.firstDamageCos}
                  </Typography>
                </div>
                <div className={classes.middleDetail}>
                  <Typography variant="body1">บุคคลภายนอก </Typography>
                  <Typography variant="body1">{dataInsure.outsider}</Typography>
                </div>
                <div className={classes.middleDetail}>
                  <Typography variant="body1">ประเภทอู่ซ่อมรถ </Typography>
                  <Typography variant="body1">
                    {dataInsure.garageType}
                  </Typography>
                </div>
                <div className={classes.middleDetail}>
                  <Typography variant="body1">ระบุผู้ขับขี่ </Typography>
                  <Typography variant="body1">
                    {dataInsure.identifyTheDriver}
                  </Typography>
                </div>
              </Box>
            </div>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        disableSpacing
        style={{textAlign: "right", display: "block"}}
      >
        <Button
          variant="contained"
          onClick={handleExpandClick}
          style={{marginRight: "8px", color: "var(--primary-blue)"}}
          size="small"
        >
          ดูรายละเอียด
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{color: "var(--primary-blue)"}}
          size="small"
          onClick={handleExpandClick}
        >
          ซื้อเลย!
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div style={{padding: "10px 20px"}}>
          <CardContent style={{background: "#FAFBFD"}}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem divider={true}>
                <ListItemText
                  primary="อุบัติเหตุแบบไม่มีคู่กรณี"
                  secondary={checkProtection(
                    dataInsure.detail.accidentWithoutAparty
                  )}
                />
                <ListItemSecondaryAction>
                  <div
                    style={{
                      backgroundImage:
                        "url(https://www.frank.co.th/assets/coverages.svg)",
                      width: "40px",
                      height: "40px",
                      opacity: dataInsure.detail.accidentWithoutAparty
                        ? "1"
                        : "0.5",
                    }}
                  ></div>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem divider={true}>
                <ListItemText
                  primary="อุบัติเหตุรถชนรถ"
                  secondary={checkProtection(dataInsure.detail.carAccident)}
                />
                <ListItemSecondaryAction>
                  <div
                    style={{
                      backgroundImage:
                        "url(https://www.frank.co.th/assets/coverages.svg)",
                      width: "40px",
                      height: "40px",
                      backgroundPosition: "-50px 0px",
                      opacity: dataInsure.detail.carAccident ? "1" : "0.5",
                    }}
                  ></div>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem divider={true}>
                <ListItemText
                  primary="รถหาย"
                  secondary={checkProtection(dataInsure.detail.lostCar)}
                />
                <ListItemSecondaryAction>
                  <div
                    style={{
                      backgroundImage:
                        "url(https://www.frank.co.th/assets/coverages.svg)",
                      width: "40px",
                      height: "40px",
                      backgroundPosition: "-140px 0px",
                      opacity: dataInsure.detail.lostCar ? "1" : "0.5",
                    }}
                  ></div>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem divider={true}>
                <ListItemText
                  primary="ประเภทอู่ซ่อม"
                  secondary={dataInsure.garageType}
                />
                <ListItemSecondaryAction>
                  <div
                    style={{
                      backgroundImage:
                        "url(https://www.frank.co.th/assets/coverages.svg)",
                      width: "40px",
                      height: "40px",
                      backgroundPosition: "-95px 0px",
                    }}
                  ></div>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem divider={true}>
                <ListItemText
                  primary="ภัยก่อการร้าย"
                  secondary={dataInsure.detail.terrorism}
                />
                <ListItemSecondaryAction>
                  <div
                    style={{
                      backgroundImage:
                        "url(https://www.frank.co.th/assets/coverages.svg)",
                      width: "40px",
                      height: "40px",
                      backgroundPosition: "-285px 0px",
                    }}
                  ></div>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </CardContent>
        </div>
      </Collapse>
    </Card>
  )
}
