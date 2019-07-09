describe('Expertlead broken link test', function(){

    it('test will find all broken links', function() {
    cy.visit('https://www.cypress.io/')
    cy.get('a').each(($href) => {
        
       // var baseURL = "https://www.cypress.io/"
        //cy.request($href).then((resp) => {
             
            
                cy.log($href)
             
       // expect(resp.status).to.eq(200)
             
       })

    })
})
