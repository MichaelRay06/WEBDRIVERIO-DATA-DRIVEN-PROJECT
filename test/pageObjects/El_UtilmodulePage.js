class El_UtilModulePage {

    get loadPageElement() { return ('a >img.banner-image') }
    get elementModule() { return ('div:nth-of-type(1) > div > .avatar.mx-auto.white > svg') }

    get alertModule() { return ('div:nth-of-type(3) > div > .avatar.mx-auto.white > svg') }


    clickModuleElement() {
        this.elementModule.waitForDisplayed();
        this.elementModule.click();
    }
    clickAlertModule() {
        this.alertModule.waitForDisplayed();
        this.alertModule.click();
    }

}

export default new El_UtilModulePage();