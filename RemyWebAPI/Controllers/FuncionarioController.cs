using RemyWebModelo.Repositorio;
using RemyWebModelo.Repositorio.Interfaces;

namespace RemyWebAPI.Controllers
{
    public class FuncionarioController : BaseController
    {
        private readonly IFuncionarioRepository _repository;

        public FuncionarioController()
        {
            _repository = new FuncionarioRepository();
        }
    }
}
