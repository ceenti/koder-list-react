
function kodersList (props){
    
    return(
        
        props.listHandler.map(koder => {
            let {name, generation, bootcamp} = koder
            return(
            
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{name}</td>
                            <td>{generation}</td>
                            <td>{bootcamp}</td>
                        </tr>
                    </tbody>
            // <div>
            //     <p>Nombre: {name} </p>
            //     <p>Generacion: {generation}</p>
            //     <p>Bootcamp: {bootcamp}</p>
            // </div>
            )
        })
    )

}

export default kodersList