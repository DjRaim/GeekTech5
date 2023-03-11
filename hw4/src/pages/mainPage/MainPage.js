import { useDispatch, useSelector } from "react-redux"
import { addNumberAction, changeInputValueAction, clearNumberAction } from "../../redux/actions"


export default function MainPage() {
    const dispatch = useDispatch()

    const { inputValue, result, story } = useSelector( state => state )
    console.log(inputValue);

    const changeInput = ( e ) => {
        console.log(e.target.value);
        dispatch(changeInputValueAction(e.target.value))
    }

    const addNumber = () => {
        dispatch(addNumberAction(inputValue))
    }

    const clearNumber = () => {
        dispatch(clearNumberAction())
    }

    console.log(story);

    return (
        <>
            <div>
                <input type="number" placeholder="number" onChange={changeInput} value={inputValue}/>
            </div>
            <button onClick={addNumber}>Add</button>
            <button onClick={clearNumber}>Clear</button>
            <div>
                <span>{ result }</span>
            </div>
            history
            <ul>
                { story.map( num => <li>{num}</li>) }
            </ul>
        </>
    )
}