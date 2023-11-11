import './App.css'

import Counter from './Counter';
import Dumbo from './Dumbo';
import ScoreKeeper from './ScoreKeeper';
import EmojiClicker from './EmojiClicker';
import ScoreKeeperDemo from './ScoreKeeperDemo';


function App() {

  return (
    <div>
      <h1>State Demo!</h1>
      {/* <Counter /> */}
      {/* <Dumbo /> */}
      {/* <ScoreKeeper /> */}
      {/* <EmojiClicker /> */}
      <ScoreKeeperDemo numPlayer={4} target={3} />

    </div>
  )

}

export default App
