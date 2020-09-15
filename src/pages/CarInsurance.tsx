import {Box, Container, Grid, Hidden, Typography} from "@material-ui/core"
import React, {useState} from "react"
import {CarInsuranceForm} from "../components/form/CarInsuranceForm"
import {ResultInsurance} from "../components/result/ResultInsurance"
import {InsuranceData} from "../data/InsuranceData"

export const CarInsurance = () => {
  const [insuranceResult, setInsuranceResult] = useState<InsuranceData[]>([])
  return insuranceResult.length > 0 ? (
    <ResultInsurance dataIns={insuranceResult} setData={setInsuranceResult} />
  ) : (
    <>
      <Box style={{background: "#f1f1f1"}}>
        <Hidden smUp>
          <Box display="flex" style={{padding: "0 20px"}}>
            <Typography variant="h6" color="primary" style={{margin: "auto"}}>
              รวดเร็ว เรียบง่าย และจริงใจกับคุณ
            </Typography>
            <img
              src="https://d36m1zc6uw64ec.cloudfront.net/media/35478/35786/1584378709-family.svg"
              alt="penguin-car"
            />
          </Box>
        </Hidden>
      </Box>
      <Container style={{padding: "20px 0 50px 0"}}>
        <Grid
          container={true}
          spacing={6}
          style={{
            width: "100%",
            margin: "auto",
          }}
        >
          <Hidden smDown>
            <Grid item={true} md={4} style={{margin: "auto"}}>
              <img
                style={{width: "100%"}}
                src="/images/1599753406-logo05.jpg"
                alt="brandLogo"
              />
            </Grid>
          </Hidden>
          <Grid item={true} md={4} xs={12}>
            <CarInsuranceForm setData={setInsuranceResult} />
          </Grid>
          <Hidden smDown>
            <Grid item={true} md={4} style={{margin: "auto"}}>
              <img
                style={{width: "100%"}}
                src="/images/1599753392-banner-billboard-spare-car-th.png"
                alt="banner"
              />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </>
  )
}
