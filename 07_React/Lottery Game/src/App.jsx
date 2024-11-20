import './App.css';
import Lottery from './Lottery.jsx';
import {sum} from "./helper.js";

function App() {

  let winCondition = (ticket) => {
    // return sum(ticket) === 15;  // sum equals 15
    // return ticket.every((num) => num === 7); // ticket = 777
    return ticket.every((num) => num === ticket[0]);
  };

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  )
}

export default App