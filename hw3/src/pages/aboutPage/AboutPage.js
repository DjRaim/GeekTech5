import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"

function AboutPage() {
    const {inputValue,aboutTitle,user}=useSelector(state=>state)
    const dispatch=useDispatch()
    const [inputVal,setInputVal]=useState('')
    const userObj={
        name:'Anna',
        age:25
    }
    const changeInput=(event)=>{
        setInputVal(event.target.value)
        //     dispatch({
        //         type:'CHANGE_INPUT',
        //         payload:event.target.value
        //     })
    }
    const changeAboutTitle=()=>{
        dispatch({
            type:'CHANGE_ABOUT_TITLE',
            payload:inputVal
        })
        dispatch({
            type:'OBJECT',
            payload:userObj
        })
        setInputVal('')
    }
    const deletes=()=>{
        dispatch({
            type:'DELETES_ALL',
        })
    }
    const plus=()=>{
        dispatch({
            type:'PLUS'
        })
    }
    return (
        <>
            <h1>{user.age} {user.name}</h1>
            <input value={inputVal} type="text"placeholder="title" onChange={changeInput}/>
            <button onClick={changeAboutTitle}>change</button>
            <button onClick={deletes}>delete title</button>
            <button onClick={{plus}}>+</button>
            <button>-</button>
        </>
    )
}

export default AboutPage