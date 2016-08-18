using System;

namespace RemyWebModelo.Entidades
{
    public class Log 
    {
        public virtual  int Id { get; protected set; }

        public virtual DateTime DataHora { get; set; }

        public virtual string Descricao { get; set; }

        public virtual Operador Operador { get; set; }
    }
}
