using System.Collections.Generic;

namespace RemyWebModelo.Entidades
{
    public class Acesso
    {
        public virtual int Id { get; protected set; }

        public virtual string Descricao { get; set; }

        public virtual IList<Perfil> Perfils { get; set; }

        public Acesso()
        {
            Perfils = new List<Perfil>();
        }
    }
}