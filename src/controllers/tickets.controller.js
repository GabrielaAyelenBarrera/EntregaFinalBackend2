import ticketRepository from '../repositorio/ticket.repository.js'; // Cambia según tu archivo de repositorio
import TicketDTO from '../dto/ticket.dto.js'; // Si planeas usar DTO para la salida

export const createTicket = async (req, res) => {
  try {
    const { amount, purchaser } = req.body;

    // Validar los datos obligatorios
    if (!amount || !purchaser) {
      return res.status(400).json({ error: 'Faltan datos obligatorios: amount y purchaser' });
    }

    // Preparar los datos para el ticket
    const ticketData = { amount, purchaser };

    // Crear el ticket usando el repositorio
    const newTicket = await ticketRepository.create(ticketData);

    // Enviar el ticket creado al cliente (puedes usar DTO para formatear la respuesta)
    res.status(201).json(new TicketDTO(newTicket));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
