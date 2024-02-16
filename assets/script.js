function verificarPrecoAlimento() {
    while (true) {
      let alimento = window.prompt("Digite o nome ou código do alimento (ou 'sair' para encerrar):");
  
      if (alimento === "sair" || alimento === "0") {
        return "Encerrando a execução...";
      }
  
      switch (alimento) {
        case "morango":
          return "R$ 5,99/kg";
        case "banana":
          return "R$ 2,99/kg";
        case "maçã":
          return"R$ 3,99/kg";
        default:
          return "Alimento não encontrado";
      }
    }
  }
  
  verificarPrecoAlimento();