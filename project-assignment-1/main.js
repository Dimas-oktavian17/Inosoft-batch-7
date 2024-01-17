import './style.css'



const display = document.querySelector('.input')


const calculate = (num) => {
  return display.value += num
}


const calculateResult = () => {
  try {
    display.value = eval(display.value)
  } catch (error) {
    display.value = error
  }
}
calculate()