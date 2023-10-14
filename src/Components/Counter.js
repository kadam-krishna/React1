import {useState,useRef} from 'react';
import './Counter.css'
const Counter =()=>
{
    const text = useRef();
    const [wordCount,setWordCount] = useState(0);
    const WordsCount = (e) => {
        let str = text.current.value;
        str = str.trim();
        let a =str.split(" ");
        setWordCount(a.length);
    }
    return(
        <div>
        <center>
            <form>
                <label id="c" style={{justifyContent :'center'}}><h2>Enter the Content</h2></label>
                <br/>
                <br/>
                <textarea ref={text} id="boxx"></textarea>
                <br/>
                <button  onClick={WordsCount}>Count Words</button>
                </form>
            <br/>   
            <h3 id="count" >Word Count : {wordCount} </h3>
        </center>
        </div>
    )
}
export default Counter;