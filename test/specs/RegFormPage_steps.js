import regFormPage from '../pageObjects/RegFormPage';
import formLinkPage from '../pageObjects/FormLinkPage';
import verifyFormSubmtPage from '../pageObjects/verifyFormSubmtPage';
import { assert } from 'chai';

describe('populate student form details',() => {
  it( 'lunch browser', ()=> {
    browser.maximizeWindow()
    browser.url('https://demoqa.com/elements');
      formLinkPage.visibilityElement.waitForExist();
    });
});
 
      describe('confirm for Student form submission', () => {
        it('I should be able to fill and submit my student form', () => {
              
  formLinkPage.clickFormLink();
  //  regFormPage.pupulateForm(myFirstName, myLastName , myEmail, myGender, myPhoneNumber);
  regFormPage.pupulateForm('myFirstName', 'myLastName' , 'myEmail123@gmail.com', '0797666666');
  regFormPage.setDateOfBirth('1978', 'September', '2' );
 // regFormPage.setAddress();

 if(!regFormPage.clickSubButton.isDisplayedInViewport()){
  regFormPage.clickSubButton.scrollIntoView();
 }
  regFormPage.submitForm();
  browser.pause(100);
 
  var actualWecomeMessage =verifyFormSubmtPage.welcomeTextMessage();
  assert.equal('Thanks for submitting the form', actualWecomeMessage , 'welcome text not matched' )

 var actualUserName =verifyFormSubmtPage.getUserName();
 assert.equal('myFirstName' ,actualUserName, 'user name not matched')
  verifyFormSubmtPage.closeForm();

});
});