
import formLinkPage from '../pageObjects/FormLinkPage';
import dragDropPage from '../pageObjects/DragDropPage';
import SelectablePage from '../pageObjects/SelectablePage';
import { assert } from 'chai';
describe('drag and drop function', function () {

    it('drag and drop this element', function () { 
        browser.maximizeWindow()
        browser.url('https://demoqa.com/interaction');
        //  formLinkPage.visibilityElement.waitForExist();
        browser.pause(10000);


        formLinkPage.clickInteractionLink();
        formLinkPage.clickDragDropLink();
        dragDropPage.dragAndDropFunction();
        browser.pause(10000)

    
        });
    });
    describe('is text selectable', function () { 
 

        it('lunch browser for selection link', function () { 
            browser.maximizeWindow()
        browser.url('https://demoqa.com/interaction');
        browser.pause(1000);


            formLinkPage.clickSelectLink();
            SelectablePage.clickSelectable();
           
  //  assert.equal(true, SelectablePage.istextSelectable(), 'text is not selected');




        });
        
    });

