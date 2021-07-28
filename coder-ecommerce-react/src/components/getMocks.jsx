import product1 from './product-1.jpg'
import product2 from './product-2.jpg'
import product3 from './product-3.jpg'
import product4 from './product-4.jpg'


const items=[
        {id: '1', address: '/item/1', title: 'Planta 1', description: 'Planta interior deco', price: 800, category: 'plantas', pictureUrl: product1},
        {id: '2', address: '/item/2', title: 'Planta 2', description: 'Maceta Gris Topo', price: 950, category: 'plantas', pictureUrl: product2},
        {id: '3', address: '/item/3', title: 'Maceta 1', description: 'Maceta Beige', price: 1000, category: 'macetas', pictureUrl: product3},
        {id: '4', address: '/item/4', title: 'Maceta 2', description: 'Planta interior deco', price: 700, category: 'macetas', pictureUrl: product4}
    ];


const task = new Promise((res)=>{
    res(items)
}, 2000)

export const getMocks=()=>{
    return(
        task
    )
}