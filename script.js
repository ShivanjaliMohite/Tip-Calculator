const tipinputdiv = document.getElementById("tipinput")
const totalbill = document.getElementById("totalbillinput")
const numberofpep = document.getElementById("numberofpeople")
const perpersontt = document.getElementById("perpersontotal")

let numberofpeople = Number(numberofpep.innerText)
const calcualtebilltotal = () => {
  const bill = Number(totalbill.value)
  const tippercent = Number(tipinputdiv.value) / 100
  const totaltipamount = bill * tippercent
  const total = bill + totaltipamount
  const perpersontotal = total / numberofpeople
  perpersontt.innerText = `$${perpersontotal.toFixed(2)}`
}
const increasepeople = () => {
  numberofpeople += 1
  numberofpep.innerText = numberofpeople
  calcualtebilltotal()
}
const decreasepeople = () => {
  if(numberofpeople <=1)
    {
      alert("You cannot have less than 1 person")
      return
    }
  numberofpeople -= 1
  numberofpep.innerText = numberofpeople
  calcualtebilltotal()
}