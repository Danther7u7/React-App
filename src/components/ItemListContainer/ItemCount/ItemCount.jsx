import {useState} from "react";

const Count = ({stock, onAdd}) => {
    const [count, setCount] = useState(0)

    function add(){
        if(count < stock)
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
            <h6 className="mb-3">Stock: {stock}</h6>
            <h6 className="mb-3">Cantidad: {count}</h6>
            <div className="mb-3">
                <button className="btn btn-dark btnCount" onClick={substract}> - </button>
                <button className="btn btn-secondary btnCount" onClick={reset}> Reset </button>
                <button className="btn btn-dark btnCount" onClick={add}> + </button>
            </div>
            <a className="btn btn-primary" onClick={() => onAdd(count)}>Agregar al Carro</a>
        </div>
    )
}

export default Count;