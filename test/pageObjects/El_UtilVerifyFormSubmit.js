import elementUtils from '../utils/ElementUtils';

class El_UtilVerifyFormSubmit {

    get formSummited() { return $('div#example-modal-sizes-title-lg') }
    get userName() { return $('(//tbody//tr//td)[2]') }
    get closeForm() { return $("//button[text()='Close']") }

    FormSubmitPage() {
        return elementUtils.doExist(this.formSummited);

    }
    welcomeTextMessage() {
        this.formSummited.waitForDisplayed();
        return elementUtils.doGetText(this.formSummited)


    }

    UserName() {
        return elementUtils.doGetText(this.userName)
    }

    closeWindow() {
       // elementUtils.doClick(this.closeForm)
        this.closeForm.click();

    }
}
export default new El_UtilVerifyFormSubmit();