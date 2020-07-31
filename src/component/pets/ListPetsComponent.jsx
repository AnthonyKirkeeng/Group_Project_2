import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListPetsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pets: [],
            message: null
        }
        this.deletePets = this.deletePets.bind(this);
        this.editPets = this.editPets.bind(this);
        this.addPets = this.addPets.bind(this);
        this.reloadPetsList = this.reloadPetsList.bind(this);
    }

    componentDidMount() {
        this.reloadPetsList();
    }

    reloadPetsList() {
        ApiService.fetchPets()
            .then((res) => {
                this.setState({pets: res.data.result})
            });
    }

    deletePets(petsId) {
        ApiService.deletePets(petsId)
           .then(res => {
               this.setState({message : 'Pet deleted successfully.'});
               this.setState({pets: this.state.users.filter(pets => pets.id !== petsId)});
           })

    }

    editPets(id) {
        window.localStorage.setItem("petsId", id);
        this.props.history.push('/edit-pets');
    }

    addPets() {
        window.localStorage.removeItem("petsId");
        this.props.history.push('/add-pets');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Pets Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addpet()}> Add Pet</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>Name</th>
                            <th>Symptoms</th>
                            <th>Intensity</th>
                    
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.pets.map(
                        pets =>
                                    <tr key={pets.id}>
                                        <td>{pets.Name}</td>
                                        <td>{pets.Symptoms}</td>
                                        <td>{pets.Intensity}</td>
                                        
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deletePets(pets.id)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editPets(pets.id)} style={{marginLeft: '20px'}}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListPetsComponent;