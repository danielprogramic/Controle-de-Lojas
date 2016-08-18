using FluentNHibernate.Mapping;
using RemyWebModelo.Entidades;
using RemyWebModelo.Maps.Utils;

namespace RemyWebModelo.Maps
{
    public class PerfilMap : ClassMap<Perfil>
    {
        public PerfilMap()
        {
            Id(x => x.Id);

            Map(x => x.Descricao)
                .Not.Nullable()
                .Length(MapLength.Texto);

            HasManyToMany(x => x.Acessos)
                .LazyLoad()
                .Cascade.Merge()
                .Table("PerfilAcesso")
                .ParentKeyColumn("Id_Perfil")
                .ChildKeyColumn("Id_Acesso");
        }
    }
}
