// Component
class ProductComponent {
  /**
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
  }

  getDetail() {
    return `${this.name}`;
  }
}

// decorator
class ProductDecorator {
  /**
   *
   * @param {ProductComponent} productComponent
   */
  constructor(productComponent) {
    this.productComponent = productComponent;
  }

  getDetail() {
    return this.productComponent.getDetail();
  }
}

class CommercialInfoProductDecorator extends ProductDecorator {
  /**
   * @param {ProductComponent} productComponent
   * @param {string} tradename
   * @param {string} brand
   */
  constructor(productComponent, tradename, brand) {
    super(productComponent);

    this.tradename = tradename;
    this.brand = brand;
  }

  getDetail() {
    return `${this.tradename} ${this.brand} ` + super.getDetail();
  }
}

// decorador 2
class StoreProductDecorator extends ProductDecorator {
  constructor(productComponent, price) {
    super(productComponent);

    this.price = price;
  }

  getDetail() {
    return super.getDetail() + ` ${this.price}`;
  }
}

// decorator 3
class HTMLProductDecorator extends ProductDecorator {
  getDetail() {
    return `
    <h1>Información del producto</h1>
    <p>${super.getDetail()}</p>
    `;
  }
}

// Ejecución
// component
const productComponent = new ProductComponent('Cerveza');
console.log(productComponent.getDetail());

// Decorator 1 con component
const commercialInfoProduct = new CommercialInfoProductDecorator(
  productComponent,
  'London Porter',
  "Fuller's"
);
console.log(commercialInfoProduct.getDetail());

// decorator 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetail());

// decorator 2 con decorator 1
const product = new StoreProductDecorator(commercialInfoProduct, 15000);
console.log(product.getDetail());

// decorator 3 con decorator 2 con decorator 1
const htmlProductDecorator = new HTMLProductDecorator(commercialInfoProduct);

myDiv.innerHTML = htmlProductDecorator.getDetail();
