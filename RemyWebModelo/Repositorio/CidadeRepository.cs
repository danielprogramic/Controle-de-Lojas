using RemyWebModelo.Connection;
using RemyWebModelo.Entidades;
using RemyWebModelo.Repositorio.Interfaces;

namespace RemyWebModelo.Repositorio
{
    public class CidadeRepository : Repository<Cidade>, ICidadeRepository
    {
        public CidadeRepository()
        {
            
        }

        public CidadeRepository(IConnectionManager connectionManager) : base(connectionManager)
        {
            
        }
    }
}
