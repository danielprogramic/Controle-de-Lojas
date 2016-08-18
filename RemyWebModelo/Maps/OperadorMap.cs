using FluentNHibernate.Mapping;
using RemyWebModelo.Entidades;
using RemyWebModelo.Maps.Utils;

namespace RemyWebModelo.Maps
{
    public class OperadorMap : SubclassMap<Operador>
    {
        public OperadorMap()
        {
            KeyColumn("Id_Pessoa");

            Map(x => x.Login)
                .Not.Nullable()
                .Length(MapLength.TextoCurto);

            Map(x => x.Senha)
                .Not.Nullable()
                .Length(MapLength.Texto);

            HasManyToMany(x => x.Unidades)
                .LazyLoad()
                .Cascade.Merge()
                .Table("OperadorUnidade")
                .ParentKeyColumn("Id_Operador")
                .ChildKeyColumn("Id_Unidade");
        }
    }
}
