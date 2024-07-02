
    function abrirWebview() {
      // Oculta a tela de início
      document.getElementById('inicio').style.display = 'none';
      
      // Exibe o container da webview
      var webviewContainer = document.getElementById('webview-container');
      webviewContainer.style.display = 'block';
      
      // Configura o iframe para carregar o site desejado
      var webview = document.getElementById('webview');
      webview.src = 'https://acass543.github.io/AviatorBot2024';
    }