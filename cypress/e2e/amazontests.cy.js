
describe('Swivel tech test', () => {
  
  it('Should be able to run the tests', () => {
      cy.visit('https://www.amazon.com/');
      cy.get('#searchDropdownBox').select('Books',{force:true});
      cy.get('#twotabsearchtextbox').type('Automation');
      cy.wait(2000);
      cy.get('.s-suggestion-container').each(($el,$index,$list)=>{
        let sname= $el.text();
        if(sname=='automation'){
          cy.wrap($el).click();
        }
    });
     cy.get('i[class="a-icon a-icon-star-medium a-star-medium-4"]').click();
     cy.get('ul[data-csa-c-content-id="3291435011"] li span a div input').eq(0).click({force:true});
   

  });
})  