import { useEffect, useRef, useState } from "react";
import s from "./Real.module.css";

let initialBlock = {
  1: { id: 1, row: 1, block: 1, score: null, new: false, directionClass: null, plus: false },
   2:{ id: 2, row: 1, block: 2, score:null, new: false, directionClass: null, plus: false },
   3:{ id: 3, row: 1, block: 3, score: null, new: false, directionClass: null, plus: false },
   4:{ id: 4, row: 1, block: 4, score: null, new: false, directionClass: null, plus: false },
   5:{ id: 5, row: 2, block: 1, score: null, new: false, directionClass: null, plus: false },
   6:{ id: 6, row: 2, block: 2, score: null, new: false, directionClass: null , plus: false},
   7:{ id: 7, row: 2, block: 3, score: null, new: false, directionClass: null, plus: false },
   8:{ id: 8, row: 2, block: 4, score: null, new: false, directionClass: null , plus: false},
   9:{ id: 9, row: 3, block: 1, score: null, new: false, directionClass: null , plus: false},
   10:{ id: 10, row: 3, block: 2, score: null, new: false, directionClass: null, plus: false},
   11:{ id: 11, row: 3, block: 3, score: null, new: false, directionClass: null , plus: false},
   12:{ id: 12, row: 3, block: 4, score: null, new: false, directionClass: null , plus: false},
   13:{ id: 13, row: 4, block: 1, score: null, new: false, directionClass: null, plus: false },
   14:{ id: 14, row: 4, block: 2, score: null, new: false, directionClass: null , plus: false},
   15:{ id: 15, row: 4, block: 3, score: null, new: false, directionClass: null, plus: false },
   16:{ id: 16, row: 4, block: 4, score: null, new: false, directionClass: null , plus: false},
 }

