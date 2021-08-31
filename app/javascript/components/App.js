import React,{Component} from "react"
import PropTypes from "prop-types"
import Header from "./components/Header"

class App extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <>
        <Header {...this.props}/>
      </>
    )
  }
}

export default App
