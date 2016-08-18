using System.Net;
using System.Net.Http;
using System.Web.Http;
using RemyWebModelo.Entidades;
using RemyWebModelo.Repositorio;
using RemyWebModelo.Repositorio.Interfaces;

namespace RemyWebAPI.Controllers
{
    public class PessoaController : BaseController
    {
        private readonly IPessoaRepository _repository;

        public PessoaController()
        {
            _repository = new PessoaRepository();
        }

        [HttpGet]
        public HttpResponseMessage GetAll()
        {
            var list = _repository.GetAll();

            return list.Count == 0
                       ? Request.CreateResponse(HttpStatusCode.NotFound)
                       : Request.CreateResponse(HttpStatusCode.OK, list);
        }

        [HttpGet]
        public HttpResponseMessage GetById(int id)
        {
            var pessoa = _repository.Get(id);

            return pessoa == null
                       ? Request.CreateResponse(HttpStatusCode.NotFound)
                       : Request.CreateResponse(HttpStatusCode.OK, pessoa);
        }

        [HttpPost]
        public HttpResponseMessage Incluir([FromBody] Pessoa pessoa)
        {
            pessoa = _repository.Add(pessoa);

            return pessoa != null
                       ? Request.CreateResponse(HttpStatusCode.Created, pessoa)
                       : Request.CreateResponse(HttpStatusCode.NotModified);                                                                                                       
        }

        [HttpPut]
        public HttpResponseMessage Alterar([FromBody] Pessoa pessoa)
        {
            pessoa = _repository.Modify(pessoa);

            return pessoa != null
                       ? Request.CreateResponse(HttpStatusCode.OK, pessoa)
                       : Request.CreateResponse(HttpStatusCode.NotModified);
        }
    }
}
