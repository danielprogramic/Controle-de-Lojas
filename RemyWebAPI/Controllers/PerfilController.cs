using RemyWebModelo.Repositorio;
using RemyWebModelo.Repositorio.Interfaces;

namespace RemyWebAPI.Controllers
{
    public class PerfilController : BaseController
    {
        private readonly IPerfilRepository _repository;

        public PerfilController()
        {
            _repository = new PerfilRepository();
        }
    }
}