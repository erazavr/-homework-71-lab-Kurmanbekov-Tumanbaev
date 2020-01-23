import axios from 'axios'

const axiosDishes = axios.create({
    baseURL: 'https://homeworks-ernur.firebaseio.com/',
});
export default axiosDishes