describe('demo calculator test',function(){
    it('addition test',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        
        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('5');
        element(by.css('#gobutton')).click();
        let result = element(by.cssContainingText('.ng-binding','7'));
        expect(result.getText()).toEqual('7');
        browser.sleep(2000)
    });
    it('subtraction test',function(){
        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('7');
        element(by.css('#gobutton')).click();
        let result2 = element(by.cssContainingText('.ng-binding','9'));
        
        expect(result2.getText()).toEqual('9');
                browser.sleep(2000)
    });
});