import {test} from "@playwright/test"


test("Frames",async ({page}) => {

    await page.goto("https://www.leafground.com/frame.xhtml")
   // await page.locator('//button[text()="Click Me"][1]').click()
  const allFrames= page.frames() //returns array
  const count=allFrames.length // no of frames
 //  console.log(allFrames);
  console.log(count); // main frame,f1,f2,f3,f4 -- index starts from 0

  const frame1=allFrames[1]
  await frame1.locator('#Click').click()
  await page.waitForTimeout(2000)

  //nested frame using index
  const frame4=allFrames[4]
await frame4.locator('#Click').click()
 await page.waitForTimeout(2000)
})
