using System.Net;
using System.Net.Http;
using System.Web.Http;
using RemyWebModelo.Entidades;
using RemyWebModelo.Repositorio;
using RemyWebModelo.Repositorio.Interfaces;

namespace RemyWebAPI.Controllers
{
    public class OperadorController : BaseController
    {
        private readonly IOperadorRepository _repository;
        
        public OperadorController()
        {
            _repository = new OperadorRepository();
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
            var operador = _repository.Get(id);

            return operador == null
                       ? Request.CreateResponse(HttpStatusCode.NotFound)
                       : Request.CreateResponse(HttpStatusCode.OK, operador);
        }

        [HttpPost]
        public HttpResponseMessage Incluir([FromBody] Operador operador)
        {
            operador = _repository.Add(operador);

            return operador != null
                       ? Request.CreateResponse(HttpStatusCode.Created, operador)
                       : Request.CreateResponse(HttpStatusCode.NotFound);
        }

        [HttpPut]
        public HttpResponseMessage Alterar([FromBody] Operador operador)
        {
            operador = _repository.Modify(operador);

            return operador != null
                       ? Request.CreateResponse(HttpStatusCode.OK, operador)
                       : Request.CreateResponse(HttpStatusCode.NotModified);
        }
    }
}