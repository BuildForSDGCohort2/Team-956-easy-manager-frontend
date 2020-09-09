import axios from "axios";

export default {
    state: {
        token: sessionStorage.getItem('token') || '',
        user:{
            email: "", 
            firstName: "", 
            lastName: "", 
            otherName: "", 
            companyId: "", 
            branchId: "", 
            title: "", 
            gender: "", 
            dob: "", 
            conatact: "", 
            address: "", 
            role: "", 
            department: "", 
            maritalStatus: "",  
            noOfChildren: "", 
            stateOfOrigin: "", 
            localGovernArea: "", 
            primaryContactName: "", 
            relationship: "", 
            primaryContactNumber: "",
            primaryContactEmail: "",
            primaryContactAddress: "",
            employmentDate: "", 
            status: "", 
            username: ""
        },
        users:[]
    },
    mutations: {
        auth_request(state){
            state.status = 'loading'
        },
        auth_sucess(state, users){
            state.status = 'success'
            state.users = users
        },
        auth_register_sucess(state,  user){
            state.status = 'success'
            state.user = user
        },
        auth_error(state){
            state.status = 'error'
            state.error = 'Invalid Login Credential'
        },
        logout(state){
            state.status = ''
            state.token = ''
        }
    },
    actions: {
        create_user({commit}, user){
            return new Promise((resolve, reject) => {
            commit('auth_request')
            axios({url:'/api/v1/create_user', data: user, method: 'post'})
                .then(resp => {
                    const user = resp.data
                    //sessionStorage.setItem('token', token)
                    //axios.defaults.headers.common['Authorization'] = token
                    commit('auth_sucess', user)
                    resolve( resp )
                })
                .catch(err => {
                    commit('auth_error')
                    reject(err)
                })
            })
        },

        get_user({commit}){
            return new Promise((resolve, reject) => {
            commit('auth_request')
                axios.get(`http://localhost:3000/api/v1/get_users`,{
                    headers:{
                        'Authorization': 'Bearer',
                        'content-type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                .then(resp => {
                    const users = resp.data
                    commit('auth_sucess', users)
                    resolve( resp )
                })
                .catch(err => {
                    commit('auth_error')
                    reject(err)
                })
            })
        },

        login({commit}, user){
            return new Promise((resolve, reject) => {
            commit('auth_request')
            axios({url:'/api/v1/login', data: user, method: 'post'})
                .then(resp => {
                    const token = resp.data.access_token
                    const user = resp.data
                    sessionStorage.setItem('token', token)
                    axios.defaults.headers.common['Authorization'] = token
                    commit('auth_sucess', token, user)
                    resolve( resp )
                })
                .catch(err => {
                    commit('auth_error')
                    sessionStorage.removeItem('token')
                    reject(err)
                })
            })
        },
    },

    getters:{
         
    },
};
