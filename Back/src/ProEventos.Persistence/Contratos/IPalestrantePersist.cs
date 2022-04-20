using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contrato
{
    public interface IPalestrantePersist
    {
        Task<Palestrante[]> GetAllPalestrantesByNomeAsync(string tema, bool includeEventos);
        Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEventos);
        Task<Palestrante> GetPalestranteByIdAsync(int PalstranteId, bool includeEventos);
    }
}