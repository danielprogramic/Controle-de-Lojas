using RemyWebModelo.Connection;
using RemyWebModelo.Entidades;
using RemyWebModelo.Repositorio.Interfaces;

namespace RemyWebModelo.Repositorio
{
    public class UnidadeRepository : Repository<Unidade>, IUnidadeRepository
    {
        public UnidadeRepository()
        {
            
        }

        public UnidadeRepository(IConnectionManager connectionManager) : base(connectionManager)
        {
            
        }
    }
}
