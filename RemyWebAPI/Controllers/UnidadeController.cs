using RemyWebModelo.Repositorio;
using RemyWebModelo.Repositorio.Interfaces;

namespace RemyWebAPI.Controllers
{
    public class UnidadeController : BaseController
    {
        private readonly IUnidadeRepository _repository;

        public UnidadeController()
        {
            _repository = new UnidadeRepository();
        }
    }
}
