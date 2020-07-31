import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddPetsComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            id: '',
            Name: '',
            Symptoms: '',
            Intensity: '',
            message: null
        }
        this.savePets = this.savePets.bind(this);
    }

    savePets = (e) => {
        e.preventDefault();
        let pets = {id: this.state.id, Name: this.state.Name, Symptoms: this.state.Symptoms, Intensity: this.state.intensity,};
        ApiService.addPets(pets)
            .then(res => {
                this.setState({message : 'Pet added successfully.'});
                this.props.history.push('/pets');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add Pets</h2>
                <form>
                <div className="form-group">
                    <label>Pets Name:</label>
                    <input type="text" placeholder="petsname" name="petsname" className="form-control" value={this.state.petsname} onChange={this.onChange}/>
                </div>

                
                <div className="form-group">
                    <label>Symptoms:</label>
                    <input placeholder="Symptoms" name="Symptoms" className="form-control" value={this.state.Symptoms} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Intensity:</label>
                    <input placeholder="Intensity" name="Intensity" className="form-control" value={this.state.Intensity} onChange={this.onChange}/>
                </div>

                               

                <button className="btn btn-success" onClick={this.savePets}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddPetsComponent;