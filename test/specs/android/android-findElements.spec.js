describe.skip('Android Elements Test', () => {
  it('Find elements by accessability id', async () => {
    const appOption = $('~App')
    await appOption.click()
    const actionBarOption = $('~Action Bar')
    await expect(actionBarOption).toBeExisting()
  })

  it('Find elements by class name', async () => {
    const classNameOption = $('android.widget.TextView')
    await expect(classNameOption).toHaveText('API Demos')
  })

  it.skip('Find elements by xpath', async () => {
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()
    await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()
    await $('//android.widget.TextView[@text="Command two"]').click()
    await expect($('//android.widget.TextView')).toHaveText('You selected: 1 , Command two')
  })

  it('Find elements by UIautomator', async () => {
    // https://webdriver.io/docs/selectors/#android-uiautomator
    // https://developer.android.com/reference/androidx/test/uiautomator/UiSelector
    // https://appium.readthedocs.io/en/latest/en/writing-running-appium/android/uiautomator-uiselector/

    await $('android=new UiSelector().textContains("Alert")').click()
  })
})
