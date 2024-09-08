type Employee = {
  name: string
  leader: string
}
type Manager = {
  name: string
  leader: string
  product_ID: number
}

type Teamlead = Manager & Employee
const teamlead: Teamlead = {
  name: "kartik",
  leader: "systum",
  product_ID: 2423454,
}
