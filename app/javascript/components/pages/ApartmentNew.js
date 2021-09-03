import React,{Component} from "react"
import { Redirect } from 'react-router-dom'
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button
  } from 'reactstrap'
class ApartmentNew extends Component {
    constructor(props){
        super(props)
        this.state = {
            form:{
            street:"",
            city:"",
            state:"",
            description:"",
            manager:"",
            email:"",
            price:"",
            bedrooms:"",
            bathrooms:""
            },
            // success:false
        }
    }
    handleChange = (e) => {
        // destructuring form out of state
        let { form } = this.state
        form[e.target.name] = e.target.value
        // setting state to the updated form
        this.setState({ form: form })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createNewApartment(this.state.form)
        // this.setState({success: true})
    }
    render() {
        return(
            <>
            <Form>
                <FormGroup>
                <br/>
                    <Label id = "NewTable">Name</Label>
                    <Input type="text"name="street"/>           
                </FormGroup>
                <FormGroup>
                <br/>
                    <Label id = "NewTable">City</Label>
                        <Input type="text"name="city"/>               
                </FormGroup>
                <FormGroup>
                <br/>
                    <Label id = "NewTable">State</Label>
                        <Input type="text"name="state"/>
                
                </FormGroup>
                <FormGroup>
                <br/>
                    <Label id = "NewTable">Description</Label>
                        <Input type="text"name="description"/>
                
                </FormGroup>
                <FormGroup>
                <br/>
                    <Label id = "NewTable">Manager</Label>
                        <Input type="text"name="manager"/>
                
                </FormGroup>
                <FormGroup>
                <br/>
                    <Label id = "NewTable">Email</Label>
                        <Input type="text"name="email"/>
                         
                </FormGroup>
                <FormGroup>
                <br/>
                    <Label id = "NewTable">Price</Label>
                        <Input type="text"name="price"/>
                
                </FormGroup>
                <FormGroup>
                <br/>
                    <Label id = "NewTable">Bedrooms</Label>
                        <Input type="integer"name="bedrooms"/>
                   
                </FormGroup>
                   
                <FormGroup>
                    <Label id = "NewTable">Bathrooms</Label>  
                        <Input type="integer"name="bathrooms"/>
                </FormGroup>
            
            </Form>
            <Button color="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
            {/* { this.state.success && <Redirect to="/apartmentindex" />} */}
            </>


        )
    }
    
}

export default ApartmentNew