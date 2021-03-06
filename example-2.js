import {cleanConsole, createAll} from './data';
const companies = createAll();

cleanConsole(2, companies);

// main function
const main = (companies, hasCar) => {
	companies.forEach(company => {
    filterByHasCar(company, hasCar);
    changeLength(company);
  });
  
	return companies;
};

// function that filter by hascar
const filterByHasCar = (company, hasCar) => {
  company.users = company.users.filter(user => user.car === hasCar);
};

// function that change length of usersLength
const changeLength = (company) => {
  company.usersLength = company.users.length;
};


console.log('---- EXAMPLE 2 --- ', main(companies, true));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y el
// booleano "hasCar". Para cada "company" debe conservar solo
// "users" cuyo valor de atributo "car" es igual al parámetro del
// función "hasCar" y el atributo "usersLength" deben indicar el total de
// "users" correspondientes al parámetro "hasCar".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the variable "companies" and the
// boolean "hasCar". For each "company" you must keep only the
// "users" whose attribute value "car" is equal to the parameter of the
// "hasCar" function and the "usersLength" attribute must indicate the number of
// "users" corresponding to the "hasCar" parameter.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et le
// booléen "hasCar". Pour chaque "company" vous devez garder uniquement les
// "users" dont la valeur de l'attribut "car" est égal au paramètre de la
// fonction "hasCar" et l'attribut "usersLength" doit renseigner le nombre de
// "users" correspondant au paramètre "hasCar".
