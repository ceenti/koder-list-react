import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import KodersList from './Components/Koders-list/index'
import Form from './Components/Form/index'
import SearchInput from './Components/Search/index'

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
      filteredList: []
    
    }
    this.onclickHandler = this.onclickHandler.bind(this)
    this.onHandlerFinder = this.onHandlerFinder.bind(this)

  }

  onclickHandler(newKoder){
    this.setState({kodersList : [...this.state.kodersList, {...newKoder}]})
  }

 
  onHandlerFinder(event){
    let letterToFind = event.target.value.toLowerCase()
      let filteredKoderList = this.state.kodersList.filter(koder => {
          return  koder.name.toLowerCase().includes(letterToFind)
      })
      this.setState({filteredList: filteredKoderList})
  } 

  render(){
    return(
    
      <div className="container-fluid">
        <div className="row">
          <div className="container">
            <div className="row d-flex">
              <div className="col-12 col-md-6 d-flex align-items-center bienvenida my-3 p-3">
                <h1>Bienvenido a la Lista de Koders</h1>
              </div>
              <div className="col-12 col-md-6 d-flex align-items-center">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Generation</th>
                        <th scope="col">Type of Bootcamp</th>
                      </tr>
                    </thead>
                    <KodersList
                      listHandler={
                        this.state.filteredList.length 
                        ? this.state.filteredList 
                        : this.state.kodersList
                      }
                    />
                  </table>
                </div>
            </div>
            <div className="row">
                  <div className="col-12 col-md-6 d-flex align-items-center">
                    <h2>Registra un nuevo Koder</h2>
                    <Form
                      newKoderData={this.onclickHandler}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <h2>Busca un Koder</h2>
                    <SearchInput
                      filterHandler = {this.onHandlerFinder}
                    />
                  </div>
              </div>
          </div>
        </div>
      </div>
        
      )
  }
}

export default App;
