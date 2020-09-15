import {ThemeProvider} from "@material-ui/core/styles"
import React from "react"
import {BrowserRouter} from "react-router-dom"
import "./App.css"
import {Routes} from "./components/Routes"
import {AppWrapper} from "./components/toolsbar/AppWrapper"
import {theme} from "./theme"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppWrapper>
            <Routes />
          </AppWrapper>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
