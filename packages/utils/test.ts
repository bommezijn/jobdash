export function extractSkills(html: string) {
  const lower = html.toLowerCase();

  const skills = [
    "react",
    "typescript",
    "vue",
    "node",
    "css",
    "svelte",
    "docker",
    "aws",
  ];

  return skills.filter((skill) => lower.includes(skill));
}
