import axios from 'axios'

export default axios.create({
    baseUrl: 'http://209.188.21.177:8080/api/prices'
})