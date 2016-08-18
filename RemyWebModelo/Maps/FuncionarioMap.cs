using FluentNHibernate.Mapping;
using RemyWebModelo.Entidades;

namespace RemyWebModelo.Maps
{
    public class FuncionarioMap : SubclassMap<Funcionario>
    {
        public FuncionarioMap()
        {
            KeyColumn("Id_Pessoa");
        }
    }
}