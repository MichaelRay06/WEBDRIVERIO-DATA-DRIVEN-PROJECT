
class VerifyFormSubmtPage{
    get formSummited(){$('div#example-modal-sizes-title-lg')}
    get userName(){$('(//tbody//tr//td)[2]')}
    get closeForm(){$('#closeLargeModal')}


welcomeTextMessage(){
    this.formSummited.waitForDisplayed()
  return this.formSummited.getText();
}

getUserName(){
    this.userName.waitForDisplayed()
    return this.userName.getText();
}

    closeForm(){
        this.closeForm.click();
    }



}
export default new VerifyFormSubmtPage();