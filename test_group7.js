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

const chrome = require('selenium-webdriver/chrome');
chrome_options = new chrome.Options().addArguments("disable-notifications"); // Iskljucuje notifikacije tokom ove sesije
driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(chrome_options)
            .build();
            
driver.get(URL);

describe("Verify that system generates a validation message when clicking on submit button without filling all the mandatory fields for PERSONAL/PRIVATE USER.", function() {
    this.timeout(30000);


    it ('Accessing the web site', async ()=>{

        myWindowHandle = driver.getWindowHandle();
        
        await driver.wait(until.titleIs('Registrirajte se - Links'),5000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        await driver.findElement(By.xpath("//*[@id='eu-cookie-ok']")).click();
    
        });

    it ('Testing, is ommiting  ALL input fields generating validation error message', async ()=>{

        await driver.findElement(By.id("register-button")).click();
        await driver.sleep(1000);

             var postoji = await driver.findElement(By.xpath('//span[@for="FirstName"]')).getText()
        .then(function(postoji) {
            // console.log('---> Element pronadjen.')  //debuging
            //console.log('Pronadjen tekst --> ', postoji )  //debuging
            return true;}, 

            function(err) {
                //console.log('--->>>> Tested element not found.')
                throw('Required element not found')
                return false; //it was not found

        });
    });


    it ('Testing, is ommiting  *Ime* input fields generating validation error message', async ()=>{

        await driver.navigate().refresh();
        await driver.sleep(3000); //sacekaj da se ucita


        await driver.findElement(By.xpath("//input[@name='FirstName']")).sendKeys(' ');
        await driver.findElement(By.xpath("//input[@id='gender-female']")).click();
        await driver.findElement(By.xpath("//input[@name='LastName']")).sendKeys('Petrovic');
  
        await driver.findElement(By.xpath("//select[@name='DateOfBirthDay']/option[@value='4']")).click();
        await driver.findElement(By.xpath("//select[@name='DateOfBirthMonth']/option[@value='5']")).click();
        await driver.findElement(By.xpath("//select[@name='DateOfBirthYear']/option[@value='1998']")).click();
        await driver.findElement(By.xpath("//*[@id='Email']")).sendKeys(randomEmail);
        await driver.findElement(By.xpath("//*[@id='StreetAddress']")).sendKeys('Danila Kisa 17/a', Key.TAB);
    
        await driver.findElement(By.xpath("//*[@id='Phone']")).sendKeys('+381 65 555-555-55');
        await driver.findElement(By.xpath("/html/body/div[5]/div[8]/div[4]/div[1]/form/div/div[3]/div[4]/div[2]/div[2]/input[1]")).sendKeys('21 000', Key.TAB);
    
        await driver.findElement(By.xpath("//*[@id='Password']")).sendKeys('Ta!~3816555555555');
        await driver.findElement(By.xpath("//*[@id='ConfirmPassword']")).sendKeys('Ta!~3816555555555');



        await driver.findElement(By.id("register-button")).click();
        await driver.sleep(1000);

             var postoji = await driver.findElement(By.xpath('//span[@for="FirstName"]')).getText()
        .then(function(postoji) {
            // console.log('---> Element pronadjen.')  //debuging
            //console.log('Pronadjen tekst --> ', postoji )  //debuging
            return true;}, 

            function(err) {
                //console.log('--->>>> Tested element not found.')
                throw('Required element not found')
                return false; //it was not found

        });
    });




    it ('Testing, is ommiting  *Prezime* input fields generating validation error message', async ()=>{

        await driver.navigate().refresh();
        await driver.sleep(3000); //sacekaj da se ucita


        await driver.findElement(By.xpath("//input[@name='FirstName']")).sendKeys('Petra');
        await driver.findElement(By.xpath("//input[@id='gender-female']")).click();
        //await driver.findElement(By.xpath("//input[@name='LastName']")).sendKeys('Petrovic'); Ommiting surname
  
        await driver.findElement(By.xpath("//select[@name='DateOfBirthDay']/option[@value='4']")).click();
        await driver.findElement(By.xpath("//select[@name='DateOfBirthMonth']/option[@value='5']")).click();
        await driver.findElement(By.xpath("//select[@name='DateOfBirthYear']/option[@value='1998']")).click();
        await driver.findElement(By.xpath("//*[@id='Email']")).sendKeys(randomEmail);
        await driver.findElement(By.xpath("//*[@id='StreetAddress']")).sendKeys('Danila Kisa 17/a', Key.TAB);
    
        await driver.findElement(By.xpath("//*[@id='Phone']")).sendKeys('+381 65 555-555-55');
        await driver.findElement(By.xpath("/html/body/div[5]/div[8]/div[4]/div[1]/form/div/div[3]/div[4]/div[2]/div[2]/input[1]")).sendKeys('21 000', Key.TAB);
    
        await driver.findElement(By.xpath("//*[@id='Password']")).sendKeys('Ta!~3816555555555');
        await driver.findElement(By.xpath("//*[@id='ConfirmPassword']")).sendKeys('Ta!~3816555555555');



        await driver.findElement(By.id("register-button")).click();
        await driver.sleep(1000);

             var postoji = await driver.findElement(By.xpath('//span[@for="LastName"]')).getText()
        .then(function(postoji) {
            // console.log('---> Element pronadjen.')  //debuging
            //console.log('Pronadjen tekst --> ', postoji )  //debuging
            return true;}, 

            function(err) {
                //console.log('--->>>> Tested element not found.')
                throw('Required element not found')
                return false; //it was not found

        });
    });


    it ('Testing, is ommiting  *Elektronska pošta* input fields generating validation error message', async ()=>{

        await driver.navigate().refresh();
        await driver.sleep(3000); //sacekaj da se ucita


        await driver.findElement(By.xpath("//input[@name='FirstName']")).sendKeys('Petra');
        await driver.findElement(By.xpath("//input[@id='gender-female']")).click();
        await driver.findElement(By.xpath("//input[@name='LastName']")).sendKeys('Petrovic');
  
        await driver.findElement(By.xpath("//select[@name='DateOfBirthDay']/option[@value='4']")).click();
        await driver.findElement(By.xpath("//select[@name='DateOfBirthMonth']/option[@value='5']")).click();
        await driver.findElement(By.xpath("//select[@name='DateOfBirthYear']/option[@value='1998']")).click();
        //await driver.findElement(By.xpath("//*[@id='Email']")).sendKeys(randomEmail);
        await driver.findElement(By.xpath("//*[@id='StreetAddress']")).sendKeys('Danila Kisa 17/a', Key.TAB);
    
        await driver.findElement(By.xpath("//*[@id='Phone']")).sendKeys('+381 65 555-555-55');
        await driver.findElement(By.xpath("/html/body/div[5]/div[8]/div[4]/div[1]/form/div/div[3]/div[4]/div[2]/div[2]/input[1]")).sendKeys('21 000', Key.TAB);
    
        await driver.findElement(By.xpath("//*[@id='Password']")).sendKeys('Ta!~3816555555555');
        await driver.findElement(By.xpath("//*[@id='ConfirmPassword']")).sendKeys('Ta!~3816555555555');



        await driver.findElement(By.id("register-button")).click();
        await driver.sleep(1000);

             var postoji = await driver.findElement(By.xpath('//span[@for="Email"]')).getText()
        .then(function(postoji) {
            // console.log('---> Element pronadjen.')  //debuging
            //console.log('Pronadjen tekst --> ', postoji )  //debuging
            return true;}, 

            function(err) {
                //console.log('--->>>> Tested element not found.')
                throw('Required element not found')
                return false; //it was not found

        });
    });




    it ('Testing, is ommiting  *Lozinka* input fields generating validation error message', async ()=>{

        await driver.navigate().refresh();
        await driver.sleep(3000); //sacekaj da se ucita


        await driver.findElement(By.xpath("//input[@name='FirstName']")).sendKeys('Petra');
        await driver.findElement(By.xpath("//input[@id='gender-female']")).click();
        await driver.findElement(By.xpath("//input[@name='LastName']")).sendKeys('Petrovic');
  
        await driver.findElement(By.xpath("//select[@name='DateOfBirthDay']/option[@value='4']")).click();
        await driver.findElement(By.xpath("//select[@name='DateOfBirthMonth']/option[@value='5']")).click();
        await driver.findElement(By.xpath("//select[@name='DateOfBirthYear']/option[@value='1998']")).click();
        await driver.findElement(By.xpath("//*[@id='Email']")).sendKeys(randomEmail);
        await driver.findElement(By.xpath("//*[@id='StreetAddress']")).sendKeys('Danila Kisa 17/a', Key.TAB);
    
        await driver.findElement(By.xpath("//*[@id='Phone']")).sendKeys('+381 65 555-555-55');
        await driver.findElement(By.xpath("/html/body/div[5]/div[8]/div[4]/div[1]/form/div/div[3]/div[4]/div[2]/div[2]/input[1]")).sendKeys('21 000', Key.TAB);
    
        //await driver.findElement(By.xpath("//*[@id='Password']")).sendKeys('Ta!~3816555555555');
        await driver.findElement(By.xpath("//*[@id='ConfirmPassword']")).sendKeys('Ta!~3816555555555');



        await driver.findElement(By.id("register-button")).click();
        await driver.sleep(1000);

        var postoji = await driver.findElement(By.xpath('//label[@for="Password"]')).getText()
        .then(function(postoji) {
            // console.log('---> Element pronadjen.')  //debuging
            //console.log('Pronadjen tekst --> ', postoji )  //debuging
            return true;}, 

            function(err) {
                //console.log('--->>>> Tested element not found.')
                throw('Required element not found')
                return false; //it was not found

        });
    });


    it ('Testing, is ommiting  *Potvrdite lozinku* input fields generating validation error message', async ()=>{

        await driver.navigate().refresh();
        await driver.sleep(3000); //sacekaj da se ucita


        await driver.findElement(By.xpath("//input[@name='FirstName']")).sendKeys('Petra');
        await driver.findElement(By.xpath("//input[@id='gender-female']")).click();
        await driver.findElement(By.xpath("//input[@name='LastName']")).sendKeys('Petrovic');
  
        await driver.findElement(By.xpath("//select[@name='DateOfBirthDay']/option[@value='4']")).click();
        await driver.findElement(By.xpath("//select[@name='DateOfBirthMonth']/option[@value='5']")).click();
        await driver.findElement(By.xpath("//select[@name='DateOfBirthYear']/option[@value='1998']")).click();
        await driver.findElement(By.xpath("//*[@id='Email']")).sendKeys(randomEmail);
        await driver.findElement(By.xpath("//*[@id='StreetAddress']")).sendKeys('Danila Kisa 17/a', Key.TAB);
    
        await driver.findElement(By.xpath("//*[@id='Phone']")).sendKeys('+381 65 555-555-55');
        await driver.findElement(By.xpath("/html/body/div[5]/div[8]/div[4]/div[1]/form/div/div[3]/div[4]/div[2]/div[2]/input[1]")).sendKeys('21 000', Key.TAB);
    
        await driver.findElement(By.xpath("//*[@id='Password']")).sendKeys('Ta!~3816555555555');
        //await driver.findElement(By.xpath("//*[@id='ConfirmPassword']")).sendKeys('Ta!~3816555555555');



        await driver.findElement(By.id("register-button")).click();
        await driver.sleep(1000);

             var postoji = await driver.findElement(By.xpath('//span[@for="ConfirmPassword"]')).getText()
        .then(function(postoji) {
            // console.log('---> Element pronadjen.')  //debuging
            //console.log('Pronadjen tekst --> ', postoji )  //debuging
            return true;}, 

            function(err) {
                //console.log('--->>>> Tested element not found.')
                throw('Required element not found')
                return false; //it was not found

        });
    });





    it ('Exiting', async ()=>{

            await driver.quit();
            });


  });

