class Singleton {
  constructor() {
    this.random = Math.random();

    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
  }

  static getInstance() {
    return Singleton.instance;
  }
}

/* const singleton = new Singleton();
const singleton2 = new Singleton();

console.log(singleton.random);
console.log(singleton2.random);
console.log(singleton === singleton2);
 */

class WeekDays {
  daysEs = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
  ];

  daysEn = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  constructor(lang) {
    this.lang = lang;

    if (WeekDays.instance) {
      return WeekDays.instance;
    }

    WeekDays.instance = this;
  }

  getDays() {
    return this.lang === 'es' ? this.daysEs : this.daysEn;
  }
}

const weekDays = new WeekDays('en');
const weekDays2 = new WeekDays();

console.log(weekDays.getDays());
console.log(weekDays2.getDays());
