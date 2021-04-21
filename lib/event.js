/*
  EXERCISE Three
  1 - Run the script using `node lib/event.js`
  2 - Add a second employee, Jill
  3 - Run the script again and how the second employee helps process the line
  4 - Try playing with the parameters, changing how many employees and/or customers
      there are, or how long a customer takes to process.
*/

// events is part of the Node standard library.
// require allows for both standard library
// and installed dependencies to be used
const EventEmitter = require('events')

class Employee extends EventEmitter {
  constructor (name) {
    super()
    this.name = name
    this.on('next', () => {
      const customer = serviceCounter.nextCustomer()
      if (customer) {
        console.log(`${this.name}: Now serving ${customer.ticket}`)
        this.serve(customer)
      }
    })
  }
  serve (customer) {
    setTimeout(() => {
      this.emit('next')
    }, customer.time)
  }
}

class ServiceCounter {
  constructor (customers) {
    this.customers = customers
  }
  nextCustomer () {
    return this.customers.shift()
  }
}

const employees = [
  new Employee('Jack')
]

const customers = [{
  ticket: 86,
  time: 300
}, {
  ticket: 87,
  time: 200
}, {
  ticket: 88,
  time: 100
}, {
  ticket: 89,
  time: 500
}, {
  ticket: 90,
  time: 200
}]

const serviceCounter = new ServiceCounter(customers)

employees.forEach(employee => {
  employee.emit('next')
})