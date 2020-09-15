import React, {useState} from "react"
import {Card, Typography} from "@material-ui/core"
import {CardForm} from "./CardForm"

export const CarInsuranceForm = () => {
  return (
    <div>
      <div style={{marginBottom: "30px"}}>
        <Typography variant="h3" color="primary">
          ประกันรถยนต์
        </Typography>
        <Typography variant="body1" color="primary">
          รวดเร็ว เรียบง่าย และจริงใจกับคุณ
        </Typography>
      </div>
      <Card
        style={{padding: "40px 30px", position: "relative", overflow: "unset"}}
      >
        <div
          style={{
            background: "#00D0BC",
            borderRadius: "100%",
            width: "70px",
            height: "70px",
            position: "absolute",
            top: "-20px",
            left: "-20px",
            zIndex: 99,
          }}
        >
          <img
            style={{width: "70px", height: "70px"}}
            src="/images/1599753407-s_signal-th_1x.png"
            alt=""
          />
        </div>
        <CardForm />
      </Card>
    </div>
  )
}
