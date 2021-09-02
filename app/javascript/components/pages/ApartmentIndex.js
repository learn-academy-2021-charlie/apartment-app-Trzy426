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
            console.log("INDEX errors: ", errors)
        })
    }
     render() {
         return (
            <>
            {this.state.apartments.map(apartment => {
                console.log(apartment.street)
                return (
                <div>
                    <h1>This is the Description</h1>
                    <h2>{apartment.description}</h2>
                    <h1>This is the Location</h1>
                    {apartment.street}
                    {apartment.city}    
                    {apartment.state}   
                    {apartment.manager}
                    {apartment.email}
                    {apartment.price}
                    {apartment.bedrooms}
                    {apartment.bathrooms}
                    <button onClick={() => window.location = `/apartmentshow/${apartment.id}`}>View this apartment</button>            
                </div>)
            })}
            </>
        )
    }
}


export default ApartmentIndex

// {JSON.stringify(apartment)}