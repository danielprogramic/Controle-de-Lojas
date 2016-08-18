using System.ComponentModel.DataAnnotations;

namespace RemyWebModelo.Entidades
{
    public class Pessoa
    {
        public virtual int Id { get; protected set; }

        [Required(ErrorMessage = "Indique o Nome")]
        public virtual string Nome { get; set; }

        [Required(ErrorMessage = "Indique o CPF/CNPJ")]
        public virtual string CpfCnpj { get; set; }

        [Required(ErrorMessage = "Indique o RG/IE")]
        public virtual string RgIe { get; set; }

        [Required(ErrorMessage = "Cep não indicado")]
        public virtual string Cep { get; set; }

        public virtual Cidade Cidade { get; set; }

        public virtual string Bairro { get; set; }

        public virtual string Endereco { get; set; }

        public virtual string Numero { get; set; }

        public virtual string Complemento { get; set; }

        public virtual string Email { get; set; }

        public virtual string Fone { get; set; }

        public virtual string Celular { get; set; }
    }
}