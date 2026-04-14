import { useState } from 'react';
import './BuscadorCep.css';

// tipagem do viacep
interface Endereco {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

function BuscadorCep() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState<Endereco | null>(null);
  const [erro, setErro] = useState('');

  const buscarCep = async () => {
    // limpa a tela pra nova busca
    setErro('');
    setEndereco(null);

    const cepLimpo = cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8) {
      setErro('CEP inválido. Digite exatamente 8 números.');
      return;
    }

    try {
      // requisição
      const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const data = await response.json();

      if (data.erro) {
        setErro('CEP não encontrado na base de dados.');
      } else {
        setEndereco(data);
      }
    } catch {
      setErro('Erro de conexão ao buscar o CEP.');
    }
  };

  return (
    <div className="cep-container">
      <h2>Buscador de CEP</h2>

      <div className="search-box">
        <input
          type="text"
          className="cep-input"
          placeholder="Digite o CEP..."
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && buscarCep()} // Busca ao apertar Enter
        />
        <button className="btn-search" onClick={buscarCep}>
          Buscar
        </button>
      </div>

      {erro && <p className="error-msg">{erro}</p>}

      {endereco && (
        <div className="result-panel">
          <p><strong>CEP:</strong> {endereco.cep}</p>
          <p><strong>Logradouro:</strong> {endereco.logradouro || 'Não informado'}</p>
          <p><strong>Bairro:</strong> {endereco.bairro || 'Não informado'}</p>
          <p><strong>Cidade/UF:</strong> {endereco.localidade} - {endereco.uf}</p>
        </div>
      )}
    </div>
  );
}

export default BuscadorCep;