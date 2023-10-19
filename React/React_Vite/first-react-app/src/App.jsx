// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'

// import Chicken from "./Chicken";
// import ListPicker from './ListPicker';
// import Greeter from "./Greeter";
// import Die from "./Die";
// import Doubledice from './DoubleDice';
// import ColorList from './ColorList';

import Heading from './Heading';
import Slots from './Slots';

function App() {
  return (
    <div>
      <Heading color="magenta" text="Welcome" fontSize="20px" />

      <Slots val1="A" val2="A" val3="A" />
      <Slots val1="A" val2="B" val3="C" />

      {/* <Chicken /> */}

      {/* passing an argument, multiple arguments can be passed in key, value pairs*/}
      {/* <Greeter person="Bill" from="America" /> */}

      {/* Passing Number */}
      {/* <Die numSides={20} />
      <Die numSides={10} />
      <Die numSides={6} /> */}

      {/* <Doubledice />
      <Doubledice /> */}

      {/* passing arrayas */}
      {/* <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} /> */}
      {/* passing objects */}
      {/* outer curly brackets to escape jsx, inner to create an object */}
      {/* <ListPicker values={{ a: 1, b: 2 }} /> */}

      {/* <ColorList colors={["red", "pink", "purple", "teal"]} />
      <ColorList colors={["olive", "orange", "slategray"]} /> */}

    </div>
  )
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