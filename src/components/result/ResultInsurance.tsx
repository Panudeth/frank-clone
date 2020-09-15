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
import React, {Dispatch, Fragment, useEffect, useState} from "react"
import {InsuranceData} from "../../data/InsuranceData"
import {CardForm} from "../form/CardForm"
import {ResultCard} from "./ResultCard"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
    },
  })
)

export const ResultInsurance = ({
  dataIns,
  setData,
}: {
  dataIns: InsuranceData[]
  setData: Dispatch<React.SetStateAction<InsuranceData[]>>
}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(true)
  const [defualtData, setDefualtData] = useState<InsuranceData[]>(dataIns)
  const [sortData, setSortData] = useState<"price" | "match">("match")

  useEffect(() => {
    if (sortData === "match") {
      const dataS = dataIns.sort((a, b) => {
        return (
          parseInt(a.price.replace("฿", "")) -
          parseInt(b.price.replace("฿", ""))
        )
      })
      setDefualtData(dataS)
    } else {
      const dataS = dataIns.sort(
        (a, b) =>
          parseInt(b.price.replace("฿", "")) -
          parseInt(a.price.replace("฿", ""))
      )
      setDefualtData(dataS)
    }
  }, [dataIns, sortData])
  console.log(defualtData)
  const handleClick = () => {
    setOpen(!open)
  }

  const handleChange = (
    e: React.ChangeEvent<{
      name?: string | undefined
      value: unknown
    }>
  ) => {
    const type = e.target.value as any
    setSortData(type)
    console.log(e.target.value)
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
                  <CardForm onlyCarForm={true} setData={setData} />
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
                  {sortData === "price"
                    ? "เรียงตามราคา (ถูกที่สุด)"
                    : "เหมาะกับคุณที่สุด"}
                </InputLabel>
                <Select
                  id="demo-simple-select"
                  value=""
                  onChange={handleChange}
                >
                  <MenuItem value="price">ถูกที่สุด</MenuItem>
                  <MenuItem value="match">เหมาะกับคุณที่สุด</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <div style={{background: "#fff"}}>
              {defualtData.map((item) => (
                <Fragment key={item.id}>
                  <ResultCard dataInsure={item} />
                </Fragment>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
