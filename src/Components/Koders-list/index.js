
function kodersList (props){
    
    return(

        props.listHandler.map(koder => {
            let {name, generation, bootcamp} = koder
            return(
            <div>
                <p>Nombre: {name} </p>
                <p>Generacion: {generation}</p>
                <p>Bootcamp: {bootcamp}</p>
            </div>
            )
        })
    )

}

export default kodersList