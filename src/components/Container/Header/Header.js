import s from './Header.module.css'


const Header = ({scoreState})=>{
    return <div className={s.header}>
<a className={s.h1} href='/'>2048</a>

<div className={s.scoreAndRecord}>
<div  className={`${s.score} ${s['score' + scoreState.score]}`}>
    <p className={s.title}>СЧЕТ</p>
    <p>{scoreState.score}</p>

</div>
<div className={`${s.record} ${s['score' + scoreState.record]}`}>
    <p className={s.title}>РЕКОДР</p>
    <p>{scoreState.record}</p>
</div>
</div>



    </div>
}


export default Header