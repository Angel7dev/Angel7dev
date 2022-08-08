

const projects = "https://ragandroll.herokuapp.com/ProjectsView/"




export const Get = async () => {
    try {
      const resApi = await fetch("https://ragandroll.herokuapp.com/ProjectsView/", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
  
      const dataApi = resApi.json()
      return dataApi
  
  
    } catch (error) {
      console.log("network error")
      return { data: error }
    }
  }

export const Post = async (body) => {
    const bodyData = JSON.stringify({body})//
    try {
      const resApi = await fetch("", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: bodyData
      })
  
      const dataApi = resApi.json()
      return dataApi
  
  
    } catch (error) {
      console.log("network error")
      return { data: error }
    }
  }