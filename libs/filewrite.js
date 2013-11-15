function gotFS(fileSystem) {
        fileSystem.root.getFile("db_spooners.csv", {create: true, exclusive: false}, gotFileEntry, fail);
    }
function gotCSV(fileSystem){
		fileSystem.root.getFile("db_spooners.csv",{create: false, exclusive: false},gotFileEntryAppend, fail);
	}
    function gotFileEntry(fileEntry) {
        fileEntry.createWriter(gotFileWriter, fail);
    }

    function gotFileEntryAppend(fileEntry) {
        fileEntry.createWriter(appendFile, fail);
    }
    function gotFileWriter(writer) {
    	writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write('"tarjeta","nombre","apellido1","apellido2","cedula","genero","nacimiento","provincia","canton","distrito","direccion","email","celular","tel_casa","tel_trabajo","trabajo1","trabajo2","trabajo3","puesto1","puesto2","puesto3","enviar_info","por_sms","por_email"');
    }
    function appendFile(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.seek(writer.length);
        writer.write('"'+tarjeta+'","'+nombre+'","'+apellido1+'","'+apellido2+'","'+cedula+'","'+genero+'","'+nacimiento+'","'+provincia+'","'+canton+'","'+distrito+'","'+direccion+'","'+email+'","'+celular+'","'+tel_habitacion+'","'+tel_trabajo+'","'+trabajo1+'","'+trabajo2+'","'+trabajo3+'","'+puesto1+'","'+puesto2+'","'+puesto3+'","'+promo+'","'+medios_email+'","'+medios_sms+'"');
    };    
    function fail(error) {
        console.log(error.code);
    }