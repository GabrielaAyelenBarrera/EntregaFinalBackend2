import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  purchase_datetime: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  purchaser: { type: String, required: true },
});
// Hook pre-save para generar automáticamente un código único si no existe
ticketSchema.pre('save', function (next) {
  if (!this.code) {
    this.code = `TICKET-${Date.now()}-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
  }
  next();
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
