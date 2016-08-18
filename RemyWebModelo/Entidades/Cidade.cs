namespace RemyWebModelo.Entidades
{
    public class Cidade
    {
        public virtual int Id { get; protected set; }

        public virtual string Descricao { get; set; }

        public virtual string Uf { get; set; }
    }
}
