
import '../styles/main.css'

export default function Main ({count={}, setcount={}}){




function inccount(){
    setcount(prev => prev - 1)
}

function deccount (){
    setcount(prev => prev + 1)
}
    return(


        <>
        <div id="comp1">
            
<button className="btn btn-light  margin" onClick={inccount}>-</button>
<h1 id='count'>{count}</h1>
<button className="btn  btn-light margin" onClick={deccount}>+</button>

        </div>
        
        </>
    )
}