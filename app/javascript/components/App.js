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
  createNewApartment = (newapartment) => {
      console.log(this.props.logged_in)
      console.log(newapartment)
      fetch("http://localhost:3000/apartments", {
      body: JSON.stringify(newapartment),
      headers: {'Content-Type': 'application/json'},
      method: "POST"
    })
    .then(response => {
      console.log("response check")
      if (response.status === 422){
        alert("Please try again")
      }
      return response.json
    
      // window.location = "/apartmentindex"
    })
    .then(payload => {
      console.log("payload")
      return this.apartmentIndex()
    })
    .catch(err => {
      console.log("createnewerror: ", err)
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
    <Route path="/apartmentnew" 
    render={ (props) => <ApartmentNew createNewApartment={this.createNewApartment} />}
    />
    <Route path="/apartmentedit/:id" component={ ApartmentEdit } />
     {/* <Route component={ NotFound }/>  */}
  </Switch>
</Router> 
  
    )
  }
}

export default App

