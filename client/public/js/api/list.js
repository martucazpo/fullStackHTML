import { listURL } from "../config.js"

export const getList = async (_id) =>{ 
  const list = await fetch(listURL + `/retrieve/${_id}`)
  const madeCall = await list.json()
  return madeCall
}

export const createTask = async (data) =>{
     const call = await fetch(listURL, {
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
      console.log(vari)
      return vari
}