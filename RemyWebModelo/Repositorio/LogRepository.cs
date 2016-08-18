using RemyWebModelo.Connection;
using RemyWebModelo.Entidades;
using RemyWebModelo.Repositorio.Interfaces;

namespace RemyWebModelo.Repositorio
{
    public class LogRepository : Repository<Log>, ILogRepository
    {
        public LogRepository()
        {
            
        }

        public LogRepository(IConnectionManager connectionManager) : base(connectionManager)
        {
            
        }
    }
}
