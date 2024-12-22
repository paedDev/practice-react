
import styles from "./CounterProgram.module.css"
import React , {useState} from "react"

function CounterProgram () {

    const [count, setCount] = useState(0);
    const [title, setTitle] = useState("Counter Program")

    const increment = () => {
        setCount(count + 1)
        setTitle("Incrementing")
    }
    const reset = () => {
        setCount(0)
        setTitle("Counter Program")
    }
 
    const decrement = () => {
        setCount(count - 1)
        setTitle("Decrementing")
    }
 
 
    return (
        <>
        <body>
            
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <h2 className={`${styles.displayCount} ${count === 0 ? styles.zero : '' } ${count > 0 ? styles.positive : styles.negative}`}>{count}</h2>
                <button onClick={increment} className={styles.buttons} >
                    Increment
                </button>
                <button onClick={reset} className={styles.buttons}>
                    Reset
                </button>
                <button onClick={decrement} className={styles.buttons}>
                    Decrement
                </button>
            </div>
        </body>
        
        </>
    ) 
}


export default CounterProgram;