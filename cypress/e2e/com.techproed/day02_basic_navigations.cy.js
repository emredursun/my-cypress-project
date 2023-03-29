describe('navigations', () => {
    beforeEach(() => {
        cy.visit('https://qa-environment.crystalkeyhotels.com/');
    });

    it('back, forward, refresh', () => {
        // Going to the login page and then back to homepage
        cy.contains('Log in').click();
        cy.go('back');

        // Going forward to login page again, refreshing the page and going back to homepage again
        cy.go('forward'); // cy.go(1);
        cy.reload();    // cy.reload(true) this forces reload the page
        cy.go('back'); // cy.go(-1);
    });

    it('chaining the navigations', () => {
        // Chaining methods to go back and forth between pages
        cy.contains('Log in').click().go('back').go('forward').go('back');

        // Reloading the page and verifying if the login element is visible
        cy.reload(true).contains('Log in').should('be.visible');
    });
});