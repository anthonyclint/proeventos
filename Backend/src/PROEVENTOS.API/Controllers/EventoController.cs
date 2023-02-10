using Microsoft.AspNetCore.Mvc;
using PROEVENTOS.Persistence;
using PROEVENTOS.Domain;

namespace PROEVENTOS.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventosController : ControllerBase
{    
    private readonly ProEventosContext _context;
    public EventosController(ProEventosContext context)
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
            evento => evento.Id == id
        );
    }
}
