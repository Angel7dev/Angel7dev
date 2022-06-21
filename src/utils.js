export const fetcher = async(urlApi) => {
    try {
        const resp = await fetch(urlApi, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const apiData = await resp.json()
        return apiData.success
    } catch (error) {
        console.log(error)
    }
}