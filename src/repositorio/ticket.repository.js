import TicketDAO from '../dao/classes/ticket.dao.js';

class TicketRepository {
  async create(ticketData) {
    return await TicketDAO.createTicket(ticketData);
  }
}

export default new TicketRepository();
