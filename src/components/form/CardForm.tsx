import React, {Dispatch, SetStateAction, useState} from "react"

import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers"
import {Typography, TextField, MenuItem, Button, Link} from "@material-ui/core"
import {useForm, Controller} from "react-hook-form"
import {db} from "../../firebase"
import {InsuranceData} from "../../data/InsuranceData"

interface IFormInputData {
  brand: string
  generation: string
  RegistrationYear: string
  name: string
  phone: string
}

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

export const CardForm = ({
  onlyCarForm,
  setData,
}: {
  onlyCarForm?: boolean
  setData: Dispatch<SetStateAction<InsuranceData[]>>
}) => {
  const [searchData, setSearctData] = useState<IFormInputData>({
    brand: "empty",
    generation: "empty",
    RegistrationYear: "",
    name: "",
    phone: "",
  })

  const schema = yup.object().shape({
    brand: yup.string().required(),
    generation: yup.string().required(),
    RegistrationYear: yup.string().required(),
    name: !onlyCarForm ? yup.string().required() : yup.string(),
    phone: !onlyCarForm ? yup.string().required() : yup.string(),
  })

  const {handleSubmit, control, errors} = useForm<IFormInputData>({
    resolver: yupResolver(schema),
  })

  //   const handleExpandEdit = () => {
  //     setExpandEdit((prev) => !expandEdit)
  //   }

  const onSubmit = async (data: IFormInputData) => {
    console.log(data)
    try {
      const res = await db
        .collection("insurance")
        .where("carBrand", "array-contains-any", [data.brand])
        .get()

      const insuranceRes = res.docs.map(
        (each) =>
          new InsuranceData({...each.data(), id: each.id} as InsuranceData)
      )
      const result = insuranceRes.filter(
        (ins) =>
          ins.generation.indexOf(data.generation) > -1 &&
          ins.registerYear.indexOf(data.RegistrationYear) > -1
      )
      if (result.length < 1) {
        alert("ไม่พบ รายการ ประกันภัยที่คุณคต้องการ กรุณาค้าหาอีกครั้ง")
      }
      setSearctData(data)

      setData(result)
    } catch (e) {
      console.error(e)
    }
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
              setSearctData({...searchData, brand: e.target.value})
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
        defaultValue={searchData.brand}
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
            disabled={searchData.brand === "empty"}
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
              .filter(
                (gen) => gen.type === searchData.brand || gen.value === "empty"
              )
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
        defaultValue={searchData.generation}
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
            disabled={
              searchData.brand === "empty" && searchData.generation === "empty"
            }
            variant="outlined"
            size="small"
            margin="dense"
            fullWidth={true}
            error={!!errors.RegistrationYear}
            helperText={errors.RegistrationYear?.message}
            value={value}
            onChange={(e) => {
              console.log(e.target.value)
              onChange(e.target.value)
            }}
          >
            <MenuItem disabled={true} value="empty">
              เลือกปีจดทะเบียน
            </MenuItem>
            <MenuItem value="2019">2019 (2563)</MenuItem>
            <MenuItem value="2018">2018 (2562)</MenuItem>
            <MenuItem value="2017">2017 (2561)</MenuItem>
          </TextField>
        )}
        name="RegistrationYear"
        control={control}
        defaultValue="empty"
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
