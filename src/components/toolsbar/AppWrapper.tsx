import {Box, Container, Divider, Typography} from "@material-ui/core"
import React from "react"
import {RouteComponentProps, withRouter} from "react-router-dom"
import {FooterWrapper} from "../FooterWrapper"
import {FrankQA} from "../FrankQA"
import {AppBarHome} from "./AppBarHome"

export const AppWrapper = withRouter(
  (props: RouteComponentProps<{}> & {children: JSX.Element}) => {
    return (
      <>
        <AppBarHome />
        <main>{props.children}</main>
        <FooterWrapper />
        <FrankQA />
        <Box style={{background: "#F4F4F4"}}>
          <Container>
            <a href="/">
              <img
                style={{width: "100%"}}
                src="https://d1lcu695erj7bo.cloudfront.net/media/19305/28226/1599753406-footer-fb-desktop-th-1.png"
                alt="facebook"
              />
            </a>
          </Container>
        </Box>
        <Box style={{background: "#fff"}}>
          <Container>
            <a href="/">
              <img
                style={{width: "100%"}}
                src="https://d1lcu695erj7bo.cloudfront.net/media/19305/28101/1599753422-redesign_reward_banner.png"
                alt="facebook"
              />
            </a>
          </Container>
        </Box>
        <Divider />
        <footer style={{padding: "100px"}}>
          <Typography variant="caption" style={{color: "#617179"}}>
            10th Floor, Sethiwan Tower,139 Pan Rd. Silom, Bangrak 10500 Bangkok,
            Thailand • Frank Insurance Broker (Thailand) Co. Ltd., is trading as
            Frank.co.th <br/> OIC license for non-life insurance registration number :
            00017/2559 • DBD registration number 0105559056161
          </Typography>
        </footer>
      </>
    )
  }
)
