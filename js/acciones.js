// JavaScript Document
$(document).ready(function(e) {
	//document.addEventListener("deviceready", function(){
		
	var abecedario= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	var oportunidades = 0;
	var palabraoculta = "";
	var palabraactual= "";
	var temporal = "";
	var posicionactual = 0;
	var letraactual = 0;
	var encontrada  =0;
	var palabras = []; 
	
	$('#btnenviar').on('click',function(){
		alert ($('#optcolecciones').val() + " " +$('#optpalabras').val()+ " " +$('#txtip').val());
		obtenerpalabras();
	});//enviar
	
	
	function obtenerpalabras () {
		$.when($.post("http://" + $('#txtip').val() + "/ahorcado/obtenerpalabras.php",{cual: $('#optcolecciones').val(), cuantas: $('#optpalabras').val()})).then(function exito(datos){
				palabras.empty;
				palabras=JSON.parse(datos);
		}, function error(){
			alert("Error");
		});		
	}
	
	function obtenercolecciones(txtip) {
		return $.post("http://" + txtip + "/ahorcado/obtenercolecciones.php", function(){});
	}
	
	$('#btnbuscarc').on('click',function(){
		$('#cargando').show();
		$.when(obtenercolecciones($('#txtip').val())).then(function successHandler(datos){var arreglo=JSON.parse(datos);
		
			for(var i=0; i<arreglo.length; i++){
				var option = new Option(arreglo[i].coleccion, arreglo[i].coleccion);
				$('#optcolecciones').append(option);
			}
			$('#optcolecciones').trigger("change");
			
		},function errorHandler(){
			$('#cargando').hide();
			alert("Error");
		});
		return false;
    });//clickbtn
	
	function inicializarvariables(){
		encontrada = 0;
		oportunidades = 6;
		temporal = "";
		posicionactual = 0;
		letraactual = 0;
		palabraoculta = palabras[encontrada].textoPalabra.toUpperCase();
		palabraactual = ocultarpalabra(palabraoculta);
		$('#imagen').attr('src','images/' + oportunidades + '.png');
		$('#palabra').text(palabraactual);
		$('#actual').text(abecedario[posicionactual]);
	}
	
	$('#btncomenzar').on('click',function(){
		inicializarvariables();
	});

	function ocultarpalabra(palabra){
		palabraactual = "";
		for (var x=0; x<palabra.length; x++){
			if(abecedario.includes(palabra.charAt(x)))
				{
					palabraactual = palabraactual + "_";
				}
			else
				{
					palabraactual = palabraactual + palabra.charAt(x);
				}
			}
		return palabraactual;
	}

	$('#anterior').on('click', function(){
		if (posicionactual > 0)
		{
			posicionactual = posicionactual - 1;
		}
		else
		{
			posicionactual = 26;
		}
		$('#actual').text(abecedario[posicionactual]);
	});
	
	$('#siguiente').on('click', function(){
		if (posicionactual < 26)
		{
			posicionactual = posicionactual + 1;
		}
		else
		{
			posicionactual = 0;
		}
		$('#actual').text(abecedario[posicionactual]);
	});

	$('#actual').on('click', function(){
		letraactual = $('#actual').html();
		temporal = "";
		for (var y=0; y<palabraoculta.length; y++)
		{
			if (abecedario.includes(palabra_oculta.charAt(y)))
			{
				if (palabraoculta.charAt(y)==letraactual.charAt(0))
				{
					temporal = temporal + letraactual;
				}
				else
				{
					temporal = temporal + palabraactual.charAt(y);
				}
			}
			else
			{
				temporal = temporal + palabraoculta.charAt(y);
			}
		}
		
		$('#palabra').html(temporal);
		
		if (palabraactual != temporal) //acierto
		
		{
			palabra_actual = temporal;
			if (palabraoculta == palabraactual)
			{
				//win
			}
		}
	
		else
		{
			oportunidades = oportunidades - 1;
			$('#imagen').attr('src','images/' + oportunidades + '.png');
			if (oportunidades<=0)
			{
				//fin
			}
		}
	});
//});	
}); //ready