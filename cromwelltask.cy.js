

describe('MyTestSuite',function()
{
    it('Verify Title Of The Page',function()
    {
        cy.visit('https://www.cromwell.co.uk/shop/abrasives/cutting/090901')
        
        cy.get('[aria-haspopup="listbox"]').should('have.value','10');

    })
     
    it('Item Drop Down',function()
    {
       
       cy.get('#mui-70546').select('25').should('have.value','25');
       
    })

    it('OutOfStockItem',function()
    {
        cy.get('#mui-70546').select('25').should(have.value,'25')
        cy.get('.jss40').click()
        cy.get('.MuiTypography-root jss1153 MuiTypography-h5').should('be.visible');

    })

    it('SortBy',function()
    {
        cy.visit('https://www.cromwell.co.uk/shop/abrasives/cutting/090901')
        cy.get('.Muiselect-root').click()
        cy.get('#sort').click()
        cy.get('.MuiTypography-root').should('be.visible');
    }
    
    )
    
})


