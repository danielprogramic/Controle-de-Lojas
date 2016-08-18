using RemyWebModelo.Repositorio;
using RemyWebModelo.Repositorio.Interfaces;

namespace RemyWebAPI.Controllers
{
    public class CidadeController : BaseController
    {
        private readonly ICidadeRepository _repository;

        public CidadeController()
        {
            _repository = new CidadeRepository();
        }
    }
}
