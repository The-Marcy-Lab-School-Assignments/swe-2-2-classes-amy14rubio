class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
  getPerimeter() {
    return 2 * this.length + 2 * this.width;
  }
  isSquare() {
    return this.length === this.width;
  }
}

class Vehicle {
  passengers = [];
  color = "black";
  constructor(type, capacity, color) {
    this.type = type;
    this.capacity = capacity;
    if (color) this.color = color;
  }
  paint(color) {
    this.color = color;
    return this.color;
  }
  addPassenger(passenger) {
    if (this.passengers.length < this.capacity) {
      this.passengers.push(passenger);
      return this.passengers.length;
    }
    return -1;
  }
}

class PasswordManager {
  #password = "";
  constructor(password) {
    this.#password = password;
  }
  checkPassword(attempt) {
    return attempt === this.#password;
  }
  setPassword(oldPassword, newPassword) {
    if (oldPassword === this.#password) {
      this.#password = newPassword;
      return true;
    }
    return false;
  }
}

class TodoList {
  #items = [];
  constructor(title) {
    this.title = title;
  }
  addItem(description) {
    this.#items.push(description);
    return this.#items.length;
  }
  removeItem(description) {
    const index = this.#items.findIndex((item) => item === description);
    if (index === -1) return null;
    this.#items.splice(index, 1);
    return description;
  }
  getItems() {
    return [...this.#items];
  }
}

class BankAccount {
  #balance = 0;
  static #totalBalance = 0;
  constructor(firstName, lastName, balance) {
    this.firstName = firstName;
    this.lastName = lastName;
    if (balance) this.#balance = balance;
    BankAccount.#totalBalance += this.#balance;
  }
  showBalance() {
    return `Your balance is $${this.#balance.toFixed(2)}`;
  }
  deposit(amount) {
    this.#balance += amount;
    BankAccount.#totalBalance += amount;
    return `Your balance is $${this.#balance.toFixed(2)}`;
  }
  withdraw(amount) {
    if (amount > this.#balance) return `You do not have enough funds.`;
    this.#balance -= amount;
    BankAccount.#totalBalance -= amount;
    return `Your balance is $${this.#balance.toFixed(2)}.`;
  }
  static getTotalHoldings() {
    return BankAccount.#totalBalance;
  }
}

module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
