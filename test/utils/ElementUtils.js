class ElementUtils {


    doGetTitle(PageTitle){
        browser.waitUntil(function(){
            return (browser.getTitle()== PageTitle);
        },10000, 'title not displayed after the given time'
        )
        return browser.getTitle()
    
    
     

    }
    doGetText(element){
        element.waitForDisplayed();
        return element.getText();

    }
    doSetValue(element, textValue){
        element.waitForDisplayed();
        element.setValue(textValue);
    }
    doSelectByVisibilityText(element, visibleText){
        element.waitForDisplayed();
        element.selectByVisibleText(visibleText);

    }
    doWaitVisibility(element){
        element.waitForDisplayed();
        element.waitForVisible();



    }
    doClick(element){
        element.waitForDisplayed();
        element.click();

    }
    doDisplayed(element){
        element.waitForDisplayed();
       return element.isDisplayed();
      
    }
    doExist(element){
        element.waitForExist();
       return element.isExisting();
      
    }
    doScrollViwePort(element){
        element.waitForExist(10000);
       // browser.pause(1000)
        if(!element.isDisplayedInViewport()){
            element.scrollIntoView();
           }
      
      
    }
    
    
}
export default new ElementUtils();