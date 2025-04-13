function calcular() {
    const usd = parseFloat(document.getElementById('usd').value);
    const dolar = parseFloat(document.getElementById('dolar').value);
    const resultadoDiv = document.getElementById('resultado');
  
    if (isNaN(usd) || isNaN(dolar)) {
      resultadoDiv.innerText = "Por favor ingresá valores válidos.";
      return;
    }
  
    const impuestos = 2.0; // 100% total sobre el oficial
    const total = usd * dolar * impuestos;
  
    resultadoDiv.innerText = `Total estimado: $${total.toFixed(2)} ARS`;
  }
  