import React,{Component} from "react"

class ApartmentShow extends Component {
    render() {   
        console.log(this.props )   
        return(
        <>
            {this.props.apartment && (
            <h1>you have picked {this.props.apartment.id} </h1>
            )}
        </>
        )
        
    }
}

export default ApartmentShow