describe('suggested elements', () => {

    it.skip('google search', () => {
        cy.visit('https://www.google.com');
        cy.get('#L2AGLb > .QS5gu').click(); // submit the cookies
        cy.get("input[name='q']").type('usa');
        cy.wait(3000);
        cy
            .get('li span b') // getting the list of bold items
            .contains('today') // choosing the one that contains 'today'
            .click(); // then clicking on it
        cy.wait(3000);

        /*li span b :
        team
        today
        cars
        time
        */
    })

    it('automation practice . com ', () => {
        cy.visit("http://automationpractice.pl/index.php")
        cy.get("input[id='search_query_top']").type('dress')
        cy.wait(5000)
        // METHOD 1 is locate the one of the suggested option
        //Then click on it
        // cy
        // .get('.ac_results > ul > :nth-child(2)')
        // .click()


        //METHOD 2 is to use contains
        //and click on it
        cy
            .get('.ac_results') //Summer Dresses > Printed Summer,Evening Dresses > Printed ,Summer Dresses > Printed Summer ,..
            .contains('Printed') //Click on the 1st element if there are multiple match
            .click()
        cy.wait(5000)

        //Assertion
        cy
            .get("h1[itemprop='name']")
            .should('be.visible')
    })
})