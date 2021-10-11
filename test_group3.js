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

describe("Enter valid data in every input registration field", function() {
    this.timeout(30000);

// Opcija 
//     beforeEach(async () => {
//       
//       await driver.get(URL);
//     });
  
    // afterEach(async () => {
    //   await driver.quit();
    // })


    it ('Entering ALL valid data for Private/Personal type registration - NO ERRORS', async ()=>{

      myWindowHandle = driver.getWindowHandle();
    
      const element = driver.wait(until.titleIs('Registrirajte se - Links'),5000);
      await driver.manage().window().maximize();
      await driver.sleep(2000);
      await driver.findElement(By.xpath("//*[@id='eu-cookie-ok']")).click();
  //Ovo mi je najbrza varijanta zbog roka, treba protrcati kroz DOM i malo ovo ulepstati/srediti, koristiti By.id gde god je moguce i sl.
      await driver.findElement(By.xpath("//input[@name='FirstName']")).sendKeys('Petra1');
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
      
      // Za handlovanje alerta: accept, dismiss
      //driver.switchTo().alert().accept());
  
      //findElement preko id-a
      //driver.findElement(By.id("register-button")).click());
      await driver.findElement(By.xpath("/html/body/div[5]/div[8]/div[4]/div[1]/form/div/div[3]/div[8]/input")).click();
      await driver.sleep(10000);

  });

  it ('Uspešna registracija - Assert', async ()=>{

      // Za vec postojeceg korisnika tekst je 'Navedena elektronska pošta/adresa postoji', a rel. xpath je /html/body/div[5]/div[8]/div[4]/div[1]/form/div/div[3]/div[1]/div/ul/li
      //actRegistracija = await driver.findElement(By.xpath("/html/body/div[5]/div[7]/div[4]/div/div/div[2]/div[1]")).getText();
      //actRegistracija = await driver.findElement(By.xpath("//div[contains(@class, 'result')]")).getText();

      actRegistracija = await driver.findElement(By.xpath("//div[@class='result']")).getText();
      console.log('actRegistracija ---> ', actRegistracija);
      assert.equal(ispravnaReg, actRegistracija);
  })

  it ('Exiting', async ()=>{

    await driver.quit();
    })

  });

