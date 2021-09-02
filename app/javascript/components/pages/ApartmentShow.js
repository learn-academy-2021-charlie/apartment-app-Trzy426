import React,{Component} from "react"

class ApartmentShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            apartment: {}
        }
    }
    componentDidMount(){
        this.getApartment();
    }
    getApartment = ()=>{
        fetch(`/apartments/${this.props.match.params.id}`)
        .then(response => {
            return response.json()
        })
        .then(apartment =>{
            console.log(apartment)
            this.setState({apartment: apartment})
            
            // set state of the empty state array with apartment index
        })
        .catch(errors => {
            console.log("SHOW errors: ", errors)
        })
    }
    render() {
        
        return(
            <h1>you have picked {this.state.apartment.street}</h1>
        )
    }
}

export default ApartmentShow