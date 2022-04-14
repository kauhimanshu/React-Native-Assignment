import axios from "axios";
export default axios.create(
    {
        baseURL: 'https://test-1c1b2-default-rtdb.firebaseio.com/'
    }
)