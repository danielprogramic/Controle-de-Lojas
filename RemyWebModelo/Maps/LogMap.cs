using FluentNHibernate.Mapping;
using RemyWebModelo.Entidades;
using RemyWebModelo.Maps.Utils;

namespace RemyWebModelo.Maps
{
    public class LogMap : ClassMap<Log>
    {
        public LogMap()
        {
            Id(x => x.Id);

            Map(x => x.DataHora)
                .Not.Nullable();

            Map(x => x.Descricao)
                .Not.Nullable()
                .Length(MapLength.Texto);

            References(x => x.Operador)
                .Not.Nullable();
        }
    }
}
