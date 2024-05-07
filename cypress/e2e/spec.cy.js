/*
Realizar una prueba funcional automatizada (Prueba E2E) de un flujo de compra en la página
https://www.demoblaze.com/ que incluya:

1. Agregar dos productos al carrito.
2. Visualizar el carrito.
3. Completar el formulario de compra.
4. Finalizar la compra.
*/

describe("Shopping", () => {
  it("should add two products to the cart, view the cart, complete the purchase form and finish the purchase", () => {
    cy.visit("https://www.demoblaze.com/");

    cy.get(".list-group-item").contains("Phones").click();
    cy.get(".card-title").contains("Samsung galaxy s6").click();
    cy.get(".btn-primary").click();

    cy.get(".list-group-item").contains("Laptops").click();
    cy.get(".card-title").contains("Dell i7 8gb").click();
    cy.get(".btn-primary").click();

    cy.get("#cartur").click();
    cy.get(".btn-success").click();

    cy.get("#name").type("John Doe");
    cy.get("#country").type("United States");
    cy.get("#city").type("New York");
    cy.get("#card").type("1234567890");
    cy.get("#month").type("12");
    cy.get("#year").type("2023");
    cy.get(".btn-primary").click({ multiple: true })

    cy.get(".sweet-alert").should("be.visible");
    cy.get(".confirm").click();
  });
});
