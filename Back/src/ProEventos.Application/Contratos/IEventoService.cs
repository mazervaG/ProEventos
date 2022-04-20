using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Application.Contratos
{
    public interface IEventoService
    {
        Task<Evento> AddEventos(Evento model);
        Task<Evento> UpdateEvento(int eventoId, Evento model);
        Task<bool> DeleteEvento(int eventoId);

        Task<Evento[]> GetAllEventosAsync(bool includePalestrante = false);
        Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrante = false);
        Task<Evento> GetEventoByIdAsync(int EventoId, bool includePalestrante = false);
    }
}