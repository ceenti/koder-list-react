import React, {Component} from 'react'

class Form extends Component{
    constructor(props){
      super(props)
      this.state= {
          newKoder: {}
      }
      this.createKoderHandler = this.createKoderHandler.bind(this)

    }
    createKoderHandler(event){
        let property = event.target.name
        let value = event.target.value
        let currentKoder = this.state.newKoder
        currentKoder[property] = value
        this.setState({newKoder: currentKoder})
        console.log(currentKoder)
        console.log(this.state.newKoder)
    }

    render(){
        return(
            <>
                <h1>Registra un Koder: </h1>
                <form>
                    <div>
                        <label>Nombre:</label><input name="name" type="text" onChange= {this.createKoderHandler} />
                    </div>
                    <br/>
                    <div>
                        <label>Generacion:</label><input name="generation" type="text" onChange= {this.createKoderHandler}/>
                    </div>
                    <br/>
                    <div>
                        <label>Bootcamp:</label><input name="bootcamp" type="text" onChange= {this.createKoderHandler}/>
                    </div>
                    <br/>
                    <button type="button" onClick= {
                        () => {
                            this.props.newKoderData(this.state.newKoder)
                        }
                    } >Guardar Koder</button>
                </form>
            </>
        )
    }
}

export default Form;