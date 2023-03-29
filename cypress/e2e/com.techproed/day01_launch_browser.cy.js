describe('Go to the application', () => {
    beforeEach(() => {
        cy.visit('https://qa-environment.crystalkeyhotels.com/');
    });

    it('Test Case 1', () => {
        // Going to login page and verifying the URL contains '/Account/Logon'
        cy.contains('Log in').click();
        cy.url().should('include', '/Account/Logon');

        // Logging in with credentials and verifying the URL and page title
        cy.get('#UserName').type('manager');
        cy.get('#Password').type('Manager2!');
        cy.get('#btnSubmit').click();
        cy.url().should('include', '/Admin/UserAdmin');
        cy.title().should('eq', 'Admin - ListOfUsers');
    });
});