import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import s from "./Container.module.css";
import GameWindow from "./gameWindow/gameWindow";
import Header from "./Header/Header";

const Container = (props) => {

const [scoreState, setScoreState] = useState({score:0, record: 0})


    
  return (
    <div className={s.container}>
      <Header  scoreState={scoreState}/>
      <GameWindow  scoreState={scoreState} setScoreState={setScoreState}  />
    </div>
  );
};

export default Container;
