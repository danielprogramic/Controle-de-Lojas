using System;
using System.Collections.Generic;

namespace RemyWebModelo.Entidades
{
    public class PerfilAcesso
    {
        public virtual int Id { get; set; }
        
        public virtual Acesso Acesso { get; set; }

        public virtual Perfil Perfil { get; set; }

        public virtual IList<Acesso> Acessos { get; set; }
    }
}
