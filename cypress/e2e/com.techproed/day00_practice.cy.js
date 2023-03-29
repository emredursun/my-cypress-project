describe("Go to the application", () => {
    beforeEach(() => {
        cy.visit("https://qa-environment.crystalkeyhotels.com/");
    });

    it("Cypress Basics Functionalities", () => {
        // Clicking on the 'Log in' link
        cy.contains('Log in').click();

        // Verifying if the user is on the 'Log in' page
        cy.url().should('include', 'Account/Logon');
        cy.title().should('include', 'Log in');
    });

    it("Login Functionality", () => {
        // Go to 'Log in' page
        cy.contains('Log in').click();

        // Find username and type 'manager'
        cy.get('#UserName').type('manager');

        // Find password and type 'Manager2!' 
        cy.get('#Password').type('Manager2!');

        // Clicking on the 'Log in' button
        cy.get('#btnSubmit').click();
    });
});