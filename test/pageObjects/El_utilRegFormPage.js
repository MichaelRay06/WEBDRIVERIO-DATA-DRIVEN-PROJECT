
import elementUtils from '../utils/ElementUtils';
class El_utilRegFormPage {

    get firstName() { return $('#firstName') }
    get lastName() { return $('#lastName') }
    get email() { return $('#userEmail') }
    get gender() { return $("(//label[@class='custom-control-label'])[1]") }
    get phoneNumber() { return $('#userNumber') }

    get calender() { return $('#dateOfBirthInput') }
    get selectTagMonths() { return $('select.react-datepicker__month-select') }
    get selectTageYeard() { return $('select.react-datepicker__year-select') }


    get State() { return $('div#state > .css-yk16xz-control') }
    get City() { return $('div#city .css-1uccc91-singleValue') }
    get clickSubButton() { return $('#submit') }

    FormPopulatedPage() {
        return elementUtils.doDisplayed(this.firstName);
    }

    pupulateForm(myFirstName, myLastName, myEmail, myPhoneNumber) {
        this.firstName.waitForDisplayed();

        elementUtils.doSetValue(this.firstName, myFirstName);
        elementUtils.doSetValue(this.lastName, myLastName);
        elementUtils.doSetValue(this.email, myEmail);
        elementUtils.doSetValue(this.phoneNumber, myPhoneNumber);
        elementUtils.doClick(this.gender);

    }

    setDateOfBirth(year, month, dayValue) {
        elementUtils.doClick(this.calender);
        this.selectTageYeard.waitForExist();
        elementUtils.doSelectByVisibilityText(this.selectTageYeard, year)
        elementUtils.doSelectByVisibilityText(this.selectTagMonths, month)


        let list = $$("div>div> div[role='listbox'] > div> div");
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            if (element.getText() === dayValue) {
                element.click();
                break;

            }

        }
        browser.pause(5000)

    }
    /* //  setAddress(){
          this.State.click();
          this.State.waitForExist();
          this.State.setValue("ArrowDown");
          this.State.setValue("Enter");
   
          
          this.City.click();
          this.City.waitForExist();
          this.City.setValue("ArrowDown");
          this.City.setValue("Enter");
      } */
    submitForm() {
        elementUtils.doClick(this.clickSubButton);


    }
}
export default new El_utilRegFormPage();
