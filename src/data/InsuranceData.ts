export interface IEmpSendTo {
    accidentWithoutAparty: boolean
    carAccident: boolean
    lostCar: boolean
    terrorism: string
}

export interface IInsurance {
    id: string
    brand: string
    carBrand: string[]
    classInsurance: string
    detail: IEmpSendTo
    firstDamageCos: string
    outsider: string
    price: string
    registerYear: string[]
    sumAssured: string
    generation: string
    garageType: string
    identifyTheDriver: string
    currentCar: string
    currentYear: string
}

export class InsuranceData implements IInsurance {
    public id: string
    public brand: string
    public carBrand: string[]
    public classInsurance: string
    public detail: IEmpSendTo
    public firstDamageCos: string
    public outsider: string
    public price: string
    public registerYear: string[]
    public sumAssured: string
    public generation: string
    public garageType: string
    public identifyTheDriver: string
    public currentCar: string
    public currentYear: string


    constructor(data: IInsurance) {
        const {
            brand,
            carBrand,
            classInsurance,
            detail,
            firstDamageCos,
            outsider,
            price,
            registerYear,
            sumAssured,
            generation,
            id,
            garageType,
            identifyTheDriver,
            currentCar,
            currentYear,

        } = data

        this.id = id
        this.brand = brand
        this.carBrand = carBrand
        this.classInsurance = classInsurance
        this.detail = detail
        this.firstDamageCos = firstDamageCos
        this.outsider = outsider
        this.price = price
        this.registerYear = registerYear
        this.sumAssured = sumAssured
        this.generation = generation
        this.garageType = garageType
        this.identifyTheDriver = identifyTheDriver
        this.currentCar = currentCar
        this.currentYear = currentYear
    }
}