const Real = ({setScoreState}) => {
  const divRef = useRef(null);
  const [gameOver, setGameOver] = useState(true)

  const [blocks, setBlocks] = useState(initialBlock)

  let keys = Object.keys(blocks)

  function GameOverCheck(obj) {
    const scoreArr = Object.values(obj).map(block => block.score);
  
    if (scoreArr.every(score => score)) {
      return !Object.keys(obj).some(key => {
        const currentBlock = obj[key];
        const leftBlock = obj[+key - 1];
        const rightBlock = obj[+key + 1];
        const topBlock = obj[+key - 4];
        const bottomBlock = obj[+key + 4];
  
        return (
          (leftBlock && leftBlock.score === currentBlock.score && leftBlock.row === currentBlock.row) ||
          (rightBlock && rightBlock.score === currentBlock.score && rightBlock.row === currentBlock.row) ||
          (topBlock && topBlock.score === currentBlock.score) ||
          (bottomBlock && bottomBlock.score === currentBlock.score)
        );
      });
    }
  
    return false;
  }

  const clicked = (direction)=>{
    let newBlocks = JSON.parse(JSON.stringify(blocks))

    function newBlock(key, move, symbol, isNew, dir){
      const dirKey = { 1:1, 2:2, 3:3, 4:1, 8:2, 12:3 }
        let isNeww = isNew ? 'N':'' 
        dir = dir + dirKey[move] + isNeww
        let key1 = symbol==="+"?key+move:key-move
        newBlocks = isNew ? newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null, }, [key1]:{...newBlocks[key1], score: newBlocks[key].score * 2,plus: true, directionClass: dir} }
        :newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key1]:{...newBlocks[key1], score: newBlocks[key].score, directionClass: dir} }
      }

      function test1(key, move, symbol, dir) {
        const key1 = symbol === '+' ? key + move : key - move;
        if (!newBlocks[key1].score || newBlocks[key1].score === newBlocks[key].score) {
          newBlock(key, move, symbol, newBlocks[key1].score === newBlocks[key].score, dir);
        }
      }

      function test2(key, move, symbol, dir) {
  const key1 = symbol === '+' ? key + move : key - move;
  const key2 = symbol === '+' ? key + (move * 2) : key - (move * 2);
  const keyScore = newBlocks[key].score;
  const key1Score = newBlocks[key1].score;
  const key2Score = newBlocks[key2].score;
  const key2Plus = newBlocks[key2].plus;

  if (!key1Score&&!key2Score) {
    newBlock(key, move * 2, symbol, false, dir)  
  } else if (key2Score&&key2Score==keyScore&&!key1Score&&!key2Plus) {
    newBlock(key, move * 2, symbol, true, dir);
  } else if (key2Score&&key2Score==keyScore&&!key1Score&&key2Plus) {
    newBlock(key, move, symbol, false, dir);
  } else if (!key1Score) {
    newBlock(key, move, symbol, false, dir);
  } else if (key1Score&&key1Score==keyScore) {
    newBlock(key, move, symbol, true, dir);
  }
      }
      
        function test3(key, move, symbol, dir) {
  const key1 = symbol === '+' ? key + move : key - move;
  const key2 = symbol === '+' ? key + (move * 2) : key - (move * 2);
  const key3 = symbol === '+' ? key + (move * 3) : key - (move * 3);

  const keyScore = newBlocks[key].score;
  const key1Score = newBlocks[key1].score;
  const key2Score = newBlocks[key2].score;
  const key3Score = newBlocks[key3].score;
  const key3Plus = newBlocks[key3].plus;
  const key2Plus = newBlocks[key2].plus;

  if (!key1Score && !key2Score && !key3Score) {
    newBlock(key, move * 3, symbol, false, dir);
  } else if (key3Score === keyScore && !key1Score && !key2Score && !key3Plus) {
    newBlock(key, move * 3, symbol, true, dir);
  } else if (key3Score === keyScore && !key1Score && !key2Score && key3Plus) {
    newBlock(key, move * 2, symbol, false, dir);
  } else if (key3Score === keyScore && key2Score === keyScore && !key1Score && !key2Plus) {
    newBlock(key, move * 2, symbol, true, dir);
  } else if (key3Score === keyScore && key2Score === keyScore && !key1Score && key2Plus) {
    newBlock(key, move, symbol, false, dir);
  } else if (!key1Score && key2Score && key2Score !== keyScore) {
    newBlock(key, move, symbol, false, dir);
  } else if (!key1Score && key2Score && key2Score === keyScore) {
    newBlock(key, move * 2, symbol, true, dir);
  } else if (!key1Score && !key2Score) {
    newBlock(key, move * 2, symbol, false, dir);
  } else if (key1Score === keyScore) {
    newBlock(key, move, symbol, true, dir);
  }
      }

    if(direction===38){
      for(let key in newBlocks){
        if(newBlocks[key].score){
          if(newBlocks[key].row==2) test1(key, 4, '-', 'VV')
          if(newBlocks[key].row==3) test2(key, 4, '-', 'VV')
          if(newBlocks[key].row==4)  test3(key, 4, '-', 'VV')
        }}}

    if(direction===40){
      for(let key = 16; key>0; key--){      
        if(newBlocks[key].score){
          if(newBlocks[key].row==3) test1(key, 4, '+', 'VN')
          if(newBlocks[key].row==2) test2(key, 4, '+', 'VN')
          if(newBlocks[key].row==1) test3(key, 4, '+', 'VN')
        }}}

    if(direction===37){
      for(let key in newBlocks){
        if(newBlocks[key].score){
          if(newBlocks[key].block==2) test1(key, 1, '-', 'VL')
          if(newBlocks[key].block==3) test2(key, 1, '-', 'VL')
          if(newBlocks[key].block==4) test3(key, 1, '-', 'VL')
        }}}

    if(direction===39){
      for(let key = 16; key>0; key--){
        if(newBlocks[key].score){
          if(newBlocks[key].block==3) test1(key, 1, '+', 'VP')
          if(newBlocks[key].block==2) test2(key, 1, '+', 'VP')
          if(newBlocks[key].block==1) test3(key, 1, '+', 'VP')
        }}}

    const dirArr = Object.values(newBlocks).map(block => block.score);
    if (!dirArr.every(Boolean) && Object.values(newBlocks).some(block => block.directionClass !== null)) {
        randomBlock(newBlocks);
    }

    }

    function randomBlock(newBlocks) {
      const freeBlocks = Object.keys(newBlocks).filter(key => !newBlocks[key].score);
      const randomBlock = freeBlocks[Math.floor(Math.random() * freeBlocks.length)];
      const randomScore = [2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 8][Math.floor(Math.random() * 11)];
      setBlocks({ ...newBlocks, [randomBlock]: { ...newBlocks[randomBlock], score: randomScore, new: true } });
      const score = Math.max(...Object.values(newBlocks).map(block => block.score));
      setScoreState(score)

      
    }


  useEffect(()=>{
    if(!gameOver){
      randomBlock(blocks)
    }
  }, [gameOver])

  useEffect(() => {
    if (GameOverCheck(blocks)) {
      setGameOver(true);
    } else {
      const hasNonNullDirection = Object.values(blocks).some(block => block.directionClass !== null);
      
      if (hasNonNullDirection) {
        const updatedBlocks = Object.fromEntries(
          Object.entries(blocks).map(([key, block]) => [key, { ...block, directionClass: null, new: false, plus: false }])
        );
        
        setTimeout(() => {
          setBlocks(updatedBlocks);
        }, 150);
      }
    }
  }, [blocks]);

  useEffect(() => {
    
    divRef.current.focus();
  }, []);


  function restart(){
    setBlocks(initialBlock)
    setGameOver(false)
    divRef.current.focus();
        
  }


  return (
<div className={s.real}  onKeyDown={e => clicked(e.keyCode)} ref={divRef}
      tabIndex="0">
  {keys.map(num => blocks[num].score && (
    <Block
      key={blocks[num].id}
      id={blocks[num].id}
      block={blocks[num].block}
      row={blocks[num].row}
      score={blocks[num].score}
      new={blocks[num].new}
      direction={blocks[num].directionClass}
    />
  ))}
  <div className={`${s.pole} ${gameOver && s.gameOver}`} tabIndex="0" >
    {gameOver&&<button className={s.restBtn} onClick={restart}>НАЧАТЬ ЗАНОВО</button>}
  </div>
</div>
  );
}

const Block = (props) => {
  return (
    <div
      className={`${s.block} ${s["b" + props.row + "-" + props.block]} ${
        s["score" + props.score]
      } ${props.new && s.new} ${s[props.direction]}`}
    >
      {props.score}
    </div>
  );
};

export default Real;



