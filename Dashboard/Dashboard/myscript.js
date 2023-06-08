$(document).ready(function () {
	// Adiciona a tabela DataTable com plugin Tabledit
	var t = $('#table').DataTable({
		"order": [[0, "desc"]],
		"paging": true,
		"searching": false,
		"scrollX": false,
		"columns": [
			{ "data": "date" },
			{ "data": "temp" },
			{ "data": "humidity" }
		]
	});

	// Looping para obter a atualização das leituras do sensor de temperatura e umidade
	setInterval(function () {
		$.get('http://endereco-do-seu-esp32/temphum', function (data) {
			// Insere os dados na tabela
			t.row.add({
				"date": new Date().toLocaleString(),
				"temp": data.temperature + "°C",
				"humidity": data.humidity + "%RH"
			}).draw();
		});
	}, 10000);

	// Adiciona funções para controlar os botões toggle dos relés
	$("#relay1").click(function () {
		$.post("http://endereco-do-seu-esp32/relay1", { status: this.checked ? "ON" : "OFF" });
	});

	$("#relay2").click(function () {
		$.post("http://endereco-do-seu-esp32/relay2", { status: this.checked ? "ON" : "OFF" });
	});

	// Adicione mais funções para cada relay na sua dashboard
});