using Microsoft.AspNetCore.Mvc;
using PROEVENTOS.API.Data;
using PROEVENTOS.API.Models;

namespace PROEVENTOS.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventoController : ControllerBase
{    
    private readonly DataContext _context;
    public EventoController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IEnumerable<Evento> Get()
    {
        return _context.Eventos;
    }

    [HttpGet("{id}")]
    public Evento GetById(int id)
    {
        return _context.Eventos.FirstOrDefault(
            evento => evento.EventoId == id
        );
    }
}
