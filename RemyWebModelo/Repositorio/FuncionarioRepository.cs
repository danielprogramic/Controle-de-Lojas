using RemyWebModelo.Connection;
using RemyWebModelo.Repositorio.Interfaces;

namespace RemyWebModelo.Repositorio
{
    public class FuncionarioRepository : Repository<FuncionarioRepository>, IFuncionarioRepository
    {
        public FuncionarioRepository()
        {
            
        }

        public FuncionarioRepository(IConnectionManager connectionManager) : base(connectionManager)
        {
            
        }
    }
}
