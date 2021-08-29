import axios from 'axios'

const url = "http://107.21.15.88:4000/api"
// const url = "https://aarogyahub.com/web"
// const url = "http://localhost:4000/web"
// const url = "https://dc84f2d7041d.ngrok.io/web"
export default axios.create({
    baseURL:url
})