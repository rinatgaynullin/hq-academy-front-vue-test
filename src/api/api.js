import teachers from './teachers.json'
import products from './products.json'

export const httpApi = {
    getProducts: () => {
        return Promise.resolve(products)
    },
    getTeachers: () => {
        return Promise.resolve(teachers)
    }
}
