import { useState } from "react";
import s from "./Container.module.css";
import GameWindow from "./gameWindow/gameWindow";
import Header from "./Header/Header";

const Container = (props) => {
const [scoreState, setScoreState] = useState({score:0, record: localStorage.getItem('record')|0})

function set(score) {
  const record = Math.max(score, localStorage.getItem('record') || 0);
  localStorage.setItem('record', record);
  setScoreState({ score, record });
}


    
  return (
    <div className={s.container}>
      <Header  scoreState={scoreState}/>
      <GameWindow scoreState={scoreState} setScoreState={set}/>
    </div>
  );
};

export default Container;
