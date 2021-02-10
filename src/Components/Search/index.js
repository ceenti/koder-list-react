import React, {Component} from 'react'

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            filteredList: []
        }
        this.onHandlerFinder = this.onHandlerFinder.bind(this)
    }

    onHandlerFinder(event){
        let letterToFind = event.target.value.toLowerCase()
        if(letterToFind){
          let filteredKoderList = this.state.kodersList.filter(koder => {
           
              return  koder.name.toLowerCase().includes(letterToFind)
          })
          this.setState({kodersList: filteredKoderList})
        }else{
          
        } 
    } 

    render(){
        return(
            <div>
                <input type="text" placeholder="Ingresa el nombre" onChange={
                    () => {
                        this.props.findKoder(this.state.filteredList)
                    }
                }/>
                {/* <button type="button">Search</button> */}
            </div>
        )
    }
}

export default Search;