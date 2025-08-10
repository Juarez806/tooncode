import { GoogleGenAI } from "@google/genai";
import ora from "ora";
import chalk from "chalk";

export async function generateComponent(promptText) {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    systemInstruction: [
      {
        text: `You are a professional React component generator. Your task:
- Generate fully functional code based on user details.
- Design should follow Apple standards.
- Output only the code, do not provide explanations.
- Do not add any unnecessary characters, decorations, brackets, etc.
- Include only the necessary imports.

Restrictions:
- Do not provide unnecessary explanations outside the code.
- Do not write anything other than the code.
- Do not add unnecessary imports.`,
      },
    ],
  };

  const model = "gemini-2.5-pro";
  const contents = [
    {
      role: "user",
      parts: [{ text: promptText }],
    },
  ];

  const spinner = ora(chalk.blue("Generating component with Gemini AI...")).start();
  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let output = "";
  for await (const chunk of response) {
    output += chunk.text || "";
  }
  spinner.succeed(chalk.green("Component generated!"));

  // Clear code fences if any
  return output
    .replace(/^```[a-zA-Z]*\n/, "")
    .replace(/```$/, "");
}
