import fs from "fs";
import prompts from "prompts";
import chalk from "chalk";

export async function askMainQuestions() {
  const answers = await prompts([
    {
      type: "text",
      name: "componentName",
      message: "Which component do you want?",
    },
    {
      type: "select",
      name: "fileType",
      message: "Component type?",
      choices: [
        { title: "TSX (TypeScript React)", value: "tsx" },
        { title: "JSX (JavaScript React)", value: "jsx" },
      ],
    },
    {
      type: "text",
      name: "examplePath",
      message: "Path to an example component file in the project:",
    },
    {
      type: "text",
      name: "targetFolder",
      message: "Which folder should the component be saved to?",
      initial: "src/components",
    },
    {
      type: "toggle",
      name: "useHooks",
      message: "Should React hooks be used?",
      initial: true,
      active: "Yes",
      inactive: "No",
    },
  ]);

  let exampleCode = "";
  try {
    exampleCode = fs.readFileSync(answers.examplePath, "utf8");
  } catch {
    console.warn(chalk.yellow("Could not read example component file, skipping."));
  }

  return { ...answers, exampleCode };
}

export async function askClarifications(componentName) {
  const clarifications = await prompts([
    {
      type: "text",
      name: "details",
      message: `Provide additional details for the ${componentName} component (e.g., responsive, animations, styling method, etc.):`,
    },
  ]);
  return clarifications;
}
