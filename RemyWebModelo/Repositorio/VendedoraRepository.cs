using RemyWebModelo.Connection;
using RemyWebModelo.Entidades;
using RemyWebModelo.Repositorio.Interfaces;

namespace RemyWebModelo.Repositorio
{
    public class VendedoraRepository : Repository<Vendedora>, IVendedoraRepository
    {
        public VendedoraRepository()
        {
            
        }

        public VendedoraRepository(IConnectionManager connectionManager) : base(connectionManager)
        {

        }

        public new Vendedora Add(Vendedora item)
        {
            var repCidade = new CidadeRepository(_connection);

            var lCidade = repCidade.GetFiltered(x => x.Descricao == item.Cidade.Descricao);

            using (var t = _connection.Session.BeginTransaction())
            {
                if (lCidade.Count == 0)
                {
                    item.Cidade = repCidade.Add(item.Cidade);
                }
                
                _connection.Session.Save(item);
                t.Commit();

                return item;
            }
        }
    }
}
