import { useDispatch, useSelector } from "react-redux"

function MainPage() {
    const dispatch=useDispatch()
    const {numb}=useSelector(state=>state)


    const plus=()=>{
        dispatch({
            type:'PLUS'
        })
    }
    const minus=()=>{
        dispatch({
            type:'MINUS'
        })
    }
    return (
        <>

            <h2 >{numb}</h2>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </>
    )
}

export default MainPage