import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditPetsComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            Name: '',
            Symptoms: '',
            Intensity: '',
        }
        
        this.savePets = this.savePets.bind(this);
        this.loadPets = this.loadPets.bind(this);
    }

    componentDidMount() {
        this.loadPets();
    }

    loadPets() {
        ApiService.fetchPetsById(window.localStorage.getItem("petsId"))
            .then((res) => {
                let pets = res.data.result;
                this.setState({
                id: pets.id,
                Name: pets.Name,
                Symptoms: pets.Symptoms,
                Intensity: pets.Intensity,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let pets = {id: this.state.id, Name: this.state.Name, Symptoms: this.state.Symptoms, Intensity: this.state.Intensity};
        ApiService.editPets(pets)
            .then(res => {
                this.setState({message : 'Pet added successfully.'});
                this.props.history.push('/pets');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit User</h2>
                <form>

                    <div className="form-group">
                        <label>Pets Name:</label>
                        <input type="text" placeholder="petsname" name="petsname" className="form-control" readonly="true" defaultValue={this.state.petsname}/>
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

export default EditPetsComponent;