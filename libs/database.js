var db;	
	// Populate the database 
	//
    function populateDB(tx) {
        /*CREACION TABLA CLIENTES*/
    //	 tx.executeSql('DROP TABLE IF EXISTS CLIENTES');
         tx.executeSql('CREATE TABLE IF NOT EXISTS CLIENTES (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,tarjeta NUMERIC,nombre TEXT,apellido1 TEXT,apellido2 TEXT,cedula TEXT,genero TEXT,nacimiento TEXT,provincia TEXT,canton TEXT,distrito TEXT,direccion TEXT,email TEXT,celular TEXT,tel_casa TEXT,tel_trabajo TEXT,trabajo1 TEXT,trabajo2 TEXT,trabajo3 TEXT,puesto1 TEXT,puesto2 TEXT,puesto3 TEXT,enviar_info NUMERIC,por_sms NUMERIC,por_email NUMERIC)');
    }

    // Transaction error callback
    //
    function errorCB(tx, err) {
        console.log("Error processing SQL: "+err);
    }

    // Transaction success callback
    //
    function successCB() {
        console.log("success!");
    }
    function InsertDB(tx) {
        tx.executeSql('INSERT INTO CLIENTES (tarjeta,nombre,apellido1,apellido2,cedula,genero,nacimiento,provincia,canton,distrito,direccion,email,celular,tel_casa,tel_trabajo,trabajo1,trabajo2,trabajo3,puesto1,puesto2,puesto3,enviar_info,por_sms,por_email) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[tarjeta,nombre,apellido1,apellido2,cedula,genero,nacimiento,provincia,canton,distrito,direccion,email,celular,tel_habitacion,tel_trabajo,trabajo1,trabajo2,trabajo3,puesto1,puesto2,puesto3,promo,medios_email,medios_sms]);
   }