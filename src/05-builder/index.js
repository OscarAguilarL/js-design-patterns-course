class Person {
  constructor(name, lastname, age, country, city, hobbies) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.hobbies = hobbies;
  }

  getFullName() {
    return `${this.name} ${this.lastname}`;
  }
}

class PersonBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.name = '';
    this.lastname = '';
    this.age = '';
    this.country = '';
    this.city = '';
    this.hobbies = [];
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setLastname(lastname) {
    this.lastname = lastname;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  setCountry(country) {
    this.country = country;
    return this;
  }

  setCity(city) {
    this.city = city;
    return this;
  }

  addHobbie(hobbie) {
    this.hobbies.push(hobbie);
    return this;
  }

  build() {
    const person = new Person(
      this.name,
      this.lastname,
      this.age,
      this.country,
      this.city,
      this.hobbies
    );
    this.reset();
    return person;
  }
}

const personBuilder = new PersonBuilder();
const oscar = personBuilder
  .setName('Oscar')
  .setLastname('Aguilar')
  .setAge(23)
  .setCountry('MX')
  .setCity('Pachuca')
  .addHobbie('Programming')
  .addHobbie('Reading')
  .build();

console.log(oscar);
