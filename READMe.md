1) Install node.js
2) Install protractor 
npm install -g protractor
3) Install Webdriver Browser Drivers by running
 webdriver-manager update
4) Create Conf.js  configuration file with framework name and browser name 
and add tests(Specs) folder path

5) To run the tests use the below command
protractor conf/conf.js

6) protractor demo application --> https://www.protractortest.org/#/tutorial
http://juliemr.github.io/protractor-demo/

7)https://www.protractortest.org/#/api -- for locators
by.id
by.css
by.name
by.model
by.binding
Protractor Cheat Sheet for locators --> https://gist.github.com/javierarques/0c4c817d6c77b0877fda

8) Reference Assertions should not be in PageObjects 
 https://stackoverflow.com/questions/11126806/page-object-model-why-not-include-assertions-in-page-methods)

9) To disable a test in Jasmine framework with Protractor make the it funtion to xit
Example : 
actual : it('subtraction test', function () {}
Excpected To disable: xit('subtraction test', function () {}

9) To see hidden folders on mac press (cmd+shift+.)
10)