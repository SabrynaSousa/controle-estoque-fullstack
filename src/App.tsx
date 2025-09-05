import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

const App: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);

  const [novoProdutoNome, setNovoProdutoNome] = useState<string>('');
  const [novoProdutoPreco, setNovoProdutoPreco] = useState<number>(0);
  const [novoProdutoQuantidade, setNovoProdutoQuantidade] = useState<number>(0);
  const [mensagem, setMensagem] = useState<string>('');

  const buscarProdutos = async () => {
    try {
      setCarregando(true);
      const response = await axios.get<Produto[]>('http://localhost:8080/api/produtos');
      setProdutos(response.data);
      setErro(null);
    } catch (e) {
      setErro('Não foi possível carregar os produtos. Verifique se o backend está rodando.');
      console.error(e);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarProdutos();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMensagem('');

    if (!novoProdutoNome || novoProdutoPreco <= 0 || novoProdutoQuantidade <= 0) {
      setMensagem('Preencha todos os campos corretamente!');
      return;
    }

    const novoProduto = { nome: novoProdutoNome, preco: novoProdutoPreco, quantidade: novoProdutoQuantidade };

    try {
      await axios.post('http://localhost:8080/api/produtos', novoProduto);
      setMensagem('Produto adicionado com sucesso!');
      setNovoProdutoNome('');
      setNovoProdutoPreco(0);
      setNovoProdutoQuantidade(0);
      buscarProdutos();
    } catch (e) {
      setMensagem('Erro ao adicionar produto. Verifique o servidor.');
      console.error(e);
    }
  };

  if (carregando) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-blue-100">
        <p className="text-3xl font-bold text-gray-800 animate-pulse">Carregando produtos...</p>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-blue-100">
        <div className="bg-red-100 border border-red-400 text-red-700 px-8 py-4 rounded-xl shadow-lg">
          {erro}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-white font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-8 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center tracking-tight">Meu Estoque Online</h1>
        <p className="text-center text-lg md:text-xl mt-2">Gerencie seus produtos com estilo</p>
      </header>

      <main className="max-w-6xl mx-auto p-8">
        {/* Formulário */}
        <section className="bg-white p-6 md:p-10 rounded-3xl shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Adicionar Novo Produto</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Nome do Produto"
              value={novoProdutoNome}
              onChange={(e) => setNovoProdutoNome(e.target.value)}
              className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 transition"
            />
            <input
              type="number"
              placeholder="Preço"
              value={novoProdutoPreco}
              onChange={(e) => setNovoProdutoPreco(Number(e.target.value))}
              className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 transition"
            />
            <input
              type="number"
              placeholder="Quantidade"
              value={novoProdutoQuantidade}
              onChange={(e) => setNovoProdutoQuantidade(Number(e.target.value))}
              className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 transition"
            />
            <button
              type="submit"
              className="col-span-1 md:col-span-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 rounded-2xl shadow-lg hover:scale-105 transform transition-all"
            >
              Adicionar Produto
            </button>
            {mensagem && (
              <p className={`col-span-1 md:col-span-3 text-center font-semibold ${mensagem.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>
                {mensagem}
              </p>
            )}
          </form>
        </section>

        {/* Lista de produtos */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Produtos Cadastrados</h2>
          {produtos.length === 0 ? (
            <p className="text-gray-600 text-lg">Nenhum produto cadastrado.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {produtos.map((produto) => (
                <div key={produto.id} className="bg-white rounded-3xl p-6 shadow-xl transform hover:scale-105 transition-all relative">
                  <h3 className="text-xl font-bold mb-2 text-purple-700">{produto.nome}</h3>
                  <p className="text-gray-800 font-semibold">Preço: R$ {produto.preco.toFixed(2)}</p>
                  <p className="text-gray-600">Quantidade: {produto.quantidade}</p>
                  {produto.quantidade < 5 && (
                    <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
                      Estoque Baixo
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="mt-20 py-12 text-center text-gray-500 text-sm md:text-base">
        &copy; 2025 Por Lays Sabryna. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default App;
