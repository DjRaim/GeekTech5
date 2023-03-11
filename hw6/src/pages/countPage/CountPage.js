import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {countNumber} from "../../store/countSlice";


function CountPage() {

    const dispatch = useDispatch()
    const [ valueOne, setValueOne ] = useState('')
    const [ valueTwo, setValueTwo ] = useState('')
    const { result } = useSelector( state => state.countReducer)

    const chageSigns = (e) => {
        // значение кнопок (+-*/)
        const event = e.target.innerText

        dispatch(countNumber({event, valueOne, valueTwo}))

        //проверка пустой строки
        if ( valueOne !== '' && valueTwo !== '' ) {
            setValueOne('')
            setValueTwo('')
        }
    }

    return (
        <>
            <div>
                <input
                    type='number'
                    placeholder="number"
                    value={valueOne}
                    onChange={
                        (e) => setValueOne(e.target.value)
                    }
                />

                <input type='number' placeholder="number" value={valueTwo} onChange={(e) => setValueTwo(e.target.value)}/>

            </div>

            <button onClick={chageSigns}> + </button>
            <button onClick={chageSigns}> - </button>
            <button onClick={chageSigns}> * </button>
            <button onClick={chageSigns}> / </button>

            <div>
                {result}
            </div>
        </>
    )
}

export default CountPage