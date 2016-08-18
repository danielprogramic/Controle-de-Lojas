using FluentNHibernate.Mapping;
using RemyWebModelo.Entidades;
using RemyWebModelo.Maps.Utils;

namespace RemyWebModelo.Maps
{
    public class CidadeMap : ClassMap<Cidade>
    {
        public CidadeMap()
        {
            Id(x => x.Id);

            Map(x => x.Descricao)
                .Not.Nullable()
                .Length(MapLength.Texto);
        }
    }
}
