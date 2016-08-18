using System.Collections.Generic;

namespace RemyWebModelo.Entidades
{
    public class Operador : Pessoa
    {
        public virtual string Login { get; set; }

        public virtual string Senha { get; set; }

        public virtual IList<Unidade> Unidades { get; set; }

        public Operador()
        {
            Unidades = new List<Unidade>();
        }
    }
}
