// Auth: MiodragSm
// Template za testiranje osnovnih funkcija aplikacije, v0.1 2021
// Dodatne informacije: https://seleniumhq.github.io/selenium/docs/api/javascript/

var {Builder, By, Key, until} = require('selenium-webdriver');
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

describe("Personal Registration - verify that all the required/mandatory fields are is marked with '*' against the field", function() {
    this.timeout(30000);


it ('Accessing the web site', async ()=>{

      myWindowHandle = driver.getWindowHandle();
    
      await driver.wait(until.titleIs('Registrirajte se - Links'),5000);
      await driver.manage().window().maximize();
      await driver.sleep(2000);
      await driver.findElement(By.xpath("//*[@id='eu-cookie-ok']")).click();
 
    });


it ('"Ime" is marked as Mandatory', async ()=>{


            var postoji = await driver.findElement(By.xpath('//div[@class = "inputs left"]//label[@class="mandatory"][1]'))
            .then(function() {
               // console.log('---> Element pronadjen.')  //debuging
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

