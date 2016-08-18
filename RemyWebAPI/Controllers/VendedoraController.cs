using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using RemyWebModelo.Entidades;
using RemyWebModelo.Repositorio;
using RemyWebModelo.Repositorio.Interfaces;

namespace RemyWebAPI.Controllers
{
    public class VendedoraController : BaseController
    {
        private readonly IVendedoraRepository _repository;

        public VendedoraController()
        {
            _repository = new VendedoraRepository();
        }

        [HttpPost]
        public HttpResponseMessage Incluir([FromBody] Vendedora vendedora)
        {
            vendedora = _repository.Add(vendedora);

            return vendedora != null
                       ? Request.CreateResponse(HttpStatusCode.Created, vendedora)
                       : Request.CreateResponse(HttpStatusCode.NotFound);
        }

        [HttpPost]
        public HttpResponseMessage Incluir([FromBody] IList<Vendedora> vendedoras)
        {
            vendedoras = _repository.AddList(vendedoras);

            return vendedoras != null
                       ? Request.CreateResponse(HttpStatusCode.Created, vendedoras)
                       : Request.CreateResponse(HttpStatusCode.NotFound);
        }

        [HttpGet]
        public string TesteIncluir()
        {
            var vendedora = new Vendedora
                                {
                                    Nome = "Felipe",
                                    CpfCnpj = "31157649874",
                                    RgIe = "440303771",
                                    Cep = "13425380",
                                    Cidade = new Cidade { Descricao = "Piracicaba", Uf = "SP" },
                                    Bairro = "Pompeia",
                                    Endereco = "Av. Rio das Pedras",
                                    Numero = "2255",
                                    Complemento = "BL 33 AP 304",
                                    Email = "felipearon@gmail.com",
                                    Fone = "19 34242586",
                                    Celular = "19 992802190"
                                };

            vendedora = _repository.Add(vendedora);

            return vendedora != null
                       ? "OK"
                       : "ERRO";
        }
    }
}
