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
              gross: 19847.51,
              commission: 12506.05,
              sales: 200,
              preco: 97,
              atualizado: "2026-06-21"
      }
        ],

    // META ADS — da Torre de Controle (parceiros de tráfego).
    //   spend  = Valor investido (sem imposto)
    //   tax    = Imposto sobre a compra de mídia (ex: 12,15%)
    //   imp    = Impressões | clicks = Cliques no link | conv = Compras
    meta: [
      {
              month: "2026-06",
              spend: 3247,
              tax: 394,
              imp: 246619,
              clicks: 1867,
              pageview: 737,
              checkout: 242,
              conv: 92,
              atualizado: "2026-06-18"
      }
        ],

    // ASSINATURAS RECORRENTES — incluídas automaticamente no opex de cada mês.
    //   amt    = valor mensal
    //   start  = mês de início (AAAA-MM)
    //   months = quantidade de meses
    //   cat    = categoria (aparece no DRE e Despesas)
    subscriptions: [
      { name: "Sendflow", amt: 277, start: "2026-06", months: 6, cat: "Plataforma" }
        ]
};
