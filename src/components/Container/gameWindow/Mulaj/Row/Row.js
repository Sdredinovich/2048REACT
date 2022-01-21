import Block from './Block/Block'
import s from './Row.module.css'


const Row = (props)=>{
    return <div className={s.row}>
<Block/>
<Block/>
<Block/>
<Block/>
    </div>
}



export default Row