// Assertion=> test seneryolarinda belirlenen adimlarin basarili olup olmadigini belirleyen dogrulama adimlaridir.

// Cypress Assertions
// 1. Implicit Assertion
// 2. Explicit Assertion
// 3. Yaygin Kullanilan Aseertion'lar

/*1. IMPLICIT ASSERTION
{ 
    Assertion, parent komut tarafindan object'e uygulandiginda buna Implicit Assertion denir.
    Ornek:
    cy.get('#loginButton').should('have.class', '.active').and('have.attr', 'href','/login')
}

/* 2. Explicit Assertions
{Explicit Assertion, eger acik bir ozneyi/nesneyi iletmenize izin verirse bu expect() ve asserts() ile kullanilmasina denir

    Ornek-1:
    expect(true).to.be.true
    Ornek-2:
    const employee={name:'Tom',age:30}
    asserts.isObject(employee, 'value is object')
}
/*3. Yaygin Kullanilan Assertions
{
    1. length: should('have.length',10)
    
    2. class : should('have.class', 'enabled')
              
               should('not.have.class', 'enabled')

    3. value: should('have.value',' Ahmet Kurcak')

    4. text content: should('contain', 'Ahmet')
                     should('not.contain','Kurcak')

    5. visibility: should('be.visible' )     
    
    6. state: should('be.checked')

    7. css dogrulama: should('not.have.css', 'display', 'none')
}*/

describe("Cypress Assertion Kullanimi", () => {
  it("Assertion Kullanim Ornekleri", () => {
    cy.visit("https://shopist.io/");
    cy.title("Shop.ist");
    cy.url("contain", "Shop");
    cy.get("#main section > a > div.jumbotron-box > div:nth-child(1)").should(
      "be.visible"
    );
    cy.get("#main section > a > div.jumbotron-box > div:nth-child(1)")
      .should("be.visible")
      .and("contain", "Shop");

    cy.get("#main section > a > div.jumbotron-box > div:nth-child(1)").should(
      "contain",
      "Shop"
    );
    cy.get("#main section > a > div.jumbotron-box > div:nth-child(1)").should(
      "have.text",
      "Shop the look"
    );

    cy.get("#main section > a > div.jumbotron-box > div:nth-child(1)").should(
      "have.length",
      1
    );
    cy.get("#main section > a > div.jumbotron-box > div:nth-child(1)")
      .its("length")
      .and("eq", 1);

    cy.get("#main section > a ").should(
      "have.attr",
      "href",
      "/department/chairs"
    );
  });
});
