import {Container, Grid, Hidden} from "@material-ui/core"
import React from "react"
import {CarInsuranceForm} from "../components/form/CarInsuranceForm"
import { ResultInsurance } from "../components/result/ResultInsurance"

export const CarInsurance = () => {
  return (
    <Container style={{padding: "50px 0"}}>
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
          <CarInsuranceForm />
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
      {/* <ResultInsurance /> */}
    </Container>
  )
}
