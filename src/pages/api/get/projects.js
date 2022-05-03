
const backend_api = process.env.BACKEND_DJANGO_API

export default async function (req, res) {

    
    if (req.method === 'GET') {
        const resp = await fetch(`${backend_api}/ProjectsView/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json()
        res.status(200).json({ success: data })
        
    } else {
        console.log("401")
        res.status(400).json({ error: 'Method no allowed' })
    }
}