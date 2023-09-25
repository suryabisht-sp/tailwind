import React from 'react'

const registerApi = async (data) => {

  const res = await fetch(`https://ecombackend.softprodigyphp.in/users/register`, {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      name: data.user,
      email: data.email,
      phone: data.phone,
      password: data.password
    })
  })
  if (res.status >=200 || res.status <=500) {
   return await res.json()
  }
  else {
    return res.message
 }
 
}

export default registerApi