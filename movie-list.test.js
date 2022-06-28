const { Builder, Capabilities, By } = require("selenium-webdriver")

require("chromedriver")

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
}) 

test('Adding a movie', async () => {
    let addMovieInput = await driver.findElement(By.xpath('//input'))

    await addMovieInput.sendKeys('The walking dead')

    await driver.findElement(By.xpath('//button')).click()
    let addMessage = await driver.findElement(By.id('message')).isDisplayed()
    expect(addMessage).toBe(true)

    await driver.findElement(By.xpath('//span')).click()
    await driver.sleep(2000)


const movie = await driver.findElement(By.xpath("//span[@class='checked']")).isDisplayed()
expect(movie).toBeTruthy()

await driver.findElement(By.xpath(`//button[@id='Thewalkingdead']`)).click()
await driver.sleep(2000)
let deleteMessage = await driver.findElement(By.id('message')).isDisplayed()
expect(deleteMessage).toBe(true)
   
})

