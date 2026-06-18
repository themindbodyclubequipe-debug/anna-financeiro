// ===================================================================
//  dados.js  —  alimentado automaticamente pelo Cowork (Hubla + Meta)
//  NÃO editar à mão. Despesas e assinaturas são lançadas no painel.
//  Formato: um snapshot por mês em cada lista. O Cowork sobrescreve
//  o snapshot do mês corrente a cada execução (não duplica).
// ===================================================================
window.DADOS = {
  // HUBLA — capturar 2 números reais por mês; o painel deriva o resto.
  //   gross      = "Valor total bruto das faturas" (modal Exportar, status Paga)
  //   commission = "Receita líquida" (tela inicial) — sua comissão final
  //   sales      = "Número de faturas" / itens vendidos
  hubla: [
    {
      month: "2026-06",
      gross: 18772.77,
      commission: 11818.22,
      sales: 189,
      preco: 97,
      atualizado: "2026-06-18"
    }
  ],

  // META ADS — da Torre de Controle (parceiros de tráfego).
  //   spend  = Valor investido
  //   imp    = Impressões | clicks = Cliques no link | conv = Compras
  meta: [
    {
      month: "2026-06",
      spend: 3035,
      imp: 227449,
      clicks: 1759,
      conv: 86,
      atualizado: "2026-06-18"
    }
  ]
};
