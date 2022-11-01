/* Se o serviceWorker for suportado pelo navegador */
if ("serviceWorker" in navigator) {
  /* Faça o navegador registrar */
  navigator.serviceWorker
    .register("sw-petshop.js")
    .then(function () {
      console.log("serviço worker foi registrado com sucesso");
    })
    .catch(function (error) {
      console.log("Erro no Service Worker: " + error.message);
    });
} else {
  console.log("Este navegador não suporta Sevice Worker");
}
