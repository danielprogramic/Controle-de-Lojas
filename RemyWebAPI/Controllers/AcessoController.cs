using System.Web.Http;
using RemyWebModelo.Repositorio;
using RemyWebModelo.Repositorio.Interfaces;

namespace RemyWebAPI.Controllers
{
    public class AcessoController : BaseController
    {
        private readonly IAcessoRepository _repository;

        public AcessoController()
        {
            _repository = new AcessoRepository();
        }
    }
}
