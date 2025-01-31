module.exports = {
  extends: ["@commitlint/cli", "@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "chore",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "revert",
      ],
    ],
    "subject-case" : [2, "always", "sentence-case"],
  },
};
