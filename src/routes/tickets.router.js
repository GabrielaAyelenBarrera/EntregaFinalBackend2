import { Router } from 'express';
import TicketDAO from '../dao/classes/ticket.dao.js';

const router = Router();

// Crear un ticket
router.post('/', async (req, res) => {
  try {
    const ticketData = req.body;
    const newTicket = await TicketDAO.createTicket(ticketData);
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todos los tickets
router.get('/', async (req, res) => {
  try {
    const tickets = await TicketDAO.getAllTickets();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
