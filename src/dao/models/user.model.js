import mongoose from "mongoose";

const collection = "Users";

const schema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true, // Asegura que no haya duplicados
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /\S+@\S+\.\S+/,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["admin", "user", "guest"],
            default: "user",
        },
        orders: [
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "Orders",
            },
        ],
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

// Índice para optimizar búsquedas por email y username
schema.index({ email: 1 });
schema.index({ username: 1 });


// Método estático para buscar por email
schema.statics.findByEmail = function (email) {
    return this.findOne({ email });
};

// Virtual para contar órdenes
schema.virtual("orderCount").get(function () {
    return this.orders.length;
});

// Modelo
const UserModel = mongoose.model(collection, schema);

export default UserModel;
