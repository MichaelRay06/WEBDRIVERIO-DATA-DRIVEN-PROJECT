class FormLinkPage{
    get formLink() {return $("(//div[@class='header-text'])[2]") } 
    get practiseForm() {return $("//span[text()='Practice Form']")}
    get visibilityElement( ) {return $('div:nth-of-type(1) > span> div >div.header-text')}

    get interactionLink() {return $('div.accordion> div:nth-child(5)')}
    get dragDropLink(){return $('div.element-list.collapse.show> ul>li:nth-child(4)')}
    get selectableLink(){return $('div.element-list.collapse.show> ul>li:nth-child(2)')}




    clickFormLink(){
        
        this.formLink.scrollIntoView();
       if(this.formLink.isDisplayedInViewport()){
        this.formLink.click();
       } 
       this.practiseForm.waitForExist();
       this.practiseForm.click();
        


    }
    clickInteractionLink(){
       this.interactionLink.waitForExist();
        this.interactionLink.click();

    }
    clickDragDropLink(){
        this.dragDropLink.scrollIntoView();
        this.dragDropLink.click();
    }

    clickSelectLink(){
        this.selectableLink.waitForExist();
        this.selectableLink.click();
      
    }
   
}
export default new FormLinkPage();