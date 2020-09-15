import {
  Box,
  Collapse,
  Container,
  createStyles,
  FormControl,
  Grid,
  Hidden,
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
      maxWidth: "100%",
      margin: "auto",
    },
    mAuto: {
      margin: "auto",
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
  }

  return (
    <>
      <Box style={{background: "#f1f1f1"}}>
        <Hidden smUp>
          <Box display="flex" style={{padding: "0 20px"}}>
            <Typography variant="h6" color="primary" className={classes.mAuto}>
              รวดเร็ว เรียบง่าย และจริงใจกับคุณ
            </Typography>
            <img
              src="https://d36m1zc6uw64ec.cloudfront.net/media/35478/35786/1584378709-family.svg"
              alt="penguin-car"
            />
          </Box>
        </Hidden>
      </Box>
      <Container>
        <Hidden smDown>
          <Grid container={true}>
            <Grid item={true} sm={6} className={classes.mAuto}>
              <Typography variant="h4" color="primary">
                รวดเร็ว เรียบง่าย และจริงใจกับคุณ
              </Typography>
              <Typography variant="body1" color="primary">
                ไม่ต้องรอ!! รับกรมธรรม์ผ่านทางออนไลน์ทันที
              </Typography>
            </Grid>
            <Grid item={true} sm={6}>
              <Box display="flex">
                <img
                  src="https://d1lcu695erj7bo.cloudfront.net/media/33982/35781/1599753252-car-th.png"
                  alt="car-banner"
                />
                <div className={classes.mAuto}>
                  <Box display="flex" style={{marginBottom: "10px"}}>
                    <div
                      style={{
                        backgroundImage:
                          "url(https://www.frank.co.th/assets/travel-usps.svg)",
                        width: "50px",
                        height: "52px",
                        backgroundSize: "cover",
                        backgroundPositionY: "51px",
                      }}
                    />
                    <Typography color="primary" style={{margin: "auto 5px"}}>
                      คุ้มครองโดยบริษัทประกันชั้นนำเท่านั้น
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <div
                      style={{
                        backgroundImage:
                          "url(https://www.frank.co.th/assets/travel-usps.svg)",
                        width: "50px",
                        height: "50px",
                        backgroundSize: "cover",
                        backgroundPositionY: "97px",
                      }}
                    />
                    <Typography color="primary" style={{margin: "auto 5px"}}>
                      เช็คราคาและเปรียบเทียบแผนประกันได้ทันที
                    </Typography>
                  </Box>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Hidden>
        <Grid container={true} spacing={4}>
          <Grid item={true} md={3} xs={12}>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={classes.root}
            >
              <ListItem button onClick={handleClick}>
                <Box display="flex" style={{width: "100%"}}>
                  <div
                    style={{
                      backgroundImage:
                        "url(../../images/card-vertical-big-icons.svg)",
                      width: "50px",
                      height: "50px",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "0px 10px",
                    }}
                  ></div>
                  <ListItemText
                    style={{marginLeft: "15px"}}
                    primary={defualtData[0].currentCar.toUpperCase()}
                    secondary={defualtData[0].currentYear}
                  />
                </Box>
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
          <Grid item={true} md={9} xs={12}>
            <Hidden smUp>
              <FormControl
                style={{width: "100%", marginBottom: "20px"}}
                variant="filled"
                size="small"
              >
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
            </Hidden>
            <div style={{background: "#00D0BC", borderRadius: "8px"}}>
              <Box display="flex" justifyContent="space-between">
                <Typography
                  variant="caption"
                  color="primary"
                  style={{margin: "auto 0", padding: "5px"}}
                >
                  นี้คือแผนประกันที่เหมาะกับคุณที่สุด!
                </Typography>
                <Hidden smDown>
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
                </Hidden>
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
    </>
  )
}
