using System;
using System.Collections.Generic;
using ProEventos.Domain.Models;

namespace ProEventos.Domain
{
    public class Evento
    {
        public int Id { get; set; }
        public string Local { get; set; }
        public DateTime? dataevento { get; set; }
        public string Tema { get; set; }
        public int qtdpessoas { get; set; }
        public string imagemurl { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public IEnumerable<Lote> lotes { get; set; }
        public IEnumerable<RedeSocial> RedesSociais { get; set; }
        public IEnumerable<PalestranteEvento> PalestrantesEventos { get; set; }
    }
}