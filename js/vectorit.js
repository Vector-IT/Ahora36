function cargarModelos(marca) {
    var salida = "";

    switch (marca) {
        case "Chevrolet":
            salida+= "<option>Agile</option>";
            salida+= "<option>Camaro</option>";
            salida+= "<option>Captiva</option>";
            salida+= "<option>Classic</option>";
            salida+= "<option>Cobalt 2016</option>";
            salida+= "<option>Cruze</option>";
            salida+= "<option>Montana</option>";
            salida+= "<option>Nuevo Cruze 5</option>";
            salida+= "<option>Onix</option>";
            salida+= "<option>Onix Activ</option>";
            salida+= "<option>Onix Joy</option>";
            salida+= "<option>Prisma</option>";
            salida+= "<option>Prisma Joy</option>";
            salida+= "<option>S10 Cabina Doble</option>";
            salida+= "<option>S10 Cabina Simple</option>";
            salida+= "<option>S10 High Country</option>";
            salida+= "<option>Sonic 4</option>";
            salida+= "<option>Sonic 5</option>";
            salida+= "<option>Spark</option>";
            salida+= "<option>Spin</option>";
            salida+= "<option>Tracker</option>";
            salida+= "<option>Trailblazer</option>";
            salida+= "<option>Otro Modelo</option>";        
            break;

        case "Citroen":
            salida+= "<option>2CV</option>";
            salida+= "<option>Air Cross</option>";
            salida+= "<option>Berlingo</option>";
            salida+= "<option>C-15</option>";
            salida+= "<option>C3</option>";
            salida+= "<option>C3 Picasso</option>";
            salida+= "<option>C4</option>";
            salida+= "<option>C4 Lounge</option>";
            salida+= "<option>C4 Picasso</option>";
            salida+= "<option>C5</option>";
            salida+= "<option>DS3</option>";
            salida+= "<option>DS4</option>";
            salida+= "<option>Grand C4 Picasso</option>";
            salida+= "<option>Jumper</option>";
            salida+= "<option>Mehari</option>";
            salida+= "<option>Xsara</option>";
            salida+= "<option>Xsara Picasso</option>";
            salida+= "<option>Otro Modelo</option>";
            break;

        case "Fiat":
            salida+= "<option>Grand Siena</option>";
            salida+= "<option>MOBI</option>";
            salida+= "<option>Palio Nuevo</option>";
            salida+= "<option>Palio Fire</option>";
            salida+= "<option>Punto</option>";
            salida+= "<option>Siena EL</option>";
            salida+= "<option>Weekend</option>";
            salida+= "<option>Weekend Adventure</option>";
            salida+= "<option>Ducato</option>";
            salida+= "<option>Fiorino</option>";
            salida+= "<option>Strada</option>";
            salida+= "<option>Toro</option>";
            salida+= "<option>Uno Cargo</option>";
            salida+= "<option>Otro Modelo</option>";        
            break;
            
        case "Ford":
            salida+= "<option>Ka</option>";
            salida+= "<option>Fiesta</option>";
            salida+= "<option>Focus</option>";
            salida+= "<option>Ranger</option>";
            salida+= "<option>EcoSport</option>";
            salida+= "<option>Otro Modelo</option>";        
            break;
            
        case "Peugeout":
            salida+= "<option>106</option>";
            salida+= "<option>2008</option>";
            salida+= "<option>205</option>";
            salida+= "<option>206</option>";
            salida+= "<option>207</option>";
            salida+= "<option>207 Compact</option>";
            salida+= "<option>208</option>";
            salida+= "<option>3008</option>";
            salida+= "<option>306</option>";
            salida+= "<option>307</option>";
            salida+= "<option>308</option>";
            salida+= "<option>308 Hatchback</option>";
            salida+= "<option>403</option>";
            salida+= "<option>404</option>";
            salida+= "<option>405</option>";
            salida+= "<option>406</option>";
            salida+= "<option>407</option>";
            salida+= "<option>408</option>";
            salida+= "<option>5008</option>";
            salida+= "<option>504</option>";
            salida+= "<option>505</option>";
            salida+= "<option>508</option>";
            salida+= "<option>607</option>";
            salida+= "<option>807</option>";
            salida+= "<option>Boxer</option>";
            salida+= "<option>Expert</option>";
            salida+= "<option>Hoggar</option>";
            salida+= "<option>Partner</option>";
            salida+= "<option>RCZ</option>";
            salida+= "<option>Otro Modelo</option>";        
            break;
            
        case "Renault":
            salida+= "<option>Clio</option>";
            salida+= "<option>Clio Mio</option>";
            salida+= "<option>Duster</option>";
            salida+= "<option>Express</option>";
            salida+= "<option>Fluence</option>";
            salida+= "<option>Kangoo</option>";
            salida+= "<option>Kangoo 2</option>";
            salida+= "<option>Koleos</option>";
            salida+= "<option>Laguna</option>";
            salida+= "<option>Latitude</option>";
            salida+= "<option>Logan</option>";
            salida+= "<option>Master</option>";
            salida+= "<option>Megane</option>";
            salida+= "<option>Megane III</option>";
            salida+= "<option>Rodeo</option>";
            salida+= "<option>Sandero</option>";
            salida+= "<option>Sandero Stepway</option>";
            salida+= "<option>Scenic</option>";
            salida+= "<option>Symbol</option>";
            salida+= "<option>Torino</option>";
            salida+= "<option>Trafic</option>";
            salida+= "<option>Twingo</option>";
            salida+= "<option>Otro Modelo</option>";
            break;
            
        case "Volkswagen":
            salida+= "<option>Amarok</option>";
            salida+= "<option>Beetle</option>";
            salida+= "<option>Bora</option>";
            salida+= "<option>CrossFox</option>";
            salida+= "<option>Fox</option>";
            salida+= "<option>Gol</option>";
            salida+= "<option>Golf</option>";
            salida+= "<option>New Beetle</option>";
            salida+= "<option>Passat</option>";
            salida+= "<option>Polo</option>";
            salida+= "<option>Saveiro</option>";
            salida+= "<option>Scirocco</option>";
            salida+= "<option>Sharan</option>";
            salida+= "<option>Suran</option>";
            salida+= "<option>Tiguan</option>";
            salida+= "<option>Touareg</option>";
            salida+= "<option>Transporter</option>";
            salida+= "<option>Up!</option>";
            salida+= "<option>Vento</option>";
            salida+= "<option>Voyage</option>";
            salida+= "<option>Otro Modelo</option>";
            break;
    }

    $("#cmbModelo").html(salida);
}

$(document).ready(function () {
    $(".btnTab").click(function() {
        if (!$(this).hasClass("btnActivo")) {
            $(".btnActivo").removeClass("btnActivo");
            $(this).addClass("btnActivo");

            var objeto = $(this).data("objeto");

            if (objeto == 'Casa') {
                $(".datosAuto").fadeOut(function() {
                    $(".datosCasa").fadeIn();
                });

                /*$(".infoAuto").fadeOut(function() {
                    $(".infoCasa").fadeIn();
                });*/
            }
            else {
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