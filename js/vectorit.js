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

                $(".infoAuto").fadeOut(function() {
                    $(".infoCasa").fadeIn();
                });
            }
            else {
                $(".datosCasa").fadeOut(function() {
                    $(".datosAuto").fadeIn();
                });

                $(".infoCasa").fadeOut(function() {
                    $(".infoAuto").fadeIn();
                });
            }
        }
    });

    $("#txtCUIT").change(function() {
        var cuit = $("#txtCUIT").val().trim();
        var url = "https://soa.afip.gob.ar/sr-padron/v2/persona/" + cuit;

        $.get(url, function(data) {
            if (data.success) {
                $(".resultadoCuit").html(data.data.nombre);
            }
            else {
                $("#resultadoCuit").html("Error al procesar su CUIL/CUIT, por favor verifique el dato ingresado.");
                $("#txtCUIT").focus();
            }
        });
    });

    $("form").submit(function() {
		if (($("#resultadoCuit").html().indexOf("Error") > -1) || ($("#resultadoCuit").html() == '')) {
			alert("Antes de continuar debe ingresar un CUIT válido!");
			$("#txtCUIT").focus();
			return false;
		}

        $('#prestamoON').fadeIn();

        setTimeout(function() {
            var mensaje = "";
            var divOk = "";

            if (this.id == "frmDatosCasa") {
                divOk = "Casa";
                mensaje+= "Registro de solicitud de crédito para vivienda<br><br>";
            }
            else {
                divOk = "Auto";
                mensaje+= "Registro de solicitud de crédito para auto<br><br>";
            }
            mensaje+= "Apellido y Nombre: " + $('#resultadoCuit').html().trim() + "<br>";
            mensaje+= "CUIT: " + $("#txtCUIT").val().trim() + "<br>";
            mensaje+= "Email: " + $("#txtEmail").val().trim() + "<br>";
            mensaje+= "Provincia: " + $("#cmbProvincia").val() + "<br>";
            mensaje+= "Ciudad: " + $("#txtCiudad").val().trim() + "<br>";
            mensaje+= "Telefono: " + $("#txtTelefono").val().trim() + "<br>";
            mensaje+= "Horario de contacto: de " + $("#horaDesde").val() + " a " + $("#horaHasta").val() + "<br>";

            if (this.id == "frmCasa") {
                mensaje+= "Ingreso aproximado: " + $("#cmbIngreso").val().trim() + "<br>";
                mensaje+= "Tipo de ingreso: " + $('input[name = "radIngreso"]:checked').val() + "<br>";
                mensaje+= "Tipologia: " + $("#txtMonto").val().trim() + "<br>";
            }
            else {
                mensaje+= "Marca de auto: " + $("#cmbMarca").val().trim() + "<br>";
                mensaje+= "Modelo de auto: " + $('#cmbModelo').val().trim() + "<br>";
                mensaje+= "Dispone de usado: " + $("#txtMonto").val().trim() + "<br>";
            }
            mensaje+= "Valor de cuota que puede pagar: " + $("#txtCuota").val().trim() + "<br>";

            mensaje+= "Consulta: " + $("#txtConsulta").val().trim() + "<br>";

            var frmData = new FormData();
            frmData.append("Nombre", $('#resultadoCuit').html().trim());
            frmData.append("Email", $("#txtEmail").val().trim());
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