import businessModel from "../models/business.model.js";

class Business {
    async getBusiness() {
        return await businessModel.find();
    }

    async getBusinessById(id) {
        return await businessModel.findById(id);
    }

    async saveBusiness(business) {
        return await businessModel.create(business);
    }

    async updateBusiness(id, business) {
        return await businessModel.updateOne({ _id: id }, { $set: business });
    }
}

export default Business;
