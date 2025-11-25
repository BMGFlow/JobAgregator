// Dentro da função applyFilters()
switch (ordenar.value) {
  // ... outros casos
  case 'recentes':
  default:
    // Ordena comparando as datas, colocando a mais recente (maior data) primeiro.
    filteredJobs.sort((a, b) => new Date(b.date) - new Date(a.date)); 
    break;
}
async function init() {
  try {
    const response = await fetch('conteudo.json');
    allJobs = await response.json();
    applyFilters(); // Renderiza as vagas iniciais, já ordenadas
  } catch (error) {
    // ...
  }
}

init(); // Inicia a aplicação
