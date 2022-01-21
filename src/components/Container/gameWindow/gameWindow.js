import s from "./gameWindow.module.css";
import Mulaj from "./Mulaj/Mulaj";
import Real from "./Real/RealBlock";

const GameWindow = (props) => {




  return (
    <div className={s.gameWindow}>
      <Real/>
      <Mulaj />
    </div>
  );
};

export default GameWindow;
