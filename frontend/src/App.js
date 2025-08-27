import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';
import { ToastContainer } from 'react-toastify';
import Modal from './components/Form/Modal/Modal';

function App() {
  const [recommendations, setRecommendations] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">
        Recomendador de Produtos RD Station
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-2 mb-4">
          <p className="text-lg">
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode
            encontrar uma variedade de produtos da RD Station, cada um projetado
            para atender às necessidades específicas do seu negócio. De CRM a
            Marketing, de Conversas a Inteligência Artificial, temos uma solução
            para ajudar você a alcançar seus objetivos. Use o formulário abaixo
            para selecionar suas preferências e funcionalidades desejadas e
            receba recomendações personalizadas de produtos que melhor atendam
            às suas necessidades.
          </p>

          <div className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Notas do autor
            </button>
          </div>
        </div>

        <div>
          <Form setRecommendations={setRecommendations} />
        </div>
        <div>
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-2">Notas do autor</h2>
        <p>
          Olá, me chamo Gabriel Batemarque, neste pojeto fiz "algumas coisinhas
          a mais", nas quais acho interessante manter em uma aplicação, como:
        </p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li>
            Valida para não permitir enviar dados caso não haja preferências
            selecionadas.
          </li>
          <li>
            Ação de limpar Recomendações, para isso foi necessário ajustar os
            componentes de Features e Preferences.
          </li>
          <li>Retorno visual das ações com React-toastfy.</li>
          <li>Modal informativo.</li>
        </ol>
      </Modal>

      <ToastContainer
        position="top-right"
        autoClose={3000} // fecha em 3s
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        theme="colored"
        pauseOnHover
      />
    </div>
  );
}

export default App;
