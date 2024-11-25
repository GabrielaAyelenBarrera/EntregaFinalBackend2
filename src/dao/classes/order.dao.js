import ordersModel from "../models/order.model.js";

class Order {
    async getOrders() {
        return await ordersModel.find().populate('user business');
    }

    async getOrderById(id) {
        return await ordersModel.findById(id).populate('user business');
    }

    async createOrder(order) {
        return await ordersModel.create(order);
    }

    async resolveOrder(id, status) {
        return await ordersModel.updateOne({ _id: id }, { $set: { status } });
    }
}

export default Order;
