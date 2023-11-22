const btn = document.querySelector("button");
btn.addEventListener('click', (e) => {
    e.preventDefault();

    const p = parseFloat(document.getElementById('sucexoInput').value);
    const xValores = document.getElementById('valoresInput').value.split(',').map(Number);

    const pmfValues = xValores.map(x => p ** x * (1 - p) ** (1 - x));

    const cdfValues = xValores.map(x => 1 - Math.pow(1 - p, x));

    const pmfData = [{
        type: 'bar',
        x: xValores,
        y: pmfValues,
        name: 'Função de Massa de Probabilidade (PMF)'
    }];

    const pmfLayout = {
        title: 'Função de Massa de Probabilidade (PMF)',
        xaxis: { title: 'Valores de x' },
        yaxis: { title: 'Probabilidade' }
    };

    Plotly.newPlot('pmfPlot', pmfData, pmfLayout);

    const cdfData = [{
        type: 'scatter',
        mode: 'lines',
        x: xValores,
        y: cdfValues,
        name: 'Função de Probabilidade Acumulada (CDF)'
    }];

    const cdfLayout = {
        title: 'Função de Probabilidade Acumulada (CDF)',
        xaxis: { title: 'Valores de x' },
        yaxis: { title: 'Probabilidade Acumulada' }
    };

    Plotly.newPlot('cdfPlot', cdfData, cdfLayout);
})