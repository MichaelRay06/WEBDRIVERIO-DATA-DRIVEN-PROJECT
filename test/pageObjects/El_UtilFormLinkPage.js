
import elementUtils from '../utils/ElementUtils';

class El_UtilFormLinkPage {
    get formLink() { return $("(//div[@class='header-text'])[2]") }
    get practiseForm() { return $("//span[text()='Practice Form']") }
    get visibilityElement() { return $('div:nth-of-type(1) > span> div >div.header-text') }
    get elementInvisibility() { return ('div#app > footer') }


    verifyPageTitle() {
        return elementUtils.doGetTitle(PageTitle)


    }
    clickFormLink() {

        elementUtils.doScrollViwePort(this.formLink);
        elementUtils.doClick(this.formLink);
        elementUtils.doClick(this.practiseForm);



    }
}
export default new El_UtilFormLinkPage();