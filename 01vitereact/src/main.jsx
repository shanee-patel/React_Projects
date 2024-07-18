import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function Myapp(){

    return(
        <>
        <h1>Custom app!</h1>
        </>
    )
}
// const reactElement ={
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }
const username = "hello"

const reactElement= React.createElement(
    'a',
    {href: 'https://google.com'},
    'click me to visit google',
    username

)

const anotherElement =(

    <a href="https://google.com" target='_blank'> visit google </a>
)
   


ReactDOM.createRoot(document.getElementById('root')).
render(
  
  reactElement
)
