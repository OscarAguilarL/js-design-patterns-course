export class Person {
  private name: string;
  private lastname: string;
  private age: number;
  private country: string;
  private city: string;
  private hobbies: string[];

  constructor(
    name: string,
    lastname: string,
    age: number,
    country: string,
    city: string,
    hobbies: string[]
  ) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.hobbies = hobbies;
  }

  getFullName(): string {
    return `${this.name} ${this.lastname}`;
  }
}

interface IPersonBuilder {
  name: string;
  lastname: string;
  age: number;
  country: string;
  city: string;
  hobbies: string[];

  setName(name: string): IPersonBuilder;

  setLastname(lastname: string): IPersonBuilder;

  setAge(age: number): IPersonBuilder;

  setCountry(country: string): IPersonBuilder;

  setCity(city: string): IPersonBuilder;

  addHobbie(hobbie: string): IPersonBuilder;

  build(): Person;
}

class NormalPersonBuilder implements IPersonBuilder {
  name: string;
  lastname: string;
  age: number;
  country: string;
  city: string;
  hobbies: string[];

  constructor() {
    this.name = '';
    this.lastname = '';
    this.age = 0;
    this.country = '';
    this.city = '';
    this.hobbies = [];
  }

  reset() {
    this.name = '';
    this.lastname = '';
    this.age = 0;
    this.country = '';
    this.city = '';
    this.hobbies = [];
  }

  setName(name: string): IPersonBuilder {
    this.name = name;
    return this;
  }

  setLastname(lastname: string): IPersonBuilder {
    this.lastname = lastname;
    return this;
  }

  setAge(age: number): IPersonBuilder {
    this.age = age;
    return this;
  }

  setCountry(country: string): IPersonBuilder {
    this.country = country;
    return this;
  }

  setCity(city: string): IPersonBuilder {
    this.city = city;
    return this;
  }

  addHobbie(hobbie: string): IPersonBuilder {
    this.hobbies.push(hobbie);
    return this;
  }

  build(): Person {
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

class PersonDirector {
  private personBuilder: IPersonBuilder;

  constructor(personBuilder: IPersonBuilder) {
    this.personBuilder = personBuilder;
  }

  setPersonBuilder(personBuilder: IPersonBuilder) {
    this.personBuilder = personBuilder;
  }

  createSimplePerson(name: string, lastname: string) {
    this.personBuilder.setName(name).setLastname(lastname);
  }
}

// creacion 1
const personBuilder = new NormalPersonBuilder();
const person = personBuilder
  .setName('Oscar')
  .setLastname('Aguilar')
  .setAge(23)
  .setCountry('MX')
  .addHobbie('Programming')
  .build();

console.log(person);

// creacion con director
const director = new PersonDirector(personBuilder);
director.createSimplePerson('Juanito', 'Banana');
const simplePerson = personBuilder.build();
console.log(simplePerson);
