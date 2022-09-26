import { authURL } from "../config.js"

export const authUser = async () => await fetch(authURL + `/locateuser/${data}`).then(response => response.json()).then(data => console.log(data))

export const createUser = async (data) =>{
     const call = await fetch(authURL + "/", {
        method: 'POST',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data) 
      })
      const vari = await call.json()
      return vari
}
export const loginUser = async (data) =>{
     const call = await fetch(authURL + "/loginuser", {
        method: 'POST',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data) 
      })
      const vari = await call.json()
      return vari
}
export const logoutUser = async (data) =>{
     const call = await fetch(authURL + "/logoutuser", {
        method: 'POST',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data) 
      })
      const vari = await call.json()
      return vari
}