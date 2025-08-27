// Form.js

import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';
import { toast } from 'react-toastify';
import ClearRecomendationsButton from './SubmitButton/ClearRecomendationsButton';

function Form({ setRecommendations }) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange, resetForm } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData?.selectedPreferences?.length === 0) {
      toast.warning(
        'Para receber indicações é necessário informar preferências'
      );
      return;
    }
    const dataRecommendations = getRecommendations(formData);
    toast.success('Recomendações atualizadas com sucesso!');

    // Atualiza a lista de recomendações
    setRecommendations(dataRecommendations);
  };

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        selectedPreferences={formData.selectedPreferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        selectedFeatures={formData.selectedFeatures}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />

      <div className="flex flex-col space-y-[5px]">
        <SubmitButton text="Obter recomendação" />
        <ClearRecomendationsButton
          onClick={() => {
            setRecommendations([]);
            resetForm();
            toast.success('Recomendações Limpas com sucesso!');
          }}
          text="Limpar recomendações"
        />
      </div>
    </form>
  );
}

export default Form;
