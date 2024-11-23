describe('Android Elements Test', () => {
  it('Find elements by accessability id', async () => {
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Views"))'
    )

    await $('~Views').click()
    await $('~Auto Complete').click()
    await $('~1. Screen Top').click()
    await $('android.widget.EditText').setValue('Belarus')
    await expect($('android.widget.EditText')).toHaveText('Belarus')
  })
})
