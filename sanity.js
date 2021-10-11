// Auth: MiodragSm
// Template za testiranje osnovnih funkcija aplikacije, v0.1 2021
// Dodatne informacije: https://seleniumhq.github.io/selenium/docs/api/javascript/
// Pokreni sa mocha <imeFajla.js>

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

describe("Sanity Check - All required registration fields present", function() {
    this.timeout(30000);

// Aktivirati u finalnoj verziji 
//     beforeEach(async () => {
//       
//       await driver.get(URL);
//     });
  
    // afterEach(async () => {
    //   await driver.quit();
    // })

    myWindowHandle = driver.getWindowHandle();
    
    driver.wait(until.titleIs('Registrirajte se - Links'),5000)
    .then(()=>{ driver.manage().window().maximize() })
    .then(()=>{ driver.sleep(2000)})   
    .then(()=>{ driver.findElement(By.xpath("//*[@id='eu-cookie-ok']")).click()})   



        it ('Checking - Checkbox "Želim se registrirati kao pravna osoba"', async ()=>{

        var existed = await driver.findElement(By.xpath("//input[@name='RegisterAsCompany']"))
        .then(function() {
            //console.log('---> Element pronadjen.')
            return true;}, function(err) {
            if (err instanceof driver.error.NoSuchElementError) {
                console.log('--->>>> Element NIJE pronadjen.')
                return false;//it was not found
            } else {
                driver.promise.rejected(err)
                    }
                })
    });


    it ('Checking - Ime', async ()=>{

            var existed = await driver.findElement(By.xpath("//input[@name='FirstName']"))
        .then(function() {
        //console.log('---> Element pronadjen.')
        return true;}, function(err) {
        if (err instanceof driver.error.NoSuchElementError) {
            console.log('--->>>> Element NIJE pronadjen.')
            return false;//it was not found
        } else {
            driver.promise.rejected(err)
                }
            })
      });


    it ('Checking - Prezime', async ()=>{
            var existed = await driver.findElement(By.xpath("//input[@id='LastName']"))
        .then(function() {
        //console.log('---> Element pronadjen.')
        return true;}, function(err) {
        if (err instanceof driver.error.NoSuchElementError) {
            console.log('--->>>> Element NIJE pronadjen.')
            return false;//it was not found
        } else {
            driver.promise.rejected(err)
                }
            })
      });

      it ('Checking - E-mail', async ()=>{
            var existed = await driver.findElement(By.xpath("//input[@name='Email']"))
        .then(function() {
        //console.log('---> Element pronadjen.')
        return true;}, function(err) {
        if (err instanceof driver.error.NoSuchElementError) {
            console.log('--->>>> Element NIJE pronadjen.')
            return false;//it was not found
        } else {
            driver.promise.rejected(err)
                }
            })
      });


      it ('Checking - Lozinka', async ()=>{
            var existed = await driver.findElement(By.xpath("//input[@name='Password']"))
        .then(function() {
        //console.log('---> Element pronadjen.')
        return true;}, function(err) {
        if (err instanceof driver.error.NoSuchElementError) {
            console.log('--->>>> Element NIJE pronadjen.')
            return false;//it was not found
        } else {
            driver.promise.rejected(err)
                }
            })
      });


    it ('Checking - Potvrdite lozinkuu', async ()=>{
            var existed = await driver.findElement(By.xpath("//input[@name='ConfirmPassword']"))
        .then(function() {
        //console.log('---> Element pronadjen.')
        return true;}, function(err) {
        if (err instanceof driver.error.NoSuchElementError) {
            console.log('--->>>> Element NIJE pronadjen.')
            return false;//it was not found
        } else {
            driver.promise.rejected(err)
                }
            })
      });



    it ('Exiting', async ()=>{

        await driver.quit();
    });



  });

