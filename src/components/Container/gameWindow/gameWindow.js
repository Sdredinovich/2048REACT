import s from "./gameWindow.module.css";
import Mulaj from "./Mulaj/Mulaj";
import Real from "./Real/RealBlock";

const GameWindow = ({setScoreState, scoreState}) => {




  return (
    <div className={s.gameWindow}>
      <Real scoreState={scoreState}  setScoreState={setScoreState}/>
      <Mulaj />
    </div>
  );
};

export default GameWindow;
