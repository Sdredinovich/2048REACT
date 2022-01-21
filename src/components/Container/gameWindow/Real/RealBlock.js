import { useEffect, useState } from "react";
import s from "./Real.module.css";

const Real = (props) => {

  function copyBlock (oldObj){
    let obj = {}
    for(let key in oldObj){
      if(typeof oldObj[key] == 'object'){
        obj[key]={}
        for(let key2 in oldObj[key]){
          obj[key][key2] = oldObj[key][key2]
        }
      }
    }
    return obj
  }
  const [gameOver, setGameOver] = useState(false)

  const [blocks, setBlocks] = useState({
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
  })

function GameOverCheck (obj){
  let scoreArr = []
  for(let key in obj){
scoreArr.push(obj[key].score)
  }
  scoreArr.every(el=>el)
  if(scoreArr.every(el=>el)){
    for(let key in obj){

      if(obj[+key-1]&&obj[+key-1].score==obj[+key].score&&obj[+key-1].row==obj[+key].row
        ||obj[+key+1]&&obj[+key+1].score==obj[+key].score&&[+key+1].row==obj[+key].row
        ||obj[+key-4]&&obj[+key-4].score==obj[+key].score
        ||obj[+key+4]&&obj[+key+4].score==obj[+key].score){
          return false
      }
    }
return true

  }
  return false

}



  const clicked = (direction)=>{
    let newBlocks = copyBlock(blocks)
    let globalScore = props.scoreState.score 

    if(direction==38){


      for(let key in newBlocks){

        if(newBlocks[key].score){
          // Если вторая строка
          if(newBlocks[key].row==2){
            if(!newBlocks[key-4].score){
          newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-4]:{...newBlocks[key-4], score: newBlocks[key].score, directionClass: 'VV1'} }
           
        }else if(newBlocks[key-4].score&&newBlocks[key-4].score==newBlocks[key].score){
          globalScore = globalScore + newBlocks[key].score * 2
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null, }, [key-4]:{...newBlocks[key-4], score: newBlocks[key].score * 2,plus: true, directionClass: 'VV1N'} } }}
          // Если третья строка
          if(newBlocks[key].row==3){
            if(!newBlocks[key-4].score&&!newBlocks[key-8].score){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-8]:{...newBlocks[key-8], score: newBlocks[key].score, directionClass: 'VV2'} }
              
            } else if(newBlocks[key-8].score&&newBlocks[key-8].score==newBlocks[key].score&&!newBlocks[key-4].score&&!newBlocks[key-8].plus){
          globalScore = globalScore + newBlocks[key].score * 2

            newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-8]:{...newBlocks[key-8], score: newBlocks[key].score * 2, plus: true,directionClass: 'VV2N'} }
            } else if(newBlocks[key-8].score&&newBlocks[key-8].score==newBlocks[key].score&&!newBlocks[key-4].score&&newBlocks[key-8].plus){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-4]:{...newBlocks[key-4], score: newBlocks[key].score, directionClass: 'VV1'}
              }
            }
            else if(!newBlocks[key-4].score){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-4]:{...newBlocks[key-4], score: newBlocks[key].score, directionClass: 'VV1'} }}
            else if(newBlocks[key-4].score&&newBlocks[key-4].score==newBlocks[key].score){
              globalScore = globalScore + newBlocks[key].score * 2

              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-4]:{...newBlocks[key-4], score: newBlocks[key].score * 2, plus: true, directionClass: 'VV1N'} } }}
          // Если четвертая строка
          if(newBlocks[key].row==4){
            if(!newBlocks[key-4].score&&!newBlocks[key-8].score&&!newBlocks[key-12].score){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-12]:{...newBlocks[key-12], score: newBlocks[key].score, directionClass: 'VV3'} }}
            else if(newBlocks[key-12].score&&newBlocks[key-12].score==newBlocks[key].score&&!newBlocks[key-4].score&&!newBlocks[key-8].score&&!newBlocks[key-12].plus){
          globalScore = globalScore + newBlocks[key].score * 2

              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-12]:{...newBlocks[key-12], score: newBlocks[key].score * 2, plus: true, directionClass: 'VV3N'} }}
              else if(newBlocks[key-12].score&&newBlocks[key-12].score==newBlocks[key].score&&!newBlocks[key-4].score&&!newBlocks[key-8].score&&newBlocks[key-12].plus){
                newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-8]:{...newBlocks[key-8], score: newBlocks[key].score, directionClass: 'VV2' } }}
                 else if(newBlocks[key-12].score&&newBlocks[key-12].score==newBlocks[key].score&&!newBlocks[key-4].score&&!newBlocks[key-8].score&&!newBlocks[key-12].plus){
          globalScore = globalScore + newBlocks[key].score * 2
                  newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-12]:{...newBlocks[key-12], score: newBlocks[key].score * 2, plus: true, directionClass: 'VV3N'} }}


                  else if(newBlocks[key-12].score&&newBlocks[key-8].score==newBlocks[key].score&&!newBlocks[key-4].score&&!newBlocks[key-8].plus){
          globalScore = globalScore + newBlocks[key].score * 2
                    newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-8]:{...newBlocks[key-8], score: newBlocks[key].score * 2, plus: true, directionClass: 'VV2N'} }}
                    else if(newBlocks[key-12].score&&newBlocks[key-8].score==newBlocks[key].score&&!newBlocks[key-4].score&&newBlocks[key-8].plus){
                      newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-4]:{...newBlocks[key-4], score: newBlocks[key].score ,  directionClass: 'VV1'} }}
    

            else if(!newBlocks[key-4].score&&newBlocks[key-8].score&&newBlocks[key-8].score!==newBlocks[key].score){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-4]:{...newBlocks[key-4], score: newBlocks[key].score, directionClass: 'VV1'} }}
              else if(!newBlocks[key-4].score&&newBlocks[key-8].score&&newBlocks[key-8].score==newBlocks[key].score){
                globalScore = globalScore + newBlocks[key].score * 2
                newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-8]:{...newBlocks[key-8], score: newBlocks[key].score * 2, plus: true, directionClass: 'VV2N'} }}
            else if(!newBlocks[key-4].score&&!newBlocks[key-8].score){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-8]:{...newBlocks[key-8], score: newBlocks[key].score, directionClass: 'VV2'} }}
            else if(newBlocks[key-4].score&&newBlocks[key-4].score==newBlocks[key].score){
              globalScore = globalScore + newBlocks[key].score * 2
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-4]:{...newBlocks[key-4], score: newBlocks[key].score * 2, plus: true, directionClass: 'VV1N'} }}}}
            }

    }
    if(direction==40){
 for(let key = 16; key>0; key--){
        
        if(newBlocks[key].score){
          // Если третья строка
          if(newBlocks[key].row==3){
            if(!newBlocks[key+4].score){
          newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+4]:{...newBlocks[key+4], score: newBlocks[key].score, directionClass: 'VN1'} }
           
        }else if(newBlocks[key+4].score&&newBlocks[key+4].score==newBlocks[key].score){
          globalScore = globalScore + newBlocks[key].score * 2
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null, }, [key+4]:{...newBlocks[key+4], score: newBlocks[key].score * 2,plus: true, directionClass: 'VN1N'} } }}
          // Если вторая строка
          if(newBlocks[key].row==2){
            if(!newBlocks[key+4].score&&!newBlocks[key+8].score){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+8]:{...newBlocks[key+8], score: newBlocks[key].score, directionClass: 'VN2'} }
              
            }
             else if(newBlocks[key+8].score&&newBlocks[key+8].score==newBlocks[key].score&&!newBlocks[key+4].score&&!newBlocks[key+8].plus){
              globalScore = globalScore + newBlocks[key].score * 2
            newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+8]:{...newBlocks[key+8], score: newBlocks[key].score * 2,plus: true,directionClass: 'VN2N'} }
            }
             else if(newBlocks[key+8].score&&newBlocks[key+8].score==newBlocks[key].score&&!newBlocks[key+4].score&&newBlocks[key+8].plus){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+4]:{...newBlocks[key+4], score: newBlocks[key].score, directionClass: 'VN1'}
              }
            }
            else if(newBlocks[key+8].score&&newBlocks[key+8].score==newBlocks[key].score&&!newBlocks[key+4].score&&!newBlocks[key+8].plus){
              globalScore = globalScore + newBlocks[key].score * 2
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-8]:{...newBlocks[key-8], score: newBlocks[key].score * 2, plus: true,directionClass: 'VN2N'} }
              }
              else if(newBlocks[key+8].score&&newBlocks[key+8].score==newBlocks[key].score&&!newBlocks[key+4].score&&newBlocks[key+8].plus){
                newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+8]:{...newBlocks[key+8], score: newBlocks[key].score, directionClass: 'VN2'} }
                }
            else if(!newBlocks[key+4].score){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+4]:{...newBlocks[key+4], score: newBlocks[key].score, directionClass: 'VN1'} }}
            else if(newBlocks[key+4].score&&newBlocks[key+4].score==newBlocks[key].score){
              globalScore = globalScore + newBlocks[key].score * 2
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+4]:{...newBlocks[key+4], score: newBlocks[key].score * 2, plus: true, directionClass: 'VN1N'} } }}
          // Если первая строка
          if(newBlocks[key].row==1){

            if(!newBlocks[key+4].score&&!newBlocks[key+8].score&&!newBlocks[key+12].score){

              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+12]:{...newBlocks[key+12], score: newBlocks[key].score, directionClass: 'VN3'} }}
            else if(newBlocks[key+12].score&&newBlocks[key+12].score==newBlocks[key].score&&!newBlocks[key+4].score&&!newBlocks[key+8].score&&!newBlocks[key+12].plus){
              globalScore = globalScore + newBlocks[key].score * 2
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+12]:{...newBlocks[key+12], score: newBlocks[key].score * 2, plus: true, directionClass: 'VN3N'} }}
              else if(newBlocks[key+12].score&&newBlocks[key+12].score==newBlocks[key].score&&!newBlocks[key+4].score&&!newBlocks[key+8].score&&newBlocks[key+12].plus){

                newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+8]:{...newBlocks[key+8], score: newBlocks[key].score, directionClass: 'VN2' } }}
                 else if(newBlocks[key+12].score&&newBlocks[key+12].score==newBlocks[key].score&&!newBlocks[key+4].score&&!newBlocks[key+8].score&&!newBlocks[key+12].plus){
                  globalScore = globalScore + newBlocks[key].score * 2
                  newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+12]:{...newBlocks[key+12], score: newBlocks[key].score * 2, plus: true, directionClass: 'VN3N'} }}
                  else if(newBlocks[key+8].score&&newBlocks[key+8].score==newBlocks[key].score&&!newBlocks[key+4].score&&!newBlocks[key+8].plus){
                    globalScore = globalScore + newBlocks[key].score * 2
                    newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+8]:{...newBlocks[key+8], score: newBlocks[key].score * 2, plus: true, directionClass: 'VN2N'} }
                  }
                  else if(newBlocks[key+8].score&&newBlocks[key+8].score==newBlocks[key].score&&!newBlocks[key+4].score&&newBlocks[key+8].plus){
                    newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+4]:{...newBlocks[key+4], score: newBlocks[key].score,directionClass: 'VN1'} }
                  }


            else if(!newBlocks[key+4].score&&newBlocks[key+8].score&&newBlocks[key+8].score!==newBlocks[key].score){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+4]:{...newBlocks[key+4], score: newBlocks[key].score, directionClass: 'VN1'} }}
              else if(!newBlocks[key+4].score&&newBlocks[key+8].score&&newBlocks[key+8].score==newBlocks[key].score&&!newBlocks[key+8].plus){
                globalScore = globalScore + newBlocks[key].score * 2
                newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+8]:{...newBlocks[key+8], score: newBlocks[key].score * 2, plus: true, directionClass: 'VN2N'} }}
            else if(!newBlocks[key+4].score&&!newBlocks[key+8].score&&!newBlocks[key+8].plus){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+8]:{...newBlocks[key+8], score: newBlocks[key].score, directionClass: 'VN2'} }}
            else if(newBlocks[key+4].score&&newBlocks[key+4].score==newBlocks[key].score){
              globalScore = globalScore + newBlocks[key].score * 2
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+4]:{...newBlocks[key+4], score: newBlocks[key].score * 2, plus: true, directionClass: 'VN1N'} }}
            
            }}
            

 }

    }
    if(direction==37){
      for(let key in newBlocks){
        if(newBlocks[key].score){
          // Если второй блок
          if(newBlocks[key].block==2){
            if(!newBlocks[key-1].score){
          newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-1]:{...newBlocks[key-1], score: newBlocks[key].score, directionClass: 'VL1'} }
           
        }else if(newBlocks[key-1].score&&newBlocks[key-1].score==newBlocks[key].score){
          globalScore = globalScore + newBlocks[key].score * 2
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null, }, [key-1]:{...newBlocks[key-1], score: newBlocks[key].score * 2,plus: true, directionClass: 'VL1N'} } }}
          // Если третий блок
          if(newBlocks[key].block==3){
            if(!newBlocks[key-1].score&&!newBlocks[key-2].score){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-2]:{...newBlocks[key-2], score: newBlocks[key].score, directionClass: 'VL2'} }
              
            } else if(newBlocks[key-2].score&&newBlocks[key-2].score==newBlocks[key].score&&!newBlocks[key-1].score&&!newBlocks[key-2].plus){
              globalScore = globalScore + newBlocks[key].score * 2
            newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-2]:{...newBlocks[key-2], score: newBlocks[key].score * 2, plus: true,directionClass: 'VL2N'} }
            } else if(newBlocks[key-2].score&&newBlocks[key-2].score==newBlocks[key].score&&!newBlocks[key-1].score&&newBlocks[key-2].plus){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-1]:{...newBlocks[key-1], score: newBlocks[key].score, directionClass: 'VL1'}
              }
            }
            else if(newBlocks[key-2].score&&newBlocks[key-2].score==newBlocks[key].score&&!newBlocks[key-1].score&&!newBlocks[key-2].plus){
              globalScore = globalScore + newBlocks[key].score * 2
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-2]:{...newBlocks[key-2], score: newBlocks[key].score * 2, plus: true,directionClass: 'VL2N'} }
              }
              else if(newBlocks[key-2].score&&newBlocks[key-2].score==newBlocks[key].score&&!newBlocks[key-1].score&&newBlocks[key-2].plus){
                newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-2]:{...newBlocks[key-2], score: newBlocks[key].score, directionClass: 'VL2'} }
                }
            else if(!newBlocks[key-1].score){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-1]:{...newBlocks[key-1], score: newBlocks[key].score, directionClass: 'VL1'} }}
            else if(newBlocks[key-1].score&&newBlocks[key-1].score==newBlocks[key].score){
              globalScore = globalScore + newBlocks[key].score * 2
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-1]:{...newBlocks[key-1], score: newBlocks[key].score * 2, plus: true, directionClass: 'VL1N'} } }}
          // Если четвертый блок
          if(newBlocks[key].block==4){
            if(!newBlocks[key-1].score&&!newBlocks[key-2].score&&!newBlocks[key-3].score){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-3]:{...newBlocks[key-3], score: newBlocks[key].score, directionClass: 'VL3'} }}
            else if(newBlocks[key-3].score&&newBlocks[key-3].score==newBlocks[key].score&&!newBlocks[key-1].score&&!newBlocks[key-2].score&&!newBlocks[key-3].plus){
              globalScore = globalScore + newBlocks[key].score * 2
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-3]:{...newBlocks[key-3], score: newBlocks[key].score * 2, plus: true, directionClass: 'VL3N'} }}
              else if(newBlocks[key-3].score&&newBlocks[key-3].score==newBlocks[key].score&&!newBlocks[key-1].score&&!newBlocks[key-2].score&&newBlocks[key-3].plus){
               
                newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-2]:{...newBlocks[key-2], score: newBlocks[key].score, directionClass: 'VL2' } }}
                 else if(newBlocks[key-3].score&&newBlocks[key-3].score==newBlocks[key].score&&!newBlocks[key-1].score&&!newBlocks[key-2].score&&!newBlocks[key-3].plus){
                  globalScore = globalScore + newBlocks[key].score * 2
                  newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-3]:{...newBlocks[key-3], score: newBlocks[key].score * 2, plus: true, directionClass: 'VL3N'} }}


                  else if(newBlocks[key-3].score&&newBlocks[key-2].score==newBlocks[key].score&&!newBlocks[key-1].score&&!newBlocks[key-2].plus){
                    globalScore = globalScore + newBlocks[key].score * 2
                    newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-2]:{...newBlocks[key-2], score: newBlocks[key].score * 2, plus: true, directionClass: 'VL2N'} }}
                    else if(newBlocks[key-3].score&&newBlocks[key-2].score==newBlocks[key].score&&!newBlocks[key-1].score&&newBlocks[key-2].plus){
                      newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-1]:{...newBlocks[key-1], score: newBlocks[key].score, directionClass: 'VL1'} }}

            else if(!newBlocks[key-1].score&&newBlocks[key-2].score&&newBlocks[key-2].score!==newBlocks[key].score){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-1]:{...newBlocks[key-1], score: newBlocks[key].score, directionClass: 'VL1'} }}
              else if(!newBlocks[key-1].score&&newBlocks[key-2].score&&newBlocks[key-2].score==newBlocks[key].score){
                globalScore = globalScore + newBlocks[key].score * 2
                newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-2]:{...newBlocks[key-2], score: newBlocks[key].score * 2, plus: true, directionClass: 'VL2N'} }}

            else if(!newBlocks[key-1].score&&!newBlocks[key-2].score){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-2]:{...newBlocks[key-2], score: newBlocks[key].score, directionClass: 'VL2'} }}
            else if(newBlocks[key-1].score&&newBlocks[key-1].score==newBlocks[key].score){

              globalScore = globalScore + newBlocks[key].score * 2
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key-1]:{...newBlocks[key-1], score: newBlocks[key].score * 2, plus: true, directionClass: 'VL1N'} }}}}
            }

    }
    if(direction==39){
      for(let key = 16; key>0; key--){

        if(newBlocks[key].score){
          // Если   ТРЕТИЙ блок
          if(newBlocks[key].block==3){
            if(!newBlocks[key+1].score){
          newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+1]:{...newBlocks[key+1], score: newBlocks[key].score, directionClass: 'VP1'} }
           
        }else if(newBlocks[key+1].score&&newBlocks[key+1].score==newBlocks[key].score){
          globalScore = globalScore + newBlocks[key].score * 2
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null, }, [key+1]:{...newBlocks[key+1], score: newBlocks[key].score * 2,plus: true, directionClass: 'VP1N'} } }}
          // Если ВТОРОЙ блок
          if(newBlocks[key].block==2){
            if(!newBlocks[key+1].score&&!newBlocks[key+2].score){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+2]:{...newBlocks[key+2], score: newBlocks[key].score, directionClass: 'VP2'} }
              
            } else if(newBlocks[key+2].score&&newBlocks[key+2].score==newBlocks[key].score&&!newBlocks[key+1].score&&!newBlocks[key+2].plus){
              globalScore = globalScore + newBlocks[key].score * 2
            newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+2]:{...newBlocks[key+2], score: newBlocks[key].score * 2, plus: true,directionClass: 'VP2N'} }
            } else if(newBlocks[key+2].score&&newBlocks[key+2].score==newBlocks[key].score&&!newBlocks[key+1].score&&newBlocks[key+2].plus){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+1]:{...newBlocks[key+1], score: newBlocks[key].score, directionClass: 'VP1'}
              }
            }
            else if(newBlocks[key+2].score&&newBlocks[key+2].score==newBlocks[key].score&&!newBlocks[key+1].score&&!newBlocks[key+2].plus){
              globalScore = globalScore + newBlocks[key].score * 2
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+2]:{...newBlocks[key+2], score: newBlocks[key].score * 2, plus: true,directionClass: 'VP2N'} }
              }
              else if(newBlocks[key+2].score&&newBlocks[key+2].score==newBlocks[key].score&&!newBlocks[key+1].score&&newBlocks[key+2].plus){
                newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+2]:{...newBlocks[key+2], score: newBlocks[key].score, directionClass: 'VP2'} }
                }
            else if(!newBlocks[key+1].score){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+1]:{...newBlocks[key+1], score: newBlocks[key].score, directionClass: 'VP1'} }}
            else if(newBlocks[key+1].score&&newBlocks[key+1].score==newBlocks[key].score){
              globalScore = globalScore + newBlocks[key].score * 2
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+1]:{...newBlocks[key+1], score: newBlocks[key].score * 2, plus: true, directionClass: 'VP1N'} } }}
          // Если ПЕРВЫЙ блок
          if(newBlocks[key].block==1){
            if(!newBlocks[key+1].score&&!newBlocks[key+2].score&&!newBlocks[key+3].score){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+3]:{...newBlocks[key+3], score: newBlocks[key].score, directionClass: 'VP3'} }}
            else if(newBlocks[key+3].score&&newBlocks[key+3].score==newBlocks[key].score&&!newBlocks[key+1].score&&!newBlocks[key+2].score&&!newBlocks[key+3].plus){
              globalScore = globalScore + newBlocks[key].score * 2
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+3]:{...newBlocks[key+3], score: newBlocks[key].score * 2, plus: true, directionClass: 'VP3N'} }}
              else if(newBlocks[key+3].score&&newBlocks[key+3].score==newBlocks[key].score&&!newBlocks[key+1].score&&!newBlocks[key+2].score&&newBlocks[key+3].plus){
                newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+2]:{...newBlocks[key+2], score: newBlocks[key].score, directionClass: 'VP2' } }}
                 else if(newBlocks[key+3].score&&newBlocks[key+3].score==newBlocks[key].score&&!newBlocks[key+1].score&&!newBlocks[key+2].score&&!newBlocks[key+3].plus){
                  globalScore = globalScore + newBlocks[key].score * 2
                  newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+3]:{...newBlocks[key+3], score: newBlocks[key].score * 2, plus: true, directionClass: 'VP3N'} }}


                  else if(newBlocks[key+3].score&&newBlocks[key+2].score==newBlocks[key].score&&!newBlocks[key+1].score&&!newBlocks[key+2].plus){
                    globalScore = globalScore + newBlocks[key].score * 2
                    newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+2]:{...newBlocks[key+2], score: newBlocks[key].score * 2, plus: true, directionClass: 'VP2N'} }}
                    else if(newBlocks[key+3].score&&newBlocks[key+2].score==newBlocks[key].score&&!newBlocks[key+1].score&&newBlocks[key+2].plus){
                      newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+1]:{...newBlocks[key+1], score: newBlocks[key].score , directionClass: 'VP1'} }}

            else if(!newBlocks[key+1].score&&newBlocks[key+2].score&&newBlocks[key+2].score!==newBlocks[key].score){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+1]:{...newBlocks[key+1], score: newBlocks[key].score, directionClass: 'VP1'} }}
              else if(!newBlocks[key+1].score&&newBlocks[key+2].score&&newBlocks[key+2].score==newBlocks[key].score){
                globalScore = globalScore + newBlocks[key].score * 2
                newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+2]:{...newBlocks[key+2], score: newBlocks[key].score * 2, plus: true, directionClass: 'VP2N'} }}

            else if(!newBlocks[key+1].score&&!newBlocks[key+2].score){
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+2]:{...newBlocks[key+2], score: newBlocks[key].score, directionClass: 'VP2'} }}
            else if(newBlocks[key+1].score&&newBlocks[key+1].score==newBlocks[key].score){
              globalScore = globalScore + newBlocks[key].score * 2
              newBlocks = {...newBlocks, [key]:{...newBlocks[key], score: null}, [key+1]:{...newBlocks[key+1], score: newBlocks[key].score * 2, plus: true, directionClass: 'VP1N'} }}}}
           



      }
    }
    props.setScoreState({...props.scoreState, score: globalScore, record: globalScore>props.scoreState.record?globalScore:props.scoreState.record})
    setBlocks({...newBlocks})
    let dirArr = []
    for(let key in newBlocks){
      dirArr.push(newBlocks[key].score)
    }
    if(!dirArr.every(el=>el)){
      let massDescript = []
      for (let key in newBlocks){
   massDescript.push(newBlocks[key].directionClass)
      }
      if(massDescript.some(el=>el!==null)){
        randomBlock(newBlocks)

      }
    } 
  }

  let keys = Object.keys(blocks)

  function randomBlock (newBlocks){
    
    let arr = [2, 2, 2, 2,2, 2, 2, 2, 4, 4, 8];
    let freeBlocks = [];
    let randomScore = arr[Math.floor(Math.random() * arr.length)];
    for(let key in newBlocks){
      if(!newBlocks[key].score){
        freeBlocks.push(key)
      }
    }
    let randomBlock = freeBlocks[Math.floor(Math.random() * freeBlocks.length)];
    setBlocks({  ...newBlocks, [randomBlock ] : {...newBlocks[randomBlock ],score: randomScore, new: true}});
  }


  useEffect(()=>{
    if(!gameOver){
      randomBlock(blocks)
    }
  }, [gameOver])

  useEffect(() => {
    if(GameOverCheck(blocks)){
      setGameOver(true)
    } else{
    
      let massDescript = []
      for (let key in blocks){
   massDescript.push(blocks[key].directionClass)
      }
      
      if(massDescript.some(el=>el!==null)){
        let obj = {}
            for(let key in blocks){
         obj[key] = {...blocks[key], directionClass: null, new: false, plus: false }
       }
       setTimeout(()=>{
         setBlocks({...obj})
       }, 150)
      }
    }

   
   

 
  

return


  }, [blocks]);



  return (
    <div className={s.real}>
      {keys.map((num) => {
        if (blocks[num].score) {
          return (
            <Block
              key={blocks[num].id}
              id={blocks[num].id}
              block={blocks[num].block}
              row={blocks[num].row}
              score={blocks[num].score}
              new={blocks[num].new}
              direction={blocks[num].directionClass}
            />
          );
        }
      })}


      <div className={`${s.pole} ${gameOver&&s.gameOver}`} tabIndex="0" onKeyDown={(e)=>{clicked(e.keyCode)}}></div>



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



