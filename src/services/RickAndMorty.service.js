import { API_RM } from './../constants/Api.constants';

class RickAndMortyService {

    async getAllCharacters() {
        //const response = await fetch(API_RM.CHARACTERS());
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        
        };

        const response = await fetch(API_RM.CHARACTERS(), requestOptions);
        return response.json();
    }


async getCharacterById(id) {
    const response = await fetch(API_RM.CHARACTER_BY_ID(id));
    //Interceptor
    return response.json();
}

}

export default new RickAndMortyService();