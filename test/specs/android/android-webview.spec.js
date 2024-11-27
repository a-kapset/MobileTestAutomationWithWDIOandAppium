describe('Android Webview', () => {
  it('Android Webview Test', async () => {
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click()
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()
    await $('//*[@text="Like us on Facebook"]').click() // mobile browser is opened here -> context must be switched
    await driver.switchContext('WEBVIEW_chrome') // await driver.getContexts() -> [('NATIVE_APP', 'WEBVIEW_chrome')]
    // ...
    // search element(s) with web based locator in desktop browser
    // to avoid erros with 'chromedriver' set up {relaxedSecurity: true} in services in config
    // ...

    // back to the native app context
    await driver.switchContext('NATIVE_APP')
    await driver.back()
  })
})
