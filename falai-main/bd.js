var localDB = null;
var mexendo = false;





//função que inicia a base de dados
function onInit(){
try {
if (!window.openDatabase) {
alert("Erro: Seu dispositivo não permite base de dados.");
}
else {
//chama as base de dados aqui
initDB();trabalho();tdstrab();
}
} 
catch (e) {
if (e == 2) {
alert("A versão da base de dados é inválida");
}
else {
alert("Erro desconhecido: "+ e);
}
return;
}
}

function initDB(){
var shortName = 'falai';
var version = '1.0';
var displayName = 'Falai';
var maxSize = 9065536; // Em bytes
localDB = window.openDatabase(shortName, version, displayName, maxSize);
}

//criar a tabela do conteudo
function trabalho(){
var query=("CREATE TABLE IF NOT EXISTS `trabalhos` "+
			"( `id_tr` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , "+
			"`tt_tr` VARCHAR(200) NOT NULL , "+
			" `txt_tr` TEXT NOT NULL );");
try {
localDB.transaction(function(transaction){
transaction.executeSql(query, [], nullDataHandler, errorHandler);
});
} 
catch (e) {
not("Erro ao criar a tabela "+ e +".");
return;
}
}

//add trabalho
function addtrb(tt, txt){
    var query = "INSERT INTO `trabalhos` (`id_tr`, `tt_tr`, `txt_tr`) "+
     		"VALUES (NULL, '"+tt+"', '"+txt+"');";
        try {
            localDB.transaction(function(transaction){
                transaction.executeSql(query, [], function(transaction, results){
                    if (!results.rowsAffected) {
                    }
                    else {
                        //inserção com sucesso
                        tdstrab();
                        $('title').html('Falaí | '+tt);
                    }
                }, errorHandler);
            });
        } 
        catch (e) {
            alert("Erro: Não foi possível criar o trabalho " + e );
        }
}

//todos trabalhos
function tdstrab(){
        var querysc = "SELECT * FROM `trabalhos` order by id_tr desc;";
 try {
localDB.transaction(function(transaction){

transaction.executeSql(querysc, [], function(transaction, results){
if(results.rows.length > 0){
	$('ul#trss').html('');
    for (var i = 0; i < results.rows.length; i++) {

    var row = results.rows.item(i);
    $('ul#trss').append('<li class="nav-item" style="width:100%;margin-bottom: 4px;" data-mi="'+row['id_tr']+'" onclick="chama('+row['id_tr']+')">'+
        '<a href="#" class="nav-link active" style="padding: 10px 6px 6px;" aria-current="page">'+
         ' <i  class="align-text-bottom fa fa-file" style="float: left;margin: 2px;"></i>'+
          '<form>'+
          '<div class="txti">'+
           '<input type="text" id="txtn" name="txt" value="'+row['tt_tr']+'" oninput="trocatitu('+row['id_tr']+',this.value)" data-id="'+row['id_tr']+'">'+
          '</div>'+
          '<div style="float: right;">'+
           '<i class="material-icons" data-bs-toggle="modal" data-bs-target="#elimn" onclick="elimna('+row['id_tr']+')" id="elm" title="Eliminar">close</i>'+
         '</div>'+
          '<div class="both"></div>'+
         ' </form>'+
        '</a>'+
      '</li>');
}

}else{
	$('ul#trss').html('');
}
}, function(transaction, error){

});
});
} 
catch (e) {
alert("Erro todos trabalhos "+ e);
}
}

//unico traballho
function untrabalho(id){
	        var querysc = "SELECT * FROM `trabalhos` where id_tr = '"+id+"';";
 try {
localDB.transaction(function(transaction){

transaction.executeSql(querysc, [], function(transaction, results){
if(results.rows.length > 0){
    for (var i = 0; i < results.rows.length; i++) {

    var row = results.rows.item(i);
    $('input[name=id]').val(id);
    edt.setData(row['txt_tr']);
    $('title').html('Falaí | '+row['tt_tr']);
}

}else{
}
}, function(transaction, error){

});
});
} 
catch (e) {
alert("Erro ao pegar unico trabalho com id "+ e);
}
}

//unico trabalho com tt
function untrtt(id){
	        var querysc = "SELECT * FROM `trabalhos` where tt_tr = '"+id+"';";
 try {
localDB.transaction(function(transaction){

transaction.executeSql(querysc, [], function(transaction, results){
if(results.rows.length > 0){
    for (var i = 0; i < results.rows.length; i++) {

    var row = results.rows.item(i);
    $('input[name=id]').val(row['id_tr']);
}

}else{
}
}, function(transaction, error){

});
});
} 
catch (e) {
alert("Erro ao pegar unico trabalho com txt"+ e);
}
}

//edttxt
function edttxt(txt, id){

	var query = "UPDATE `trabalhos` SET `txt_tr` ='"+txt+"' WHERE `trabalhos`.`id_tr` = "+id+";";
	try {
	localDB.transaction(function(transaction){
	transaction.executeSql(query, [], function(transaction, results){
	if (!results.rowsAffected) {
	    alert("Atualização não realizado.");
	}else {
	    //alert('Atualizado')
	}
	}, errorHandler);
	});
	}catch (e) {
	alert("Atualização não realizado "+ e);
	}

}

//edttit
function edttit(txt, id){

	var query = "UPDATE `trabalhos` SET `tt_tr` ='"+txt+"' WHERE `trabalhos`.`id_tr` = "+id+";";
	try {
	localDB.transaction(function(transaction){
	transaction.executeSql(query, [], function(transaction, results){
	if (!results.rowsAffected) {
	    alert("Atualização não realizado.");
	}else {
	    //alert('Atualizado')
	    $('title').html('Falaí | '+txt);
	}
	}, errorHandler);
	});
	}catch (e) {
	alert("Atualização não realizado "+ e);
	}

}

//deletar 
function deltr(id){
var query=("DELETE FROM `trabalhos` WHERE `trabalhos`.`id_tr` = "+id+";");
try {
localDB.transaction(function(transaction){
transaction.executeSql(query, [], nullDataHandler, errorHandler);
//window.localStorage.setItem("vc",1);
	$('input[name=id]').val('');
	edt.setData('');
	 $('#elimn').modal('hide');
	 tdstrab();
	 $('title').html('Falaí');
	 setTimeout(function() {
		  // chama a função após 3 segundos
		  mexendo = false;
		}, 5000);
	 
});
} 
catch (e) {
not("Erro ao criar a tabela", e +".",'danger');
return;
}
}
//tratando erros
errorHandler = function(transaction, error){
alert("Erro "+error.message);
return true;
}

nullDataHandler = function(transaction, results){
}
