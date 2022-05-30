// class which contains object's attributes
class Car {
	constructor(img, denum, link, carburant, motor, cut_vit, cap_pas, pret) {
		this.img = img;
		this.denum = denum;
		this.link = link;
		this.carburant = carburant;
		this.motor = motor;
		this.cut_vit = cut_vit;
		this.cap_pas = cap_pas;
		this.pret = pret;
	}
}

//===================================================================================

// function which create nre table
function createTable(table_id) {
	var body = document.getElementById('cars_list');

	var div = document.createElement('div');
	div.setAttribute('id', 'div_list_'+table_id);

	var table = document.createElement('table');
	table.setAttribute('id', table_id);

	var tableBody = document.createElement('tbody');

	table.appendChild(tableBody);

	div.appendChild(table);

	body.appendChild(div);
}

//==============================================================================================

// function which insert new row in HTML table
function insertRow(table_id, object_name, denum, img_src, link, carburant, motor, cut_vit, cap_pas, pret) {

	// get table
	var table = document.getElementById(table_id);

	// insert new row in table
	var row0 = table.insertRow(0);
	var row1 = table.insertRow(1);
	var row2 = table.insertRow(2);

	// add cells in the row
	var cell0 = row0.insertCell(0);
	var cell1 = row1.insertCell(0);
	var cell2 = row2.insertCell(0);

	// add title as a link
	var a = document.createElement('a');
	a.setAttribute('href', link);
	a.innerHTML = object_name.denum;

	// add description of object with help of multi 'p'
	var p0 = document.createElement('p');
	p0.setAttribute('id', "id_carburant");
	p0.innerHTML = '<i class="fa fa-dashboard" aria-hidden="true"></i>' + " Carburant: " + object_name.carburant;

	var p1 = document.createElement('p');
	p1.innerHTML = '<i class="fa fa-cogs" aria-hidden="true"></i>' + " Motor: " + object_name.motor;

	var p2 = document.createElement('p');
	p2.innerHTML = '<i class="fa fa-list-ol" aria-hidden="true"></i>' + " Cutie viteze: " + object_name.cut_vit;

	var p3 = document.createElement('p');
	p3.innerHTML = '<i class="fa fa-users" aria-hidden="true"></i>' + " Capacitate pasageri: " + object_name.cap_pas;

	var p4 = document.createElement('p');
	p4.innerHTML = '<i class="fa fa-money" aria-hidden="true"></i>' + " Pret: " + object_name.pret;

	// add image
	var img = document.createElement('img');
	img.setAttribute('width', '300px');
	img.setAttribute('height', '200px');
	img.src = img_src;

	var a_img = document.createElement('a');
	a_img.setAttribute('download', object_name.denum);
	a_img.setAttribute('href', img_src);

	a_img.appendChild(img);

	cell0.appendChild(a_img);

	// add a simple line
	var hr = document.createElement('hr');

	// append all details in cells
	cell1.appendChild(a);
	cell1.appendChild(hr);
	cell2.appendChild(p0);
	cell2.appendChild(p1);
	cell2.appendChild(p2);
	cell2.appendChild(p3);
	cell2.appendChild(p4);
}

//==============================================================================================

// step 1: create table for an object | (table_id)
createTable("table_mercedes");
createTable("table_audi");
createTable("table_renault");
createTable("table_dacia_logan_mcv");
createTable("table_bmw_seria_3");
createTable("table_lada_4x4_urban");
createTable("table_vaz_2105");
createTable("table_toyota");


//============================================================================================
// step 2: create objects	

//img, denum, link, carburant, motor, cut_vit, cap_pas, pret
let car1 = new Car("mercedes.jpg", "Mercedes", "", "Diesel", "2.0", "automate", "5 seats", "16 EUR / day");

let car2 = new Car("audi.jpg", "Audi", "", "Benzine", "2.5", "automate", "5 seats", "16 EUR / day");

let car3 = new Car("renault.jpg", "Renault", "", "Diesel", "1.8", "mecanic", "5 seats", "13 EUR / day");

let car4 = new Car("dacia.jpg", "Dacia Logan MCV", "", "Benzine-LPG", "1.5", "manual", "5 seats", "12 EUR / day");

let car_bmw_seria_3 = new Car("bmw_seria_3.png", "BMW Seria 3", "", "Benzine", "3.0", "automate", "5 seats", "20 EUR / day");

let car_lada_4x4_urban = new Car("lada_4x4_urban.jpg", "Lada 4x4 Urban", "", "LPG", "1.3", "manual", "5 seats", "9 EUR / day");

let car_vaz_2105 = new Car("vaz_2105.jpg", "Vaz 2105", "", "Benzine", "1.2", "manual", "5 seats", "5 EUR / day");

let car_toyota = new Car("toyota.jpg", "Toyota", "", "Diesel", "2.2", "automate", "5 seats", "14 EUR / day");

//=======================================================================================================================================

// step 3: call the insertRow() function
insertRow("table_mercedes", car1, car1.denum, car1.img, car1.link, car1.carburant, car1.motor, car1.cut_vit, car1.cap_pas, car1.pret);

insertRow("table_audi", car2, car2.denum, car2.img, car2.link, car2.carburant, car2.motor, car2.cut_vit, car2.cap_pas, car2.pret);

insertRow("table_renault", car3, car3.denum, car3.img, car3.link, car3.carburant, car3.motor, car3.cut_vit, car3.cap_pas, car3.pret);

insertRow("table_dacia_logan_mcv", car4, car4.denum, car4.img, car4.link, car4.carburant, car4.motor, car4.cut_vit, car4.cap_pas, car4.pret);

insertRow("table_bmw_seria_3", car_bmw_seria_3, car_bmw_seria_3.denum, car_bmw_seria_3.img, car_bmw_seria_3.link, car_bmw_seria_3.carburant,
	car_bmw_seria_3.motor, car_bmw_seria_3.cut_vit, car_bmw_seria_3.cap_pas, car_bmw_seria_3.pret);

insertRow("table_lada_4x4_urban", car_lada_4x4_urban, car_lada_4x4_urban.denum, car_lada_4x4_urban.img, car_lada_4x4_urban.link, 
	car_lada_4x4_urban.carburant, car_lada_4x4_urban.motor, car_lada_4x4_urban.cut_vit, car_lada_4x4_urban.cap_pas, car_lada_4x4_urban.pret);

insertRow("table_vaz_2105", car_vaz_2105, car_vaz_2105.denum, car_vaz_2105.img, car_vaz_2105.link, car_vaz_2105.carburant,
	car_vaz_2105.motor, car_vaz_2105.cut_vit, car_vaz_2105.cap_pas, car_vaz_2105.pret);

insertRow("table_toyota", car_toyota, car_toyota.denum, car_toyota.img, car_toyota.link, car_toyota.carburant,
	car_toyota.motor, car_toyota.cut_vit, car_toyota.cap_pas, car_toyota.pret);

//======================================================================================================================================
