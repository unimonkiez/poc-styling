module.exports = {
    extends: [
      "airbnb-base",
      "airbnb-typescript",
      "airbnb/hooks",
      "plugin:jest/recommended",
      "plugin:prettier/recommended",
      "airbnb-typescript/base",
      "plugin:@typescript-eslint/recommended",
    ],
    plugins: ["react", "@typescript-eslint", "jest", "import"],
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: "module",
      project: "./tsconfig.json",
    },
    rules: {
      "linebreak-style": "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      "import/prefer-default-export": "off",
      "react/prop-types": "off",
      "import/no-default-export": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "react/jsx-props-no-spreading": "off",
      "jsx-a11y/interactive-supports-focus": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "jsx-a11y/control-has-associated-label": "off"
    },
    "overrides": [{
      "files": [ "src/setupTests.ts","*.test.tsx" ],
      "rules": {
        "import/no-extraneous-dependencies": "off"
      }
    }]
  };