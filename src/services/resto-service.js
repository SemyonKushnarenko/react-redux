export default class RestoService {
    __apibase = 'http://localhost:3000'

    async getResource(url) {
        const res = await fetch(`${this.__apibase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return res.json()
    }
    
    async getMenuItems() {
        return await this.getResource('/menu') 
    }
}