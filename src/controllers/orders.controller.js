import Order from '../dao/classes/order.dao.js'
import Business from '../dao/classes/business.dao.js'
import User from '../dao/classes/user.dao.js'

const usersService = new User()
const ordersService = new Order()
const businessService = new Business()

export const getOrders = async (req, res) => {
    let result = await ordersService.getOrders()
    res.send({ status: "success", result })
}

export const getOrderById = async (req, res) => {
    const { oid } = req.params
    let order = await ordersService.getOrderById(oid)
    res.send({ status: "success", result: order })
}

export const createOrder = async (req, res) => {
    const { user, business, products } = req.body;
    
    const resultUser = await usersService.getUserById(user);
    const resultBusiness = await businessService.getBusinessById(business);
    
    // Aquí debes buscar los productos por su ID, no por nombre ni precio
    let actualOrders = resultBusiness.products.filter(product => products.includes(product._id.toString()));  // Filtra usando el ID
    
    let sum = actualOrders.reduce((acc, prev) => {
        acc += prev.price;  // Asumimos que cada producto tiene un campo `price`
        return acc;
    }, 0);
    
    let orderNumber = Date.now() + Math.floor(Math.random() * 10000 + 1);
    
    let order = {
        number: orderNumber,
        business,
        user,
        products: actualOrders.map(product => product._id),  // Guardamos los IDs de los productos
        totalPrice: sum,
        status: "pending"
    };

    let orderResult = await ordersService.createOrder(order);
    await usersService.updateUser(user, resultUser);
    
    res.send({ status: "success", orderResult });
};


export const resolveOrder = async (req, res) => {
    const { resolve } = req.query
    let order = await ordersService.getOrderById(req.params.oid)
    order.status = resolve
    await ordersService.resolveOrder(order._id, order)
    res.send({ status: "success", result: "Order resolved" })

}