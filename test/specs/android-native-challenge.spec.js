describe('Android Native Feature Test', () => {
  it('Horizontal scrolling', async () => {
    await driver.startActivity('io.appium.android.apis', '.view.DateWidgets1')
    await $('~change the date').click()
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
    await $('~10 December 2024').click()
    await driver.acceptAlert()
  })
})
