// Файл с проблемами форматирования JavaScript
const API_URL = 'https://api.example.com'
const API_KEY = 'your-api-key'

export async function fetchData(endpoint,params) {
  try {
    const url = new URL(`${API_URL}/${endpoint}`)
    
    if(params) {
      Object.keys(params).forEach(key => {
        url.searchParams.append(key,params[key])
      })
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    })
    
    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    
    const data = await response.json()
    return data
  } catch(error) {
    console.error('Error fetching data:',error)
    throw error
  }
}

export const postData = async(endpoint,data) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify(data)
    })
    
    if(!response.ok) {throw new Error(`HTTP error! Status: ${response.status}`)}
    
    return await response.json()
  } catch(error) {
    console.error('Error posting data:',error)
    throw error
  }
}
