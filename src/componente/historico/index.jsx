
const Historico = ({historia}) =>{
    return(
        <div>
            <h3>Historic</h3>
            <ul>
                {history.map ((conversion , index) =>(
                    <li key ={index}>
                        {conversion.from} -> {conversion.to}: {conversion.rate}

                    </li>
                )
            )}
            </ul>
        </div>      
    )
}

export default Historico