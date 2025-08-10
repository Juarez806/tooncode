import fs from "fs";
import prompts from "prompts";
import chalk from "chalk";
import * as dotenv from "dotenv";
dotenv.config();

export async function ensureApiKey() {
  if (!process.env.GEMINI_API_KEY) {
    await changeApiKey();
  }
}

export async function changeApiKey() {
  const { apiKey } = await prompts({
    type: "password",
    name: "apiKey",
    message: "Enter your Gemini API key:",
  });
  if (!apiKey) {
    console.error(chalk.red("API key is required!"));
    process.exit(1);
  }
  fs.writeFileSync(".env", `GEMINI_API_KEY=${apiKey}`);
  process.env.GEMINI_API_KEY = apiKey;
  console.log(chalk.green("API key saved."));
}
