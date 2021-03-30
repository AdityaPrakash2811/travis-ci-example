import { Selector } from 'testcafe';
//import Colors from 'colors'

const wrongUsername = 'abc' 
const wrongPassword = 'abc'

const rightUsername = 'tomsmith' 
const rightPassword = 'SuperSecretPassword!'

const usernameSelector = Selector('input#username')
const passswordSelector = Selector('input#password')
const submitBtn = Selector('button.radius')

const errorMessage = Selector('div#flash.flash.error')
const successMessage = Selector('div#flash.flash.success')

fixture `Login Test`
    .page `https://the-internet.herokuapp.com/login`


test('Wrong Credentials', async t => {
    await t
        .maximizeWindow()
        .typeText(usernameSelector, wrongUsername, {speed:0.5})
        .typeText(passswordSelector, wrongPassword, {speed:0.5})
        .click(submitBtn)
        .expect(errorMessage.exists).ok()
        .wait(2000)
});

test('Correct Credentials', async t => {
    await t
        .maximizeWindow()
        .typeText(usernameSelector, rightUsername, {speed:0.5})
        .typeText(passswordSelector, rightPassword, {speed:0.5})
        .click(submitBtn)
        .expect(successMessage.exists).ok()
        .wait(2000)
});