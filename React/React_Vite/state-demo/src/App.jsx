import './App.css'

import Counter from './Counter';
import Dumbo from './Dumbo';
import ScoreKeeper from './ScoreKeeper';
import EmojiClicker from './EmojiClicker';
import ScoreKeeperDemo from './ScoreKeeperDemo';
// import Lucky7Game from './Lucky7Game';
import Die from './Die';
import Dice from './Dice';

function App() {

  return (
    <div>
      <h1>State Demo!</h1>

      <Die val={4} />
      <Dice dice={[3, 6, 1]} color='blue' />

      {/* <Counter /> */}
      {/* <Dumbo /> */}
      {/* <ScoreKeeper /> */}
      {/* <EmojiClicker /> */}
      {/* <ScoreKeeperDemo numPlayer={4} target={3} /> */}

    </div>
  )

}

export default App
