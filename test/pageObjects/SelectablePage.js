class SelectablePage{

    get selectText( ){return ('div>ul#verticalListContainer>li:nth-child(3)')}
    get select( ){return ('div>ul#verticalListContainer>li:nth-child(3)')}

    clickSelectable(){
       this.selectText.waitForExist();
        this.selectText.click();
        
    
    }
 
    istextSelectable(){
      return this.select.isSelected();
    }


}
export default new SelectablePage();