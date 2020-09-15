import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import {Link} from "react-router-dom"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 316,
    border: "1px solid #29579b4a",
    margin: "auto",
  },
  media: {
    backgroundSize: "auto",
    height: "105px",
    backgroundRepeat: "no-repeat",
    marginBottom: "40px",
  },
  selectBtn: {
    color: "var(--primary-blue)",
    fontWeight: "bold",
  },
  cardContentStyle: {
    minHeight: "71px",
  },
})

interface IhomeMenu {
  image: string
  header: string
  id: number
  position: {
    backgroundPosition: string
    backgroundPositionY: string
  }
  link: string
}

export const InsuranceCard = ({menuItem}: {menuItem: IhomeMenu}) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} elevation={1}>
      <CardActionArea disableRipple={true}>
        <CardContent className={classes.cardContentStyle}>
          <Typography gutterBottom variant="h6" component="header">
            {menuItem.header}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={menuItem.image}
          style={menuItem.position}
          title={menuItem.header}
        />
      </CardActionArea>
      <CardActions>
        <Link
          to={menuItem.link}
          style={{textDecoration: "none", width: "100%"}}
        >
          <Button
            size="large"
            color="secondary"
            variant="contained"
            fullWidth={true}
            className={classes.selectBtn}
          >
            เลือกเลย
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}
