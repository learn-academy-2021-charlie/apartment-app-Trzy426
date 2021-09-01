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
  constructor(props) {
    super(props)
  }
  render () {
    return (
 <Router>
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/apartmentindex" component={ ApartmentIndex } /> 
    <Route path="/apartmentshow/:id" component={ ApartmentShow } />
    <Route path="/apartmentnew" component={ ApartmentNew } />
    <Route path="/apartmentedit/:id" component={ ApartmentEdit } />
     {/* <Route component={ NotFound }/>  */}
  </Switch>
</Router> 
  
    )
  }
}

export default App

