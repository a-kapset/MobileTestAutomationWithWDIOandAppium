import AddNoteScreen from '../../screenobjects/android/add-note.screen.js'

describe('Android Real App Test : Add Notes', () => {
  it('Add a note', async () => {
    const title = 'My new note title'
    const body = 'My new note\nBody'

    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click()
    await expect($('//*[@text="Add note"]')).toBeDisplayed()
    await $('//*[@text="Add note"]').click()
    await $('//*[@text="Text"]').click()
    await expect($('//*[@text="Editing"]')).toBeDisplayed()
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue(title)
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue(body)
    await driver.back()
    await driver.back()
    await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed()
    await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText(body)
  })

  it.only('Add a note with Screen Object Model', async () => {
    const title = 'My new note title'
    const body = 'My new note\nBody'

    await AddNoteScreen.skipButton.click()
    await expect(AddNoteScreen.addNoteText).toBeDisplayed()
    await AddNoteScreen.addNoteText.click()
    await AddNoteScreen.textOption.click()
    await expect(AddNoteScreen.textEditing).toBeDisplayed()
    await AddNoteScreen.noteHeader.setValue(title)
    await AddNoteScreen.noteBody.setValue(body)
    await AddNoteScreen.saveNote()
    await expect(AddNoteScreen.editButton).toBeDisplayed()
    await expect(AddNoteScreen.viewNote).toHaveText(body)
  })
})
