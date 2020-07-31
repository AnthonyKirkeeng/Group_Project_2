import axios from 'axios';

const PETS_API_BASE_URL = 'http://localhost:8080/users';

class ApiService {

    fetchPets() {
        return axios.get(PETS_API_BASE_URL);
    }

    //fetchPetsById(petsId) {
      //  return axios.get(PETS_API_BASE_URL + '/' + PetsId);
    //}

    deleteUser(PetsId) {
        return axios.delete(PETS_API_BASE_URL + '/' + PetsId);
    }

   // addPets(Pets) {
     //   return axios.post(""+PETS_API_BASE_URL, pets);
    //}

    editPets(pets) {
        return axios.put(PETS_API_BASE_URL + '/' + pets.id, pets);
    }

}

export default new ApiService();