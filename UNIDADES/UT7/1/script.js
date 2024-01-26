let ventanas = [];

  function abrirVentanaNoCaracteristicas(url) {
    let newWindow = window.open(url, '_blank');
    ventanas.push(newWindow);
  }

  function abrirVentanaConCaracteristicas(url, width, height, features) {
    let windowFeatures = `width=${width || 500},height=${height || 500},${features || ''}`;
    let newWindow = window.open(url, '_blank', windowFeatures);
    ventanas.push(newWindow);
  }


  function abrirVentanaConMasCaracteristicas(url, width, height, x) {
    let windowFeatures = `width=${width || 500},height=${height || 500},left=${x || 0}`;
    let newWindow = window.open(url, '_blank', windowFeatures);
    ventanas.push(newWindow);
  }
  function openFullScreen(url) {
    let newWindow = window.open(url, '_blank', 'fullscreen=yes');
    ventanas.push(newWindow);
  }

  function closeWindows() {
    ventanas.forEach(window => window.close());
    ventanas = [];
  }