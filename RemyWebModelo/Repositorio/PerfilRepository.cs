using RemyWebModelo.Connection;
using RemyWebModelo.Entidades;
using RemyWebModelo.Repositorio.Interfaces;

namespace RemyWebModelo.Repositorio
{
    public class PerfilRepository : Repository<Perfil>, IPerfilRepository
    {
        public PerfilRepository()
        {
            
        }

        public PerfilRepository(IConnectionManager connectionManager) : base (connectionManager)
        {
            
        }
    }
}
