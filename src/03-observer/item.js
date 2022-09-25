document.querySelector('#add').addEventListener('click', add);

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyAll(data) {
    this.observers.forEach((obs) => {
      obs.notify(data);
    });
  }
}

class ItemsSubject extends Subject {
  constructor() {
    super();

    this.data = [];
  }

  add(item) {
    this.data.push(item);
    this.notifyAll(this.data);
  }
}

class HtmlElementObserver {
  constructor(element) {
    this.element = element;
  }

  notify(data) {
    this.element.innerHTML = data.reduce((acc, e) => {
      return (
        acc +
        `
        <p>
          ${e}
        </p>
      `
      );
    }, '');
  }
}

const items = new ItemsSubject();
const div1Observer = new HtmlElementObserver(div1);
const div2Observer = new HtmlElementObserver(div2);
const div3Observer = new HtmlElementObserver(div3);

items.subscribe(div1Observer);
items.subscribe(div2Observer);
items.subscribe(div3Observer);

function add() {
  const name = txtName.value;
  items.add(name);
}
