const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {
  /*
  Olá, aqui é o Gabriel! 

  Contexto:
  - As recomendações foram pensadas originalmente apenas com base nas "preferences" do usuário.
  - Não encontrei menção explícita no escopo sobre o uso de "features".

  O que fiz:
  - Mantive o foco principal nas "preferences".
  - Adicionei uma lógica de "score" que também considera as "features" escolhidas pelo usuário.
  - Cada preference tem peso 2 no cálculo, enquanto cada feature adiciona 1 ponto.
      -> Isso garante que preferências continuam sendo o fator principal,
       mas as features ajudam a desempatar ou refinar a recomendação.

  Resultado:
  - Produtos são ordenados pelo score calculado.
  - Em caso de empate, o último produto válido é retornado.
*/
  let recomendationProducts = products.filter((product) =>
    product.preferences.some((preference) =>
      formData.selectedPreferences.includes(preference)
    )
  );

  if (formData?.selectedFeatures?.length > 0) {
    recomendationProducts = recomendationProducts.map((product) => {
      const matchedPreferences = product.preferences.filter((pref) =>
        formData?.selectedPreferences.includes(pref)
      );
      const matchedFeatures = product.features.filter((feat) =>
        formData?.selectedFeatures.includes(feat)
      );

      return {
        ...product,
        score: matchedPreferences.length * 2 + matchedFeatures.length,
      };
    });

    // Ordenar pelo score (e em empate fica o último válido)
    recomendationProducts.sort((a, b) => b.score - a.score);
  }

  if (formData?.selectedRecommendationType === 'SingleProduct') {
    return [recomendationProducts?.at(-1)];
  }
  return recomendationProducts;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getRecommendations };
