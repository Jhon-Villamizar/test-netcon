import {cleanConsole, createAll} from './data';
const companies = createAll();

cleanConsole(4, companies);

// main function
const main = (companies) => {
  var newUsers = createNewList(companies);
  orderUserByAge(newUsers);
  createNewObject(companies)
	return newUsers;
};

// function that create new list
export const createNewList = (companies) => {
  var newList = [];
  companies.forEach(company => {
		company.users.forEach(user => {
      user.company = company.name;
      newList.push(user);
		});
  });

  return newList;
}

// function that sort by age
const orderUserByAge = newUsers => {
	newUsers = newUsers.sort((x, y) => y.age - x.age);
}

// function that create new object
export const createNewObject = (companies) => {
  var newList = {};
  newList.size = createSize(companies);
  newList.average = createAverage(companies, newList.size);
  newList.hasCar = createTotalCars(companies);
  newList.averageWithCar = totalAgeWithCar(companies, newList.hasCar);
  return newList;
}

// function that calac length of users
const createSize = companies => {
  var size = 0;
	companies.forEach(company => {
    size += company.users.length;
  });
  return  size;
}

// function that calc average
const createAverage = (companies, users) => {
  var totalAge = 0;
	companies.forEach(company => {
    company.users.forEach(user => {
      totalAge += user.age;
		});
  });
  var average = totalAge/users;
  return  average;
}

// function that calc total cars
const createTotalCars = companies => {
  var totalcar = 0;
	companies.forEach(company => {
    company.users.forEach(user => {
      if(user.car === true) {
        totalcar++;
      }
		});
  });
  return  totalcar;
}

// function that calc average age by cars
const totalAgeWithCar = (companies,totalCar) => {
  var totalAge = 0;
	companies.forEach(company => {
    company.users.forEach(user => {
      if(user.car === true) {
        totalAge += user.age;
      }
		});
  });
  var average = totalAge/totalCar
  return  average;
}





console.log('---- EXAMPLE 4 --- ', main(companies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y agrupando
// todos los "users" de todas las "companies" en una sola tabla. Cada "user"
// debe tener un nuevo atributo "company" que tenga como valor el nombre de la
// dicha "company". Los "users" deben ordenarse de acuerdo con sus edad
// (de mayor a menor).

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the "companies" variable and grouping
// all "users" of all "companies" in a single table. Each "user"
// must have a new attribute "company" having for value the name of the "company"
// to which it belongs. The "users" must be sorted according to their
// age (from oldest to youngest).

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et regroupant
// tous les "users" de toutes les "companies" dans un seul tableau. Chaque "user"
// doit avoir un nouvel attribut "company" ayant pour valeur le nom de la "company"
// à laquelle il appartient. Les "users" doivent être triés en fonction de leur
// âge (du plus vieux au plus jeune).
