const { EmbedBuilder, WebhookClient, bold } = require('discord.js')
const { env } = require('dotenv').config()

const scraperObject = {
  url: process.env.URL,
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);

    let ticket = process.env.TICKET_NAME
    const result = await page.evaluate((ticket) => {
      let elements = document.getElementsByClassName('css-5ox9as e693ju60');
      for (let element of elements) {
        if (element.textContent === ticket) {
          const parent = element.parentElement
          const greatParent = parent.parentElement
          const greatgreatParent = greatParent.parentElement
          const check = greatgreatParent.innerHTML

          if (check.includes('disabled') === false) {
            //if (element.textContent === ticket) element.click();
            return { status: true, url: window.location.url }
          }
        }
      }
      return false
    }, ticket);

    if (result.status && result.status === true) {
      webhook(result.url)
    }
  }
}

function webhook(url) {
  const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1031599584469843998/Hmmd0ZEhMN1QMIJqVMkGXnp_RR3iWYkcsq4HcXTDADDPUiv0-MNVwUBaW79DtUqsihQ8' });
  const embed = new EmbedBuilder()
    .setTitle(process.env.URL)
    .setColor('#60539c')
  try {
    webhookClient.send({
      content: `Une place ${bold(process.env.TICKET_NAME)} est disponible`,
      username: 'Shotgun',
      avatarURL: 'https://play-lh.googleusercontent.com/8q4cxv9SUUAm64ox4tT_XFx41X2o0sF9jItPJTuH0ShWN1Cu7V89vww5dUcer8dDUco',
      embeds: [embed],
    });
  } catch (err) {
    throw err
  }
}

module.exports = scraperObject;