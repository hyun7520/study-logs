// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";

function App() {
  return <div>
    {/* <Chicken /> */}
    {/* passing an argument, multiple arguments can be passed in key, value pairs*/}
    <Greeter person="Bill" from="America" />
    <Die />
    {/* Passing Number */}
    <Die numSides={20} />
    <Die numSides={10} />
    <Die numSides={6} />
  </div>
}

export default App


// const [count, setCount] = useState(0)

// return (
//   <>
//     <div>
//       <a href="https://vitejs.dev" target="_blank">
//         <img src={viteLogo} className="logo" alt="Vite logo" />
//       </a>
//       <a href="https://react.dev" target="_blank">
//         <img src={reactLogo} className="logo react" alt="React logo" />
//       </a>
//     </div>
//     <h1>Vite + React</h1>
//     <div className="card">
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//       <p>
//         Edit <code>src/App.jsx</code> and save to test HMR
//       </p>
//     </div>
//     <p className="read-the-docs">
//       Click on the Vite and React logos to learn more
//     </p>
//   </>
// )