using System.Collections.Generic;

namespace RemyWebModelo.Entidades
{
    public class Unidade : Pessoa
    {
        public virtual IList<Operador> Operadores { get; set; }

        public Unidade()
        {
            Operadores = new List<Operador>();
        }
    }
}
