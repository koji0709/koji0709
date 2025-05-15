#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:cncots@gmail.com");
          console.log("\nDone, see you soon.\n");
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Ok, bye.\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green(""),
  handle: chalk.white("@Koji"),
  blog: chalk.gray("https://memo.koji007.com/"),
  github: chalk.gray("https://github.com/") + chalk.green("koji0709"),
  npx: chalk.red("npx") + " " + chalk.white("koji"),
  Shell: chalk.bold.green("npm install && npx koji"),

  labelBlog: chalk.white.bold("Medium:"),
  labelGitHub: chalk.white.bold("GitHub:"),
  labelCard: chalk.white.bold("Card  :"),
  labelShell: chalk.white.bold("Shell :"),
};

const me = boxen(
  [
    // `${data.name} / ${data.handle}`,
    ``,
    `${data.labelBlog}  ${data.blog}`,
    `${data.labelGitHub}  ${data.github}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    `${data.labelShell}  ${data.Shell}`,
    ``,
    `${chalk.italic(
      "好赌的爸，生病的妈，上学的弟弟，破碎的她…"
    )}`,
    `${chalk.italic(
      "我不帮她谁帮她."
    )}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
