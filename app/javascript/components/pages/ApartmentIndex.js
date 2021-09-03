import React,{Component} from "react"
import { Card, CardTitle, Col, } from 'reactstrap'

class ApartmentIndex extends Component {

     render() {
         console.log(this.props)
         return (
            <>
            {this.props.apartments.map(apartment => {
                
                return (
                    <Col sm="6" key={apartment.id}>
                        
                        <div>
                            <h1>This is the Apartment</h1>
                                <br />
                                    <Card body>
                                    <CardTitle>{apartment.description}</CardTitle>                                   
                                    {apartment.street}
                                    {apartment.city}    
                                    {apartment.state}   
                                    {apartment.manager}
                                    {apartment.email}
                                    {apartment.price}
                                    {apartment.bedrooms}
                                    {apartment.bathrooms}
                                    <button onClick={() => window.location = `/apartmentshow/${apartment.id}`}>View this apartment</button>            
                                </Card>
                        </div>)
                    </Col>)
            })}
            </>
        )
    }
}


export default ApartmentIndex

// {JSON.stringify(apartment)}