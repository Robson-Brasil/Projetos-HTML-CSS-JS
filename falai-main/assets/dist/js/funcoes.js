const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// Função para gerar um caractere aleatório
function gerarCaractereAleatorio() {
  return caracteres.charAt(Math.floor(Math.random() * caracteres.length));
}

function criatxt(){
	let textoAleatorio = "";
	// Loop para gerar o texto aleatório com 10 caracteres
	for (let i = 0; i < 10; i++) {
	  textoAleatorio += gerarCaractereAleatorio();
	}

	return textoAleatorio;
}


//find na li
function chama(id){
	untrabalho(id);
}

//teoc titulo
function trocatitu(id, txt){
	$('.tititulo').html('');
	$('.tititulo').append(txt);
	edttit(txt, id);
}

function elimna(id) {
	mexendo = true;
	$('input[name=idel]').val(id);

}
$('form#eliminar').submit(function(e){
	e.preventDefault();
	var idd = $('input[name=idel]').val();
	deltr(idd);
})

$('#add').click(function(){
	$('input[name=id]').val('');
	edt.setData('');
	$('.tititulo').html('');
	 $('#elimn').modal('hide');
	 tdstrab();
	 $('title').html('Falaí');
	 setTimeout(function() {
		  // chama a função após 3 segundos
		  mexendo = false;
		}, 5000);
	edt.focus();
})

//configurar o modo

//menu
if(window.localStorage.getItem("menu") == "" ){
	window.localStorage.setItem("menu", 0);
}

//boidy
if(window.localStorage.getItem("body") == "" ){
	window.localStorage.setItem("body", 0);
}

if(window.localStorage.getItem("menu") == 1){
	 $('#sidebarMenu').removeAttr('class');
	   $('#sidebarMenu').attr('class', 'col-md-3 col-lg-2 d-md-block sidebar collapse text-bg-dark');
	   $('input[name=menu]').attr('checked', 'checked');
	   $('.perfils strong').attr('style', 'color:#fff');
	}else{
	  $('#sidebarMenu').removeAttr('class');
	   $('#sidebarMenu').attr('class', 'col-md-3 col-lg-2 d-md-block sidebar collapse');
}

if(window.localStorage.getItem("body") == 1){
	 $('body').removeAttr('class');
	   $('body').attr('class', 'bg-dark');
	   $('body').attr('checked', 'checked');
	}else{
	  $('body').removeAttr('class');
}



$('input[name=menu]').change(function(){
	if($('input[name=menu]:checked').val() == 'on'){
		  window.localStorage.setItem("menu",1);
		   $('#sidebarMenu').removeAttr('class');
	   $('#sidebarMenu').attr('class', 'col-md-3 col-lg-2 d-md-block sidebar collapse text-bg-dark');
	   $('input[name=menu]').attr('checked', 'checked');
	    $('.perfils strong').attr('style', 'color:#fff');
	}else{
		window.localStorage.setItem("menu",0);
		  $('#sidebarMenu').removeAttr('class');
		   $('.perfils strong').attr('style', 'color:RGBA(33,37,41,var(--bs-bg-opacity,1))!important');
	   $('#sidebarMenu').attr('class', 'col-md-3 col-lg-2 d-md-block sidebar collapse');
	}
})



$('input[name=body]').change(function(){
	if($('input[name=body]:checked').val() == 'on'){
		  window.localStorage.setItem("body",1);
		  $('body').removeAttr('class');
	   $('body').attr('class', 'bg-dark');
	   $('body').attr('checked', 'checked');
	}else{
		window.localStorage.setItem("body",0);
		   $('body').removeAttr('class');
	}
})