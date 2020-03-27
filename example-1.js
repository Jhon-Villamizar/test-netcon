import { createAll, cleanConsole } from "./data";
const companies = createAll();
cleanConsole(1, companies);

// main function
const main = companies => {
	orderCompanies(companies);
	companies.forEach(company => {
		company.name = firstWordCapital(company.name)
		company.users.forEach(user => {

			if (user.firstName == undefined){
				user.firstName = "";
			}
			if (user.lastName == undefined){
				user.lastName = "";
			}
			user.firstName = firstWordCapital(user.firstName);
			user.lastName = firstWordCapital(user.lastName);
		});
		orderUsers(company.users);
	});
	return companies;
	
};

// function that replace first word
const firstWordCapital = name => {
	return name.replace(/\b\w/g, firstWord => firstWord.toUpperCase());
}

// function that sort by users amount
const orderCompanies = companies => {
	companies = companies.sort((x, y) => y.users.length - x.users.length);
}

// function that sort alphabeticly by first name
const orderUsers = users => {
	users = users.sort((x, y) => {
		if (x.firstName > y.firstName) {
			return 1;
		}
		if (x.firstName < y.firstName) {
			return -1;
		}
		return 0;
	});
}

// function that sort alphabeticly by first name
export const hasFirstWordUpperCase = user => {
	if (!user.firstName || !user.lastName) {
		return false;
	}

	var wordName = user.firstName.split('')[0];
	var wordLastName = user.lastName.split('')[0];
	if (wordName == wordName.toUpperCase() && wordLastName == wordLastName.toUpperCase()) {
		return true;
	}
	return false;
}

console.log("---- EXAMPLE 1 --- ", main(companies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.
