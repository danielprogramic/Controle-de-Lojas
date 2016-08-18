using RemyWebModelo.Connection;
using RemyWebModelo.Entidades;
using RemyWebModelo.Repositorio.Interfaces;

namespace RemyWebModelo.Repositorio
{
    public class PessoaRepository : Repository<Pessoa>, IPessoaRepository
    {
        public PessoaRepository()
        {
            
        }

        public PessoaRepository(IConnectionManager connectionManager) : base(connectionManager)
        {
            
        }
    }
}
