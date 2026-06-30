import { test } from "@playwright/test"


test("Frame Objects", async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml")

    //single frame
const framref=page.frame({url:"https://leafground.com/default.xhtml"})
const beforeClick=await framref?.locator('#Click').innerText()
console.log(beforeClick);

//click action
await framref?.locator('#Click').click()

const afterClick=await framref?.locator('#Click').innerText()
console.log(afterClick);

//handle nested frame using frame objects
const nestedFrame =page.frame({url:"https://leafground.com/framebutton.xhtml"})
 await nestedFrame?.locator('#Click').click()
 const txtMsg =await nestedFrame?.locator('#Click').innerText()
console.log(txtMsg);


})
