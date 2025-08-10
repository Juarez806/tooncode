#!/usr/bin/env bun
// package.json'da "type": "module" olmalı
// Gerekli paketler:
// bun add @google/genai mime prompts chalk dotenv
// bun add -D @types/node

import fs from "fs";
import path from "path";
import prompts from "prompts";
import chalk from "chalk";
import * as dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

// Ortam değişkenlerini yükle
dotenv.config();

async function loadLogo() {
  try {
    const logoPath = path.resolve(process.cwd(), "logo.txt");
    const ascii = fs.readFileSync(logoPath, "utf8");
    console.log(chalk.hex("#f05123")(ascii));
  } catch {
    console.log(chalk.red("Logo yüklenemedi."));
  }
}

async function getApiKey() {
  if (!process.env.GEMINI_API_KEY) {
    const { apiKey } = await prompts({
      type: "password",
      name: "apiKey",
      message: "Gemini API anahtarınızı girin:",
    });
    if (!apiKey) {
      console.error(chalk.red("API anahtarı gerekli!"));
      process.exit(1);
    }
    fs.appendFileSync(".env", `\nGEMINI_API_KEY=${apiKey}`);
    process.env.GEMINI_API_KEY = apiKey;
    console.log(chalk.green("API anahtarı kaydedildi."));
  }
}

async function askQuestions() {
  const answers = await prompts([
    {
      type: "text",
      name: "componentName",
      message: "Ne componenti istiyorsunuz?",
    },
    {
      type: "text",
      name: "examplePath",
      message: "Projede örnek bir component dosyası yolu:",
    },
    {
      type: "text",
      name: "targetFolder",
      message: "Component hangi klasöre kaydedilsin?",
      initial: "src/components",
    },
    {
      type: "toggle",
      name: "useHooks",
      message: "React hook kullanılsın mı?",
      initial: true,
      active: "Evet",
      inactive: "Hayır",
    },
  ]);
  return answers;
}

async function generateComponent(promptText) {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    systemInstruction: [
      {
        text: "Sen bir profesyonel React component generator'sun. Kullanıcının verdiği bilgiler doğrultusunda TypeScript/React component üret.",
      },
    ],
  };

  const model = "gemini-2.5-pro";

  const contents = [
    {
      role: "user",
      parts: [
        {
          text: promptText,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let output = "";
  for await (const chunk of response) {
    process.stdout.write(chunk.text || "");
    output += chunk.text || "";
  }
  return output;
}

async function main() {
  await loadLogo();
  await getApiKey();
  const { componentName, examplePath, targetFolder, useHooks } =
    await askQuestions();

  let exampleCode = "";
  try {
    exampleCode = fs.readFileSync(examplePath, "utf8");
  } catch {
    console.warn(chalk.yellow("Örnek component okunamadı, boş geçiliyor."));
  }

  const promptText = `
React TypeScript ile "${componentName}" isimli bir component üret.
Component yapısı şu örneğe benzesin:
${exampleCode}

Kayıt klasörü: ${targetFolder}
Hook kullanımı: ${useHooks ? "Evet" : "Hayır"}
Kodun tam ve çalışır olsun.
`;

  console.log(chalk.blue("\nGemini AI ile component üretiliyor...\n"));

  const code = await generateComponent(promptText);

  const fileName = `${componentName
    .replace(/\s+/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")}.tsx`;
  const filePath = path.join(targetFolder, fileName);

  fs.mkdirSync(targetFolder, { recursive: true });
  fs.writeFileSync(filePath, code);
  console.log(chalk.green(`\n✅ Component kaydedildi: ${filePath}`));
}

main().catch((err) => {
  console.error(chalk.red(err));
});
