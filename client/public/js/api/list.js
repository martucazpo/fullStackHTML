import { listURL } from "../config.js"

export const testList = async () => await fetch(listURL).then(response => response.json()).then(data => console.log(data))

export const testCreateTask = async () =>{
    let testCreateTask = {
        task: "Test",
        id: "632e77f283b840a6b99ceead"
    }
     const call = await fetch(listURL + "/test", {
        method: 'POST',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(testCreateTask) 
      })
      const vari = await call.json()
      console.log(vari)
      return vari
}