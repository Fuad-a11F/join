import axios from  'axios'

export function login(data, setUser) {
    axios.post('http://localhost:3001/api/login', {...data})
    .then(data =>  {
        localStorage.setItem('token', data.data.token)
        localStorage.setItem('email', data.data.result[0].email)
        localStorage.setItem('password', data.data.result[0].password)
        setUser(data.data.result[0])
    })
    
}
