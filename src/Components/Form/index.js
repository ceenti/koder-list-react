import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Formi extends Component{
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
            
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Ingresa el nombre</Label>
                    <Input type="email" name="name"  placeholder="nombre" onChange= {this.createKoderHandler} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">¿Qué generación?</Label>
                    <Input type="email" name="generation"  placeholder="Generation" onChange= {this.createKoderHandler} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Tipo de BootCamp</Label>
                    <Input type="email" name="bootcamp"  placeholder="BootCamp" onChange= {this.createKoderHandler} />
                </FormGroup>
                <Button color="success" type="button" onClick= {
                        () => {
                            this.props.newKoderData(this.state.newKoder)
                        }
                    } >Guardar Koder</Button>
            </Form>
            
            // <>
            //     <h1>Registra un Koder: </h1>
            //     <form>
            //         <div>
            //             <label>Nombre:</label><input name="name" type="text" onChange= {this.createKoderHandler} />
            //         </div>
            //         <br/>
            //         <div>
            //             <label>Generacion:</label><input name="generation" type="text" onChange= {this.createKoderHandler}/>
            //         </div>
            //         <br/>
            //         <div>
            //             <label>Bootcamp:</label><input name="bootcamp" type="text" onChange= {this.createKoderHandler}/>
            //         </div>
            //         <br/>
            //         <button type="button" onClick= {
            //             () => {
            //                 this.props.newKoderData(this.state.newKoder)
            //             }
            //         } >Guardar Koder</button>
            //     </form>
            // </>
        )
    }
}

export default Formi;