import Ticket from '../models/ticket.model.js';

class TicketDAO {
  async createTicket(ticketData) {
    const ticket = new Ticket(ticketData);
    return await ticket.save();
  }


  async getTicketById(id) {
    return await Ticket.findById(id);
  }

  async getAllTickets() {
    return await Ticket.find();
  }

  async deleteTicket(id) {
    return await Ticket.findByIdAndDelete(id);
  }
}

export default new TicketDAO();
