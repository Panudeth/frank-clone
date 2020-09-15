import {LinearProgress} from "@material-ui/core"
import React, {Suspense, lazy} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

const Home = lazy(() =>
  import("../pages/Home").then(({Home}) => ({
    default: Home,
  }))
)

const CarInsurance = lazy(() =>
  import("../pages/CarInsurance").then(({CarInsurance}) => ({
    default: CarInsurance,
  }))
)

export const Routes = () => (
  <Router>
    <Suspense
      fallback={
        <LinearProgress
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
          }}
        />
      }
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ประกันภัยรถยนต์" component={CarInsurance} />
      </Switch>
    </Suspense>
  </Router>
)
