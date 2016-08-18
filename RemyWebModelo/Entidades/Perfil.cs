using System.Collections.Generic;

namespace RemyWebModelo.Entidades
{
    public class Perfil
    {
        public virtual int Id { get; protected set; }

        public virtual string Descricao { get; set; }

        public virtual IList<Acesso> Acessos { get; set; }

        public Perfil()
        {
            Acessos = new List<Acesso>();
        }
    }
}
