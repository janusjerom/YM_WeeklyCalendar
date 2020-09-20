import axios from 'axios';

export default class EventService {
    
    getEvents() {
        return axios.get('./Component/Data/events.json')
            .then(res => res.data.data);
    }
}