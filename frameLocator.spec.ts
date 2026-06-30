import {test} from "@playwright/test"

test("Frames",async ({page}) => {

    await page.goto("https://www.leafground.com/frame.xhtml")
   // await page.locator('//button[text()="Click Me"][1]').click()
  const allFrames= page.frames() //returns array
  const count=allFrames.length // no of frames
 //  console.log(allFrames);
 // console.log(count);
  
  //using frame locator
  await page.frameLocator('//iframe[@src="default.xhtml"]').locator('#Click').click()
   await page.waitForTimeout(2000)

   const frameref= page.frameLocator('//iframe[@src="default.xhtml"]')
   const inntextbeforeClick= await frameref.locator('#Click').innerText()
   console.log(inntextbeforeClick);

   await frameref.locator('#Click').click()
   const innerTextAfterClick= await frameref.locator('#Click').innerText()
console.log(innerTextAfterClick);
 await page.waitForTimeout(2000)
   
})
