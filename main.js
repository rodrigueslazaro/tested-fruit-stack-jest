import './style.css'
import Stack from './stack'

const stack = new Stack()
const fruits = ["🍌", "🍎", "🍓", "🥑", "🍇"]

const stackview = document.getElementById('stack')
console.log(stackview)

document.getElementById('add').addEventListener('click', () => { 
  const randomFruit = Math.floor(Math.random() * 5);
  const li = document.createElement("li")
  const text = document.createTextNode(fruits[randomFruit])
  li.appendChild(text)
  stackview.appendChild(li)
  stack.push(fruits[randomFruit])
  console.log(stack)
})

document.getElementById('pop').addEventListener('click', () => {
  const lastChild = stackview.lastChild;
  if (lastChild !== null) {
    stackview.removeChild(lastChild)
    stack.pop()
    console.log(stack)
  }
})
