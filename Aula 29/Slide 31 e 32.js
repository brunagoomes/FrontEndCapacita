function InformacoesPessoais() {
  // Declaração das variáveis
  const nomeCompleto = "Fulano de Tal";
  const idade = 21;
  const profissao = "Estudante de Ciência da Computação";
  const estaAtivo = true;

  return (
    <section>
      <h1>{nomeCompleto}</h1>
      <p>Idade: {idade}</p>

      {/* Renderização Condicional */}
      {estaAtivo && <p>Profissão: {profissao}</p>}
    </section>
  );
}
