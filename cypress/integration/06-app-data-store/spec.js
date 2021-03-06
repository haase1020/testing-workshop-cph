/// <reference types="cypress" />
// application should be running at port 3000
// and the "localhost:3000" is set as "baseUrl" in "cypress.json"
beforeEach(() => {
  cy.request('POST', '/reset', {
    todos: []
  })
})
beforeEach(() => {
  cy.visit('/')
})
/**
 * Adds a todo item
 * @param {string} text
 */
const addItem = text => {
  cy.get('.new-todo').type(`${text}{enter}`)
}
it('creates an item with id 1', () => {
  cy.server()
  cy.route('POST', '/todos').as('new-item')

  // TODO change Math.random to be deterministic

  // STEPS
  // get the application's "window" object using cy.window
  // then change its Math object and replace it
  // with your function that always returns "0.1"

  addItem('something')
  // confirm the item sent to the server has the right values
  cy.wait('@new-item').its('request.body').should('deep.equal', {
    id: '1',
    title: 'something',
    completed: false
  })
})

// stub function Math.random using cy.stub
it('creates an item with id using a stub', () => {
  // get the application's "window.Math" object using cy.window
  // replace Math.random with cy.stub and store the stub under an alias
  // create a todo using addItem("foo")
  // and then confirm that the stub was called once
})

it('puts the todo items into the data store', () => {
  // application uses data store to store its items
  // you can get the data store using "window.app.$store.state.todos"
  // add a couple of items
  // get the data store
  // check its contents
})
