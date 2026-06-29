//Playwright by defualt cancels the alert
import {test} from "@playwright/test"

test( "Alert Handling",async({page})=>
  {
    await page.goto("https://www.leafground.com/alert.xhtml")

    await page.locator('(//span[text()="Show"])[1]').click()
await page.locator('(//span[text()="Show"])[2]').click()
await page.locator('(//span[text()="Show"])[5]').click()

await page.waitForTimeout(5000)
                    }
)

// using event Listener -- page.on(),page.once()

import {test} from "@playwright/test"

test( "Alert Handling",async({page})=>
  {
    await page.goto("https://www.leafground.com/alert.xhtml")
page.on('dialog',(alert)=>{
console.log(alert.type())
console.log(alert.message())

let alertType=alert.type()
switch(alertType)
{
    case "alert":
    alert.accept()
    break
    case "confirm":
        alert.dismiss()
        break
    case "Prompt":
     alert.accept("Playwright")
        break
    default:
         alert.dismiss()

}
})
    await page.locator('(//span[text()="Show"])[1]').click()
await page.locator('(//span[text()="Show"])[2]').click()
await page.locator('(//span[text()="Show"])[5]').click()

await page.waitForTimeout(5000)
                    }
)
