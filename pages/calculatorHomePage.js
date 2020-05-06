let calulatorHomePage = function(){
    
    let firstTextBox =  element(by.model('first'));
    
    let secondTextBox = element(by.model('second'));
    
    let goButton = element(by.css('#gobutton'));
    
    this.enterFirstNumber = function(firstNo){
        firstTextBox.sendKeys(firstNo);
    };

};