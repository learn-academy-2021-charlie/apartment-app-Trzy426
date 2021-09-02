import React,{Component} from "react"
import PropTypes from "prop-types"
import Header from "./components/Header"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        apartments: []
    }
}
componentDidMount(){
    this.apartmentIndex()
}
apartmentIndex = ()=>{
    fetch("http://localhost:3000/apartments")
    .then(response => {
        return response.json()
    })
    .then(apartmentArr =>{
        this.setState({apartments:apartmentArr})
        // set state of the empty state array with apartment index
    })
    .catch(errors => {
        console.log("INDEX errors: ", errors)
    })
  }
  render () {
    return (
 <Router>
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/apartmentindex" render={ (props) => <ApartmentIndex apartments={this.state.apartments}/>}/> 
    <Route path="/apartmentshow/:id" render={ (props) => {
    let id = props.match.params.id
    let apartment = this.state.apartments.find(apartment => apartment.id === +id)
    return <ApartmentShow apartment={ apartment } /> }} />
    <Route path="/apartmentnew" component={ ApartmentNew } />
    <Route path="/apartmentedit/:id" component={ ApartmentEdit } />
     {/* <Route component={ NotFound }/>  */}
  </Switch>
</Router> 
  
    )
  }
}

export default App

