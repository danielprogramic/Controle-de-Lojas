using RemyWebModelo.Connection;
using RemyWebModelo.Entidades;
using RemyWebModelo.Repositorio.Interfaces;

namespace RemyWebModelo.Repositorio
{
    public class OperadorRepository : Repository<Operador>, IOperadorRepository
    {
        public OperadorRepository()
        {
            
        }

        public OperadorRepository(IConnectionManager connectionManager) : base(connectionManager)
        {
            
        }
    }
}
