import {useState} from "react";

const Count = () => {
    const [count, setCount] = useState(0)

    function add(){
        setCount(count + 1)
    }

    function substract(){
        if(count > 0){
            setCount(count - 1)
        }
    }

    function reset(){
        setCount(0)
    }

    return (
        <div>
            <h6 className="pb-2">Cantidad: {count}</h6>
            <div className="pb-3">
                <button className="btn btn-dark btnCount" onClick={substract}> - </button>
                <button className="btn btn-secondary btnCount" onClick={reset}> Reset </button>
                <button className="btn btn-dark btnCount" onClick={add}> + </button>
            </div>
        </div>
    )
}

export default Count;