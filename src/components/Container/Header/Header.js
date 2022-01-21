import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import s from './Header.module.css'


const Header = (props)=>{

    return <div className={s.header}>
<a className={s.h1} href='/'>2048</a>

<div className={s.scoreAndRecord}>
<div className={s.score }>
    <p className={s.title}>СЧЕТ</p>
    <p>{props.scoreState.score}</p>

</div>
<div className={s.record}>
    <p className={s.title}>РЕКОДР</p>
    <p>{props.scoreState.record}</p>
</div>
</div>



    </div>
}


export default Header