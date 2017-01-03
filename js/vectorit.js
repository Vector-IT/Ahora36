function cargarModelos(marca) {
    var salida = "";

    switch (marca) {
        case "CHEVROLET":
            salida+= "<option>SPARK</option>";
            salida+= "<option>AGILE</option>";
            salida+= "<option>CLASSIC</option>";
            salida+= "<option>ONIX JOY</option>";
            salida+= "<option>ONIX</option>";
            salida+= "<option>PRISMA JOY</option>";
            salida+= "<option>PRISMA</option>";
            salida+= "<option>SONIC</option>";
            salida+= "<option>COBALT</option>";
            salida+= "<option>NUEVO CRUZE 5</option>";
            salida+= "<option>CRUZE</option>";
            salida+= "<option>CAMARO</option>";
            salida+= "<option>MONTANA </option>";
            salida+= "<option>TRUCKER</option>";
            salida+= "<option>CAPTIVA</option>";
            salida+= "<option>TRAILBLAZER</option>";
            salida+= "<option>NUEVA S10</option>";
            salida+= "<option>SPIN</option>";
            salida+= "<option>OTRO</option>";
            break;

        case "CITROEN":
            salida+= "<option>C3</option>";
            salida+= "<option>C-Elyseé</option>";
            salida+= "<option>C4 Lounge</option>";
            salida+= "<option>C3 AirCross</option>";
            salida+= "<option>NUEVO C4 PICASSO</option>";
            salida+= "<option>NUEVO GRAND C4 PICASSO</option>";
            salida+= "<option>BERLINGO MULTISPACE</option>";
            salida+= "<option>DS 3</option>";
            salida+= "<option>DS 4 CROSSBACK</option>";
            salida+= "<option>OTRO</option>";
            break;

        case "FIAT":
            salida+= "<option>MOBI</option>";
            salida+= "<option>FIORINO</option>";
            salida+= "<option>DOBLÓ CARGO</option>";
            salida+= "<option>FIAT TORO</option>";
            salida+= "<option>LÍNEA</option>";
            salida+= "<option>GRAND SIENA</option>";
            salida+= "<option>STRADA</option>";
            salida+= "<option>FIAT IDEA</option>";
            salida+= "<option>500</option>";
            salida+= "<option>UNO CARGO</option>";
            salida+= "<option>DUCATO</option>";
            salida+= "<option>PUNTO</option>";
            salida+= "<option>SIENA EL</option>";
            salida+= "<option>WEEKEND ADVENTURE</option>";
            salida+= "<option>PALIO FIRE</option>";
            salida+= "<option>NUEVO PALIO</option>";
            salida+= "<option>OTRO</option>";
            break;
            
        case "FORD":
            salida+= "<option>NUEVO KA</option>";
            salida+= "<option>FIESTA</option>";
            salida+= "<option>FIESTA SEDAN</option>";
            salida+= "<option>FOCUS SEDAN</option>";
            salida+= "<option>FOCUS</option>";
            salida+= "<option>MONDEO</option>";
            salida+= "<option>ECOSPORT</option>";
            salida+= "<option>NUEVA RANGER</option>";
            salida+= "<option>NUEVO KUGA</option>";
            salida+= "<option>NUEVA TRANSIT CHASIS</option>";
            salida+= "<option>NUEVA TRANSIT FURGON</option>";
            salida+= "<option>NUEVO S-MAX (pronto)</option>";
            salida+= "<option>NUEVO KA+ (pronto)</option>";
            salida+= "<option>OTRO</option>";
            break;
            
        case "PEUGEOUT":
            salida+= "<option>PEUGEOT 208 5 PUERTAS</option>";
            salida+= "<option>PEUGEOT 208 GT</option>";
            salida+= "<option>PEUGEOT 308 5 PUERTAS</option>";
            salida+= "<option>PEUGEOT 308 ACTIVE</option>";
            salida+= "<option>PEUGEOT  408 ACTIVE</option>";
            salida+= "<option>PEUGEOT 508</option>";
            salida+= "<option>PEUGEOT 2008 SUV</option>";
            salida+= "<option>PEUGEOT 3008 SUV</option>";
            salida+= "<option>PEUGEOT5008</option>";
            salida+= "<option>PARTNER PATAGONICA</option>";
            salida+= "<option>PARTNER FURGON</option>";
            salida+= "<option>EXPERT FURGON</option>";
            salida+= "<option>OTRO</option>";
            break;
            
        case "RENAULT":
            salida+= "<option>CLIO MIO</option>";
            salida+= "<option>SANDERO  GT LINE</option>";
            salida+= "<option>SANDERO</option>";
            salida+= "<option>SANDERO STEPWAY</option>";
            salida+= "<option>LOGAN</option>";
            salida+= "<option>DUSTER</option>";
            salida+= "<option>DUSTER DAKAR (SERIE LIMITADA)</option>";
            salida+= "<option>FLUENCE</option>";
            salida+= "<option>MEGANNE III</option>";
            salida+= "<option>KANGOO</option>";
            salida+= "<option>CLIO WORK</option>";
            salida+= "<option>DUSTER OROCH</option>";
            salida+= "<option>KANGOO EXPRESS</option>";
            salida+= "<option>OTRO</option>";
            break;
            
        case "VOLKSWAGEN":
            salida+= "<option>NUEVO GOL</option>";
            salida+= "<option>NUEVO VOYAGE</option>";
            salida+= "<option>NUEVO SAVEIRO</option>";
            salida+= "<option>UP!</option>";
            salida+= "<option>NUEVO CROSS UP!</option>";
            salida+= "<option>FOX</option>";
            salida+= "<option>CROSSFOX</option>";
            salida+= "<option>SURAN</option>";
            salida+= "<option>SURAN CROSS</option>";
            salida+= "<option>GOLF</option>";
            salida+= "<option>GOLF VARIANT</option>";
            salida+= "<option>GOLF GTI</option>";
            salida+= "<option>POLO</option>";
            salida+= "<option>NUEVO VENTO GLI</option>";
            salida+= "<option>VENTO</option>";
            salida+= "<option>TIGUAN</option>";
            salida+= "<option>AMAROK</option>";
            salida+= "<option>TOUAREG</option>";
            salida+= "<option>NUEVO SCIROCCO GTS</option>";
            salida+= "<option>CC</option>";
            salida+= "<option>THE BEETLE</option>";
            salida+= "<option>CAMIONES Y BUSES</option>";
            salida+= "<option>OTRO</option>";
            break;
    }

    $("#cmbModeloAuto").html(salida);
}

