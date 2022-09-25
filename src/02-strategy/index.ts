export interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string) {
    return this.strategy.login(user, password);
  }
}

class LoginDBStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('Nos dirigimos a la DB');
    if (user === 'admin' && password === 'entra') {
      return true;
    }
    return false;
  }
}

class LoginServiceStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('Nos dirigimos a servicio de autenticación');
    if (user === 'admin' && password === 'entra') {
      return true;
    }
    return false;
  }
}

const auth = new LoginContext(new LoginDBStrategy());
let res = auth.login('admin', 'entras');
console.log(res);

auth.setStrategy(new LoginServiceStrategy());
res = auth.login('admin', 'entras');
console.log(res);
