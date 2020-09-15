import React from "react"
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "100%",
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

export const ResultCard = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
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
                  <Typography variant="body1">ชั้น 3</Typography>
                  <Typography variant="body1">ทิพยประกันภัย</Typography>
                  <Typography variant="h6">฿2,500</Typography>
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
                  <Typography variant="body1">฿0</Typography>
                </div>
                <div className={classes.middleDetail}>
                  <Typography variant="body1">ค่าความเสียหายส่วนแรก</Typography>
                  <Typography variant="body1">฿0.00</Typography>
                </div>
                <div className={classes.middleDetail}>
                  <Typography variant="body1">บุคคลภายนอก </Typography>
                  <Typography variant="body1">฿1,000,000</Typography>
                </div>
                <div className={classes.middleDetail}>
                  <Typography variant="body1">ประเภทอู่ซ่อมรถ </Typography>
                  <Typography variant="body1">ซ่อมอู่</Typography>
                </div>
                <div className={classes.middleDetail}>
                  <Typography variant="body1">ระบุผู้ขับขี่ </Typography>
                  <Typography variant="body1">ไม่จำกัด</Typography>
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
                  secondary="ไม่คุ้มครอง
"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    ICON
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </CardContent>
        </div>
      </Collapse>
    </Card>
  )
}
