describe('dropdown', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/dropdown');
    });

    it('dropdown test', () => {
        // Selecting options from dropdown and verifying selected value
        cy.get('#dropdown').select('Option 1').should('have.value', '1');
        cy.wait(2000);
        cy.get('#dropdown').select('Option 2').should('have.value', '2');
    });
});