$(document).ready(function () {
    $(".btnTab").click(function() {
        if (!$(this).hasClass("btnActivo")) {
            $(".btnActivo").removeClass("btnActivo");
            $(this).addClass("btnActivo");

            var objeto = $(this).data("objeto");

            if (objeto == 'Casa') {
				$(".txtObjeto").html("vivienda");

                $(".datosAuto").fadeOut(function() {
                    $(".datosCasa").fadeIn();
                });

                /*$(".infoAuto").fadeOut(function() {
                    $(".infoCasa").fadeIn();
                });*/
            }
            else {
				$(".txtObjeto").html("vehículo 0km");

                $(".datosCasa").fadeOut(function() {
                    $(".datosAuto").fadeIn();
                });

                /*$(".infoCasa").fadeOut(function() {
                    $(".infoAuto").fadeIn();
                });*/
            }
        }
    });

    $(".txtCUIT").change(function() {
        var cuit = $(".txtCUIT").val().trim();
        var url = "https://soa.afip.gob.ar/sr-padron/v2/persona/" + cuit;

        $.get(url, function(data) {
            if (data.success) {
                $(".resultadoCuit").html(data.data.nombre);
            }
            else {
                $(".resultadoCuit").html("Error al procesar su CUIL/CUIT, por favor verifique el dato ingresado.");
            }
        });
    });

    $("form").submit(function() {
        var divOk = "";

        if (this.id == "frmDatosCasa") {
            divOk = "Casa";
        }
        else {
            divOk = "Auto";
        }

		if (($("#resultadoCuit" + divOk).html().indexOf("Error") > -1) || ($("#resultadoCuit" + divOk).html() == '')) {
			alert("Antes de continuar debe ingresar un CUIT válido!");
			$("#txtCUIT" + divOk).focus();
			return false;
		}

        $('#prestamoON').fadeIn();

        setTimeout(function() {
            var mensaje = "";

            if (divOk == "Casa") {
                mensaje+= "Registro de solicitud de crédito para vivienda<br><br>";
            }
            else {
                mensaje+= "Registro de solicitud de crédito para auto<br><br>";
            }
            mensaje+= "Apellido y Nombre: " + $('#resultadoCuit' + divOk).html().trim() + "<br>";
            mensaje+= "CUIT: " + $("#txtCUIT" + divOk).val().trim() + "<br>";
            mensaje+= "Email: " + $("#txtEmail" + divOk).val().trim() + "<br>";
            mensaje+= "Provincia: " + $("#cmbProvincia" + divOk).val() + "<br>";
            mensaje+= "Ciudad: " + $("#txtCiudad" + divOk).val().trim() + "<br>";
            mensaje+= "Telefono: " + $("#txtTelefono" + divOk).val().trim() + "<br>";
            mensaje+= "Horario de contacto: de " + $("#horaDesde" + divOk).val() + " a " + $("#horaHasta" + divOk).val() + "<br>";

            if (divOk == "Casa") {
                mensaje+= "Ingreso aproximado: " + $("#cmbIngreso" + divOk).val().trim() + "<br>";
                mensaje+= "Tipo de ingreso: " + $('input[name = "radIngreso' + divOk + '"]:checked').val() + "<br>";
                mensaje+= "Tipologia: " + $("#txtMonto" + divOk).val().trim() + "<br>";
            }
            else {
                mensaje+= "Marca de auto: " + $("#cmbMarca" + divOk).val().trim() + "<br>";
                mensaje+= "Modelo de auto: " + $('#cmbModelo' + divOk).val().trim() + "<br>";
                mensaje+= "Dispone de usado: " + $("#txtMonto" + divOk).val().trim() + "<br>";
            }
            mensaje+= "Valor de cuota que puede pagar: " + $("#txtCuota" + divOk).val().trim() + "<br>";

            mensaje+= "Consulta: " + $("#txtConsulta" + divOk).val().trim() + "<br>";

            var frmData = new FormData();
            frmData.append("Nombre", $('#resultadoCuit' + divOk).html().trim());
            frmData.append("Email", $("#txtEmail" + divOk).val().trim());
            frmData.append("Mensaje", mensaje);

            if (window.XMLHttpRequest)
            {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else
            {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                    $('#prestamoON').hide();

                    if (xmlhttp.responseText.indexOf('Error') == -1) {
                        $('#frmDatos' + divOk).hide();

                        $("#prestamoOK" + divOk).fadeIn(function() {
                            var targetOffset = $("#prestamoOK" + divOk).offset().top-200;
                            $('html,body').animate({scrollTop: targetOffset}, 500);
                        });
                    }
                    else {
                        alert("Error al procesar, intente nuevamente.");
                    }
                }
            };

            xmlhttp.open("POST","php/enviarMail.php", true);
            xmlhttp.send(frmData);
        }, 5000);

        return false;
    });
});