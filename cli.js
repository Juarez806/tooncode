#!/usr/bin/env bun
import { showLogo } from "./lib/logo.js";
import { ensureApiKey, changeApiKey } from "./lib/config.js";
import { askMainQuestions, askClarifications } from "./lib/questions.js";
import { generateComponent } from "./lib/generator.js";
import { writeComponent } from "./lib/writer.js";
import prompts from "prompts";

async function main() {
  await showLogo();
  await ensureApiKey();

  const { action } = await prompts({
    type: "select",
    name: "action",
    message: "What would you like to do?",
    choices: [
      { title: "Create new component", value: "create" },
      { title: "Change API key", value: "changeKey" },
      { title: "Exit", value: "exit" },
    ],
  });

  if (action === "changeKey") {
    await changeApiKey();
    process.exit(0);
  }
  if (action === "exit") process.exit(0);

  const mainAnswers = await askMainQuestions();
  const clarifications = await askClarifications(mainAnswers.componentName);

  const promptText = `
Create a React ${mainAnswers.fileType.toUpperCase()} component named "${mainAnswers.componentName}".
The component structure should resemble the following example:
${mainAnswers.exampleCode}

Target folder: ${mainAnswers.targetFolder}
Use hooks: ${mainAnswers.useHooks ? "Yes" : "No"}
Additional details: ${clarifications.details}
`;

  const code = await generateComponent(promptText);
  await writeComponent(
    mainAnswers.targetFolder,
    mainAnswers.componentName,
    mainAnswers.fileType,
    code
  );

  console.log("\n✅ Component has been created and saved.");
}

main();
