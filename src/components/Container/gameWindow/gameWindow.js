import s from "./gameWindow.module.css";
import Mulaj from "./Mulaj/Mulaj";
import Real from "./Real/RealBlock";

const GameWindow = (props) => {





  return (
    <div className={s.gameWindow}>
      <Real   scoreState={props.scoreState} setScoreState={props.setScoreState} />
      <Mulaj />
    </div>
  );
};

export default GameWindow;
