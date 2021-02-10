import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import KodersList from './Components/Koders-list/index'
import Form from './Components/Form/index'
import kodersList from './Components/Koders-list/index';
// import Search from './Components/Search/index'

class App extends Component{
  constructor(){
    super()
    this.state = {
      kodersList: [
        {
          name: "Juan Pablo",
          generation: "10",
          bootcamp: "Javascript"
        },
        {
          name: "Cinthia San",
          generation: "10",
          bootcamp: "Javascript"
        }
      ],
      filteredList: [

      ]
    
    }
    this.onclickHandler = this.onclickHandler.bind(this)
    this.onHandlerFinder = this.onHandlerFinder.bind(this)

  }

  onclickHandler(newKoder){
    this.setState({kodersList : [...this.state.kodersList, newKoder]})
  }

 
  onHandlerFinder(event){
    let letterToFind = event.target.value
      let filteredKoderList = this.state.kodersList.filter(koder => {
          return  koder.name.includes(letterToFind)
      })
      this.setState({filteredList: filteredKoderList})
  } 

  render(){
    let koders = this.state.filteredList.length ? this.state.filteredList : this.state.kodersList
    return(
      <>
        <h1>Bienvenido a la lista de koders</h1>
        <KodersList 
          listHandler = {koders}
        />

        <Form
          newKoderData = {this.onclickHandler}
        />

        <div>
           <input type="text" placeholder="Ingresa el nombre" onChange={this.onHandlerFinder}/>
        </div>

      </>
      )
  }
}

export default App;
