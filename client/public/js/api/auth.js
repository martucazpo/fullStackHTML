import { authURL } from "../config.js"

export const testAuth = async () => await fetch(authURL + "/test").then(response => response.json()).then(data => console.log(data))

export const testCreateUser = async () =>{
    let testUser = {
        firstName: "Test",
        lastName: "Tester",
        email: "testmail2@mail.com",
        password1: "password",
        password2: "password"
    }
     const call = await fetch(authURL + "/test", {
        method: 'POST',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(testUser) 
      })
      const vari = await call.json()
      return vari
}