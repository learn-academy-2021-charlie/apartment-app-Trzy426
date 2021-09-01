import React,{Component} from "react"

class ApartmentIndex extends Component {
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
            console.log("index errors: ", errors)
        })
    }
     render() {
         console.log("reached render")
         console.log(this.state.apartments)
        return (
            <>
            {this.state.apartments.map(apartment => {
                console.log(apartment.street)
                return <h3>{JSON.stringify(apartment)}</h3>
            })}
            </>
        )
    }
}

export default ApartmentIndex

// {JSON.stringify(apartment)}