describe('Android Native Feature Test', () => {
  it('Access an activity directly', async () => {
    await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples')
    await expect($('//*[@text="App/Alert Dialogs"]')).toExist()
  })

  it('Work with dialog boxes', async () => {
    await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples')
    await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click()
    await expect($('//*[@resource-id="android:id/alertTitle"]')).toExist()
    console.log('ALERT TEXT >>> ', await driver.getAlertText())
    // await driver.acceptAlert() // the same as clicking 'OK'
    await driver.dismissAlert() // the same as clicking 'Cancel'
    await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist()
  })

  it('Vertical scrolling', async () => {
    await $('~App').click()
    await $('~Activity').click()

    // scroll to the end
    // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')

    // scroll into view by text
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")')

    await $('~Secure Surfaces').click()
    await expect($('~Secure Dialog')).toExist()
  })

  it.only('Horizontal scrolling', async () => {
    await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.view.Gallery1')
    // await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(1,5)')
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')
  })
})
