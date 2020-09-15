import React, {useState} from "react"

import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers"
import {Typography, TextField, MenuItem, Button, Link} from "@material-ui/core"
import {useForm, Controller} from "react-hook-form"

interface IFormInputData {
  brand: string
  generation: string
  RegistrationYear: string
  name: string
  phone: string
}

const schema = yup.object().shape({
  brand: yup.string().required(),
  generation: yup.string().required(),
  RegistrationYear: yup.string().required(),
  name: yup.string().required(),
  phone: yup.string().required(),
})

const brand = [
  {
    value: "empty",
    label: "เลือกยี่ห้อ",
    id: 0,
  },
  {
    value: "toyota",
    label: "TOYOTA",
    id: 1,
  },
  {
    value: "honda",
    label: "HONDA",
    id: 2,
  },
]

const generation = [
  {
    value: "empty",
    label: "เลือกรุ่น",
    type: "empty",
    id: 0,
  },
  {
    value: "camry",
    label: "Camry",
    type: "toyota",
    id: 1,
  },
  {
    value: "chr",
    label: "CHR",
    type: "toyota",
    id: 2,
  },
  {
    value: "civic",
    label: "Civic",
    type: "honda",
    id: 3,
  },
  {
    value: "accord",
    label: "Accord",
    type: "honda",
    id: 4,
  },
]

export const CardForm = ({onlyCarForm}: {onlyCarForm?: boolean}) => {
  const [searchDara, setSearctData] = useState<IFormInputData>({
    brand: "",
    generation: "",
    RegistrationYear: "",
    name: "",
    phone: "",
  })

  const {handleSubmit, control, errors} = useForm<IFormInputData>({
    resolver: yupResolver(schema),
  })

  //   const handleExpandEdit = () => {
  //     setExpandEdit((prev) => !expandEdit)
  //   }

  const onSubmit = (data: IFormInputData) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="body1">รายละเอียดรถ</Typography>
      <Controller
        render={({onChange, onBlur, value, name}) => (
          <TextField
            select
            color="primary"
            placeholder="ยี่ห้อ"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            size="small"
            margin="dense"
            fullWidth={true}
            error={!!errors.brand}
            helperText={errors.brand?.message}
            value={value}
            onChange={(e) => {
              console.log(e.target.value)
              onChange(e.target.value)
            }}
          >
            {brand.map((option) => (
              <MenuItem
                disabled={option.id === 0}
                key={option.id}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
        name="brand"
        control={control}
        defaultValue={brand[0].value}
      />
      <Controller
        render={({onChange, onBlur, value, name}) => (
          <TextField
            select={true}
            color="primary"
            placeholder="รุ่น"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            size="small"
            margin="dense"
            fullWidth={true}
            error={!!errors.generation}
            helperText={errors.generation?.message}
            value={value}
            onChange={(e) => {
              console.log(e.target.value)
              onChange(e.target.value)
            }}
          >
            {generation
              //   .filter((gen) => gen.type === brand.values)
              .map((option) => (
                <MenuItem
                  disabled={option.id === 0}
                  key={option.id}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
          </TextField>
        )}
        name="generation"
        control={control}
        defaultValue={generation[0].value}
      />
      <Controller
        as={
          <TextField
            color="primary"
            placeholder="ปีจดทะเบียน"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            size="small"
            margin="dense"
            fullWidth={true}
            error={!!errors.RegistrationYear}
            helperText={errors.RegistrationYear?.message}
          />
        }
        name="RegistrationYear"
        control={control}
        defaultValue=""
      />
      {!onlyCarForm && (
        <>
          <Typography variant="body1" style={{margin: "30px 0 0px 0"}}>
            รายละเอียดผู้ขับขี่
          </Typography>

          <Controller
            as={
              <TextField
                color="primary"
                placeholder="ชื่อผู้ขับขี่"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                size="small"
                margin="dense"
                fullWidth={true}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            }
            name="name"
            control={control}
            defaultValue=""
          />
          <Controller
            as={
              <TextField
                color="primary"
                placeholder="เบอร์โทรศัพท์มือถือสำหรับติดต่อ"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                size="small"
                margin="dense"
                fullWidth={true}
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            }
            name="phone"
            control={control}
            defaultValue=""
          />
        </>
      )}
      {!onlyCarForm && (
        <Typography variant="body1" color="error" style={{marginTop: "30px"}}>
          เหลือคลิกเดียวเท่านั้น!
        </Typography>
      )}
      <Button
        color="secondary"
        variant="contained"
        size="medium"
        type="submit"
        fullWidth={true}
        style={{color: "var(--primary-blue)", fontWeight: "bold"}}
      >
        ค้นหาเบี้ยประกัน
      </Button>
      {!onlyCarForm && (
        <>
          <Typography variant="body1">
            เพื่อดำเนินการต่อ คุณได้อ่านและยอมรับ
          </Typography>
          <Typography variant="body1">
            <Link style={{textDecoration: "underline", cursor: "pointer"}}>
              นโยบายความเป็นส่วนตัว
            </Link>
            <span style={{margin: "0 5px"}}>และ</span>
            <Link style={{textDecoration: "underline", cursor: "pointer"}}>
              ข้อตกลงเงื่อนไข
            </Link>
          </Typography>
        </>
      )}
    </form>
  )
}
