using FluentNHibernate.Mapping;
using RemyWebModelo.Entidades;

namespace RemyWebModelo.Maps
{
    public class UnidadeMap : SubclassMap<Unidade>
    {
        public UnidadeMap()
        {
            KeyColumn("Id_Pessoa");

            HasManyToMany(x => x.Operadores)
                .LazyLoad()
                .Cascade.Merge()
                .Table("OperadorUnidade")
                .ParentKeyColumn("Id_Unidade")
                .ChildKeyColumn("Id_Operador");
        }
    }
}
