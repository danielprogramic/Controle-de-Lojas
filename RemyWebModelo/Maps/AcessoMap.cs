using FluentNHibernate.Mapping;
using RemyWebModelo.Entidades;
using RemyWebModelo.Maps.Utils;

namespace RemyWebModelo.Maps
{
    public class AcessoMap : ClassMap<Acesso>
    {
        public AcessoMap()
        {
            Id(x => x.Id);

            Map(x => x.Descricao)
                .Not.Nullable()
                .Length(MapLength.Texto);

            HasManyToMany(x => x.Perfils)
                .LazyLoad()
                .Cascade.Merge()
                .Table("PerfilAcesso")                
                .ParentKeyColumn("Id_Acesso")
                .ChildKeyColumn("Id_Perfil");
        }
    }
}
