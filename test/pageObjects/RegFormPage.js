class RegFormPage{
get firstName(){ return $('#firstName')}
get lastName(){return $('#lastName')}
get email(){ return $('#userEmail')}
get gender(){ return $("(//label[@class='custom-control-label'])[1]")}
get phoneNumber(){return $('#userNumber')}

get calender(){return $('#dateOfBirthInput')}
get selectTagMonths() {return $('select.react-datepicker__month-select')}
get selectTageYeard(){return $('select.react-datepicker__year-select')}


get State() {return $('div#state > .css-yk16xz-control')}
get City(){return $('div#city .css-1uccc91-singleValue')}
get clickSubButton() {return $('#submit')}



pupulateForm(myFirstName, myLastName , myEmail, myPhoneNumber){
    this.firstName.waitForExist();
    this.firstName.setValue(myFirstName);
    this.lastName.setValue(myLastName);
    this.email.setValue(myEmail);
    this.phoneNumber.setValue(myPhoneNumber);
    this.gender.click();
   
}

   setDateOfBirth(year, month, dayValue ){
       this.calender.click();
       this.selectTageYeard.waitForExist();

       this.selectTageYeard.selectByVisibleText(year);
       this.selectTagMonths.selectByVisibleText(month);

     
       let list= $$("div>div> div[role='listbox'] > div> div");
       for (let i=0; i<list.length ; i++){
        const element= list[i];
        if(element.getText()=== dayValue){
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
       submitForm(){
           this.clickSubButton.click();

       }
   }
export default new   RegFormPage();