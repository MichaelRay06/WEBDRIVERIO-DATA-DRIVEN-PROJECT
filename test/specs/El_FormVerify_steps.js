import el_UtilVerifyFormSubmit from '../pageObjects/El_UtilVerifyFormSubmit';
import el_UtilFormLinkPage from '../pageObjects/El_UtilFormLinkPage';
//import el_UtilModulePage from '../pageObjects/El_UtilmodulePage';
import el_utilRegFormPage from '../pageObjects/El_utilRegFormPage';
import formLinkPage from '../pageObjects/FormLinkPage';
import { assert } from 'chai';

describe('El-Util verifying Populate student registration form', () => {

    it('open browser', () => {
        browser.maximizeWindow()
        browser.url('https://demoqa.com/elements');
        formLinkPage.visibilityElement.waitForExist();

    /* });
    it('vrify page title', () => {
        const actualPageTitle = el_UtilFormLinkPage.verifyPageTitle();
        assert.equal('ToolsQA', actualPageTitle, 'title do not march');
 */

    });
    it('navigate to form page', () => {
        el_UtilFormLinkPage.clickFormLink();



 /*    });
    it('verify we are on the form populated page', () => {
        
      assert.equal(true, el_utilRegFormPage.FormPopulatedPage(),'form populated page not displayed'); */


    })
    it('populate student form', () => {
        // el_utilRegFormPage.pupulateForm(myFirstName, myLastName , myEmail, myPhoneNumber);
        el_utilRegFormPage.pupulateForm('Wale', 'Wale', 'Wale1234@gmail.com', '0135789467');
        el_utilRegFormPage.setDateOfBirth('1988', 'October', '1');
        el_utilRegFormPage.submitForm();

   /*  });
    it('verify we are on the form submission page', ()=> {
       assert.equal(true, el_UtilVerifyFormSubmit.FormSubmitPage(), 'the form submission page not displayed');  */

 /*    });
    it('verify welcome page header title text massage', () => {
        assert.equal('Thanks for submitting the form', el_UtilVerifyFormSubmit.getFormSubmitPage(), 'welcom message do not match');


    });
    it('verify form submission user name text massage', () => {
        assert.equal('Wale', el_UtilVerifyFormSubmit. UserName(),'user name do not match');

 */
  /*   });
    it('close test', () => {
        el_UtilVerifyFormSubmit.closeWindow();
 */

    });




});