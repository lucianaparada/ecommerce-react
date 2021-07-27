import product1 from './product-1.jpg'

const item = {
    id: '1', 
    title: 'Planta 1', 
    description: 'Planta interior deco', price: 800, pictureUrl: product1
}

const task = new Promise((res)=>{
    res(item)
}, 2000)

export const getMocks=()=>{
    return(
        task
    )
}