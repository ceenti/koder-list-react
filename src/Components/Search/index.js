function searchInput (props) {
    return (
        <div>
            <input type="text" placeholder="Ingresa el nombre" onChange={ props.filterHandler } />
        </div>
    )
}

export default searchInput