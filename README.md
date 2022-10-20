# Shotgun-monitor

- What is Shotgun ? Shotgun is a ticket app for tons of events. You can buy and resale your tickets. There are generally different categories of tickets at different prices: Early, Regular, Late. But in most of the time, the less expensive can sold out very fast.
- So I created this tool to permit anyone to grab a ticket at the price wanted when someone is selling back one.
- Please notice that the event should still have places available for at least one category of tickets as at the moment we do not support the waiting list.

## :warning: Requirement

- [Node.js](https://nodejs.org/en/about/)
- [Puppeteer](https://github.com/puppeteer/puppeteer)
- [Discord Webhhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)

## :computer: Usage

### :rocket: Clone repository

```sh
git clone https://github.com/jeffersongt/shotgun-monitor
```

### :hammer: Build and Install project

The following command will build the project install `pgen` on your system:

```sh
npm install
```

## :hammer: Usage

- Fill a `.env` file based on the `.env.example` file available in the repository
- Type the following command to launch the program

```sh
npm run start
```
