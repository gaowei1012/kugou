import axios from 'axios'

const $http = axios.create({
    timeout: 5000
});

$http.initerceptors.request.use(
    config => {
        config.headers = {
            'Content-Type':'application/x-www-form-urlencoded'
        }
    }
)

export default $http