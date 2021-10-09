# linksqa

Following environment is required for testing:
Linux (Ubuntu 20.04 Focal)
Chrome (v94.0.4606.61)  or Firefox (v92.0.1) 
Java SE Development Kit 
Android SDK
Selenium framework
Node.js
Mocha Chai 
Sinon 


- Installing selenium:
$ sudo apt update 
$ npm install --save selenium-webdriver

- Install Mocha only as dev dependency(into current working folder)
$npm install --save-dev mocha
or
npm install -g mocha 
if you want to install it globally.

- Copy the instance of desired webdriver into the working folder (ChromeDriver or geckodriver)
- ChromeDriver could be found at: http://chromedriver.storage.googleapis.com/index.html
- Geckodriver could be found at: https://github.com/mozilla/geckodriver/releases
