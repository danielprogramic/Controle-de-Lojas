using FluentNHibernate.Mapping;
using RemyWebModelo.Entidades;

namespace RemyWebModelo.Maps
{
    public class VendedoraMap : SubclassMap<Vendedora>
    {
        public VendedoraMap()
        {
            KeyColumn("Id_Pessoa");
        }
    }
}