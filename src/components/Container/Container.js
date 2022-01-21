import { useState } from "react";
import s from "./Container.module.css";
import GameWindow from "./gameWindow/gameWindow";
import Header from "./Header/Header";

const Container = (props) => {

const [scoreState, secScoreState] = useState({score:0, record:0})
const [resetFlag, setResetFlag] = useState(false)



    
  return (
    <div className={s.container}>
      <Header  setResetFlag={setResetFlag}  score={scoreState}/>
      <GameWindow resetFlag={resetFlag} setResetFlag={setResetFlag}  />
    </div>
  );
};

export default Container;
