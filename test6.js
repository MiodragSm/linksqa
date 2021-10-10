// Auth: MiodragSm
// Template za testiranje osnovnih funkcija aplikacije, v0.1 2021
// Dodatne informacije: https://seleniumhq.github.io/selenium/docs/api/javascript/

var {Builder, By, Key, until, error, NoSuchElementError} = require('selenium-webdriver');
const assert = require("assert");
var myWindowHandle; // za broj otvorenih prozora u browseru/sesiji;
var ispravnaReg = 'Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.';
var neispravnaReg = 'Navedena elektronska pošta/adresa postoji';
var actRegistracija = null;
var URL = "https://www.links.hr/hr/register";

var qcast = require ('./qcast.js');
var randomEmail = 'petrA_' + qcast.generisiString(10) + '@live.com';  //Unique e-mail koji se koristi pri svakoj test registraciji.
console.log('Registracioni e-mail ---> ', randomEmail);

driver = new Builder().forBrowser('chrome').build();
driver.get(URL);

describe("Corporate Registration - verify that all the required/mandatory fields are marked with '*' against the field", function() {
    this.timeout(30000);


it ('Accessing the web site', async ()=>{

      myWindowHandle = driver.getWindowHandle();
    
      await driver.wait(until.titleIs('Registrirajte se - Links'),5000);
      await driver.manage().window().maximize();
      await driver.sleep(2000);
      await driver.findElement(By.xpath("//*[@id='eu-cookie-ok']")).click();
 
    });

    it ('Testing is "Ime tvrtke" marked as Mandatory', async ()=>{


        await driver.findElement(By.xpath('//input[@name="RegisterAsCompany"]')).click();
        await driver.sleep(1000);

        var postoji = await driver.findElement(By.xpath('//label[@for="Company"][@class="mandatory"]'))  // Uzimam da bi zvezdica trbala da ima klasu "mandatory"
        .then(function() {
            console.log('---> Element pronadjen.')  //debuging
            return true;}, 

            function(err) {
                //console.log('--->>>> Ime tvrtke" is not marked madatory') //Debug
                throw('*Ime tvrtke* input field is not marked madatory')
                return false; //it was not found

        })
                // .catch((err)=>{
                //     console.log(' ---> Aktiviran CATCH --> ', err)
                // })
    });



    it ('Testing is "OIB tvrtke" marked as Mandatory', async ()=>{

        var postoji = await driver.findElement(By.xpath('//label[@for="CompanyOIB"][@class="mandatory"]'))
        .then(function() {
            console.log('---> Element pronadjen.')  //debuging
            return true;}, 

            function(err) {
                //console.log('--->>>> Tested element is not marked madatory')
                throw('*OIB tvrtke* input field is not marked madatory')
                return false; //it was not found

        })
    });




    it ('Testing is "Poštanski broj" marked as Mandatory', async ()=>{

        var postoji = await driver.findElement(By.xpath('//label[@for="CompanyZipPostalCode"][@class="mandatory"]'))
        .then(function() {
            console.log('---> Element pronadjen.')  //debuging
            return true;}, 

            function(err) {
                //console.log('--->>>> Tested element is not marked madatory')
                throw('*Poštanski broj* input field is not marked madatory')
                return false; //it was not found

        })
    });



    it ('Testing is "Grad" marked as Mandatory', async ()=>{

        var postoji = await driver.findElement(By.xpath('//label[@for="CompanyCity"][@class="mandatory"]'))
        .then(function() {
            console.log('---> Element pronadjen.')  //debuging
            return true;}, 

            function(err) {
                //console.log('--->>>> Tested element is not marked madatory')
                throw('*Grad* input field is not marked madatory')
                return false; //it was not found

        })
    });



    it ('Testing is "Zemlja" marked as Mandatory', async ()=>{

        var postoji = await driver.findElement(By.xpath('//label[@for="CountryId"][@class="mandatory"]'))
        .then(function() {
            console.log('---> Element pronadjen.')  //debuging
            return true;}, 

            function(err) {
                //console.log('--->>>> Tested element is not marked madatory')
                throw('*Zemlja* input field is not marked madatory')
                return false; //it was not found

        })
    });





it ('"Ime" is marked as Mandatory', async ()=>{


            var postoji = await driver.findElement(By.xpath('//div[@class = "inputs left"]//label[@class="mandatory"][1]'))
            .then(function() {
               // console.log('---> Element pronadjen.')  //debuging
                return true;}, 
                
                function(err) {
                if (err instanceof driver.error.NoSuchElementError) {
                    //console.log('--->>>> Element NIJE pronadjen.')
                    return false;//it was not found
                } 
                
                else {
                    driver.promise.rejected(err)
                        }
                    })
});


it ('"Prezime" is marked as Mandatory', async ()=>{


            var postoji = await driver.findElement(By.xpath('//div[@class = "inputs right"]//label[@class="mandatory"][1]'))
            .then(function() {
                //console.log('---> Element pronadjen.') //debuging
                return true;}, 
                
                function(err) {
                if (err instanceof driver.error.NoSuchElementError) {
                    console.log('--->>>> Element NIJE pronadjen.')
                    return false;//it was not found
                } 
                
                else {
                    driver.promise.rejected(err)
                        }
                    })
});


it ('"Elektronska pošta" is marked as Mandatory', async ()=>{


            
            //var postoji = await driver.findElement(By.xpath('//*[contains(text(), "Elektronska pošta:")]'))
            var postoji = await driver.findElement(By.xpath('//label[@class="mandatory"][contains(@for, "Email")]'))
            .then(function(postoji) {
                //console.log('---> Element pronadjen.') //debug
                //console.log("postoji --->", postoji) //debug
                return true;}, 
                
                function(err) {
                if (err instanceof driver.error.NoSuchElementError) {
                    console.log('--->>>> Element NIJE pronadjen.')
                    return false;//it was not found
                } 
                
                else {
                    driver.promise.rejected(err)
                        }
                    })
});


it ('"Lozinka" is marked as Mandatory', async ()=>{

            var postoji = await driver.findElement(By.xpath('//label[@class="mandatory"][contains(@for, "Password")]'))
            .then(function(postoji) {
                //console.log('---> Element pronadjen.') //debug
                //console.log("postoji --->", postoji) //debug
                return true;}, 
                
                function(err) {
                if (err instanceof driver.error.NoSuchElementError) {
                    console.log('--->>>> Element NIJE pronadjen.')
                    return false;//it was not found
                } 
                
                else {
                    driver.promise.rejected(err)
                        }
                    })
});


it ('"Potvrdite lozinku" is marked as Mandatory', async ()=>{

            var postoji = await driver.findElement(By.xpath('//label[@class="mandatory"][contains(@for, "ConfirmPassword")]'))
            .then(function(postoji) {
                //console.log('---> Element pronadjen.') //debug
                //console.log("postoji --->", postoji) //debug
                return true;}, 
                
                function(err) {
                if (err instanceof driver.error.NoSuchElementError) {
                    console.log('--->>>> Element NIJE pronadjen.')
                    return false;//it was not found
                } 
                
                else {
                    driver.promise.rejected(err)
                        }
                    })
});



it ('Exiting', async ()=>{

        await driver.quit();
        });


  });

