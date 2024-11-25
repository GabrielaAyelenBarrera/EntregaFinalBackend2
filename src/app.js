import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import usersRouter from './routes/users.router.js';
import businessRouter from './routes/business.router.js';
import ordersRouter from './routes/orders.router.js';
import AuthMiddleware from './autenticacion/auth.middleware.js';
import authRouter from './routes/authRouter.js'; // Importamos las rutas de autenticación
//import nodemailer from 'nodemailer';
import twilio from 'twilio';
import ticketRouter from './routes/tickets.router.js';


const app = express();

// Usamos las variables de entorno de Twilio
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_SMS_NUMBER = process.env.TWILIO_SMS_NUMBER;

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
app.get('/sms', async (req, res) => {
  let result = await client.messages.create({
    body: 'Esto es un mensaje SMS',
    from: TWILIO_SMS_NUMBER,
    to: 'TuNumeroDePrueba', // Recuerda cambiar este valor también por uno adecuado.
  });
  res.send({ status: "success", result: "Message sent" });
});

const PORT = process.env.PORT;
const mongoURI = process.env.MONGO_URI;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.use('/api/users', AuthMiddleware, usersRouter);
app.use('/api/business', businessRouter);
app.use('/api/orders', ordersRouter);
app.use('/auth', authRouter);
app.use('/api/tickets', ticketRouter);
/*
const transport = nodemailer.createTransport({
  service:"gmail",
  port:578,
  auth:{
    user:"tienda.detoxik@gmail.com",
    pass:"cxtc skjg wezg efmr"
  }
})
app.get("/mail" , async (req,res)=>{
let result = await transport.sendMail({
 from:"test desde Nodejs <gbarrera@glopit.com> ",
 to:"tienda.detoxik@gmail.com",
 subject:"Correo de prueba desde Nodejs",
 html: `
 <div>  
 <h1>Soy el body del mail</h1>
 </div>`,
 attachments:[]

})

res.send({status:"success",result:"Email Sent"})
})

*/



// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Internal Server Error', 
    error: err.message 
  });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


