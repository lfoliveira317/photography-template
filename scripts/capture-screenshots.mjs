import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium, devices } from 'playwright'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const screenshotsDir = path.join(projectRoot, 'screenshots')
const targetUrl = process.env.SCREENSHOT_URL || 'http://127.0.0.1:4173'

const desktopPath = path.join(screenshotsDir, 'desktop.png')
const mobilePath = path.join(screenshotsDir, 'mobile.png')

const capture = async () => {
  const browser = await chromium.launch()

  try {
    const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 2200 } })
    await desktopPage.goto(targetUrl, { waitUntil: 'networkidle' })
    await desktopPage.screenshot({ path: desktopPath, fullPage: true })

    const mobileContext = await browser.newContext({
      ...devices['iPhone 13'],
      viewport: { width: 390, height: 1600 },
    })
    const mobilePage = await mobileContext.newPage()
    await mobilePage.goto(targetUrl, { waitUntil: 'networkidle' })
    await mobilePage.screenshot({ path: mobilePath, fullPage: true })
    await mobileContext.close()

    console.log(`Saved ${desktopPath}`)
    console.log(`Saved ${mobilePath}`)
  } finally {
    await browser.close()
  }
}

capture().catch((error) => {
  console.error(error)
  process.exitCode = 1
})