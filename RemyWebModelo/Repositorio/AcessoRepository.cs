using RemyWebModelo.Connection;
using RemyWebModelo.Entidades;
using RemyWebModelo.Repositorio.Interfaces;

namespace RemyWebModelo.Repositorio
{
    public class AcessoRepository : Repository<Acesso>, IAcessoRepository
    {
        public AcessoRepository()
        {
            
        }

        public AcessoRepository(IConnectionManager connectionManager) : base(connectionManager)
        {
            
        }
    }
}
