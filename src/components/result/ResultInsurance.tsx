import classes from "*.module.css"
import {
  Box,
  Collapse,
  Container,
  createStyles,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  MenuItem,
  Select,
  Theme,
  Typography,
} from "@material-ui/core"
import {ExpandLess, ExpandMore} from "@material-ui/icons"
import React from "react"
import {CardForm} from "../form/CardForm"
import {CarInsuranceForm} from "../form/CarInsuranceForm"
import {ResultCard} from "./ResultCard"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
)

export const ResultInsurance = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <Container>
      <Grid container={true} spacing={4}>
        <Grid item={true} md={3}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <ListItem button onClick={handleClick}>
              <ListItemText primary="TOYOTA CHR" secondary="2019" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <CardForm onlyCarForm={true} />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Grid>
        <Grid item={true} md={9}>
          <div style={{background: "#00D0BC", borderRadius: "8px"}}>
            <Box display="flex" justifyContent="space-between">
              <Typography
                variant="caption"
                color="primary"
                style={{margin: "auto 0", padding: "5px"}}
              >
                นี้คือแผนประกันที่เหมาะกับคุณที่สุด!
              </Typography>
              <FormControl style={{width: "22%"}} variant="filled">
                <InputLabel id="demo-simple-select-label">
                  เรียงตามราคา (ถูกที่สุด)
                </InputLabel>
                <Select
                  id="demo-simple-select"
                  value=""
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>ถูกที่สุด</MenuItem>
                  <MenuItem value={20}>เหมาะกับคุณที่สุด</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <ResultCard />
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
