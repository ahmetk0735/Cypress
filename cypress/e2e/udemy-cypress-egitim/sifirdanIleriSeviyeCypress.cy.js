/*Sifirdan ileri Seviye 'Cypress Egitimi'

npm ve npx

{
NPM ( Node Package Manager) paket kurma, kaldirma, guncelleme ve bu paketler hakkinda bilgi alabilme gibi islemleri yapabilmek icin gelistirilmis bir arac
}

{
NPX, yuklenen paketlerin, node modullerin yurutulmesi/ calistirilmasi icin gelistirilmis bir arac.

}  */

/*{

"name:"" udemy-cypress",
"version": "1.0.0",
"description":"",
"main":" cypress.config.js",


"scripts":{
"cy:open":"cypress open",
"cy:run":"cypress run"
"cy:spec":"cypress run --spec"
"cy:test:chrome":"cypress run --browser chorome",
"cy:test:firefox":"cypress run --browser firefox",
"cy:test:edge":"cypress run --browser edge",
"cy:verify":"cypress verify"
}
"author":"Ahmet Kurcak",
"license":"ISC"
}
*/
// PAGE OBJECT MODEL (POM), siniflarin sayfalari temsil ettigi gelistirmede kullanilan bir

/* Cypress Custom Commands (Ozel komutlar), Cypress'in varsayilan komutlari degil, kullanicilar tarafindan ozel komutlaridir. Bu ozellestirilmis komutlar, bir otomosyon akisinda tekrarlana test adimlarini olusturmak icin kullainilir.

{
Cypress.Commands.add('login',() =>{
    cy.get('#username').type('KullaniciAdi')
    cy.get('#password').type('Parola')
    cy.get('#loginBtn').click()
    
    })
    }

Cypress.Commands.add('login',(username,password) =>{
    cy.get('#username').type('username')
    cy.get('#password').type('password')
    cy.get('#loginBtn').click()
    
    })
    }
*/
/*

CYPRESS FIXTURES , Cypress bize verileri dis kaynaklardan yonlendirme ozelligi saglar. Mevcut otamasyon test frameworklerinden biri olan Data Driven Frameworks ( Veriye Dayali Carceveler) ile karsilastirma yapabiliriz.

data.json
{
"username":"denemeKullanici",
"password":"denemeParola",
"email":"deneme@abc.com"
}

*/

/* Alias ==> Birden cok kullanima sahip onemli bir bilesendir. Paylasmaniz gereken bir seyi TAKMA AD kullanmak icin .as() kullanmaliyiz.

Ornek-1
cy.fixture("loginData").as('credentials')
cy.get('@credentials')
Ornek-2
cy.get('tr').find('td').as('cols')
cy.get('@cols').first().click()

*/
/* THEN komutu, bir onceki komuttan elde edilen konu ile calismamizi saglar. Kisaca onceki komutun gelmesi ile baglanti kurup ve bu durumda onunla calismak icin kullanilir

cy.fixture("loginData").as('credentials')
cy.get('@credentials').then((data) => {
    cy.login(data.invalidUsername, data.validPassword)})

*/

/* EACH, her bir elementin/parcanin yenileme, onaylama,yazdirma vb. kosullarini saglama/uygulamak icin kullanilir.

.text(), .includes(), .push(), .wrap()

cy.fixture("loginData").as('credentials')
cy.get('@credentials').each(($el) => {
    cy.log($el.text()} ) 

    */

/*
WRAP,  Cyoress wrap komutu, icine yerlestirilmis nesneleri ve cozumlenmis degeri vermek icin kullanilir. Mesela type, bir nesneye veya jquery ogesine tiklayin gibi cypress komutlarini kullanmak istediginizde, cypress kullanmadan once onu wrap'lemek isteyebilirsiniz.
{
Ornek-1
//Varible
let message=' Sari yada Kirmizi'
cy.wrap(message).should('eq', 'Sari yada Kirmizi)
}
{
Ornek-2
// Object
Let Hayvan={name:"Aslan"}
cy.wrap(Hayvan).should('have.property','name','Aslan')
}
{
Ornek-3
//Array
let Hayvanlar=['Aslan','Kanarya',Kartal','Hamsi']
cy.wrap(HAyvanlar).should('include','Aslan')
}

/* XHR bir XML HTTP talebidir. Yontemleri bir web tarayicisi ile sunucu arasinda veri gonderen, nense olarak kullanilabilen bir Application Programming Interface (API) yani Uygulama Programlama Arayuzudur
{
cy.request('https://example.com').as('aba')
cy.get('@abc').should((response)=>{
    expect(response.body).to.have.length(100)
    expect()response}.to.have.property('headers')
    )}
    */
/*
Mochawesome, Javascript test framework'u mocha ile kullanim icin ozel bir raportordur. Node.js (>=10) uzerinde calisir ve test calistirmalarinizi gorsellestirmenize yardimci olacak bagimsiz bir HTML/CSS raporu olusturmak icin mochawesome-report-generator ile birlikte calisir.*/

/*
Session,   cy.session
{
Cypress, testler arasinda tarayici verilerini temizlemeye calisir, bu da her giristen once oturum acma ihtiyacina yol acar. Bunu, belirli cerezleri uygulamamizdan silmeye goz ardi etmek icin beforeEcah() kullanarak veya cerezler api kullanarak yapabiliriz.

Genellikle Test Otomosyonunda, her testen once oturum acma senaryosunu calistirmayi tekrarlayabiliriz, bu da test yurutme suremizi uzatabilir. Bu sorunu onlemk icin Cypress'in bir 'session' komutu var.

Cypress.Commands.add('login',(username,password)=>{
    cy.session([username,password],()=>{
        cy.visit('/login')
        cy.get('[data-test=name]').type(username)
        cy.get('[data-test=password]').type(password)
        cy.get('form').contains('Log In').click()
        })
        
        })


*/
