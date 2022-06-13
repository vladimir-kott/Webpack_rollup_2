import "./index.css"
import img from './assets/img.png'
console.log('Hello World!')

const body = document.querySelector('body')
const text = document.createElement('h1')
text.textContent = 'I love JavaScript'
body.append(text)
const image = document.createElement('img')
image.className = 'image'
image.src = img
body.append(image)
