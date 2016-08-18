using FluentNHibernate.Mapping;
using RemyWebModelo.Entidades;
using RemyWebModelo.Maps.Utils;

namespace RemyWebModelo.Maps
{
    public class PessoaMap : ClassMap<Pessoa>
    {
        public PessoaMap()
        {
            Id(x => x.Id);

            Map(x => x.Nome)
                .Not.Nullable()
                .Length(MapLength.Texto);

            Map(x => x.CpfCnpj)
                .Not.Nullable()
                .Length(MapLength.TextoCurto);

            Map(x => x.RgIe)
                .Not.Nullable()
                .Length(MapLength.TextoCurto);

            Map(x => x.Cep)
                .Not.Nullable()
                .Length(MapLength.TextoCurto);

            References(x => x.Cidade)
                .Not.Nullable()
                .Cascade.SaveUpdate();

            Map(x => x.Bairro)
                .Not.Nullable()
                .Length(MapLength.Texto);

            Map(x => x.Endereco)
                .Not.Nullable()
                .Length(MapLength.Texto);

            Map(x => x.Numero)
                .Not.Nullable()
                .Length(MapLength.TextoCurto);

            Map(x => x.Complemento)
                .Not.Nullable()
                .Length(MapLength.Texto);

            Map(x => x.Email)
                .Not.Nullable()
                .Length(MapLength.Texto);

            Map(x => x.Fone)
                .Not.Nullable()
                .Length(MapLength.TextoCurto);

            Map(x => x.Celular)
                .Not.Nullable()
                .Length(MapLength.TextoCurto);
        }
    }
}
