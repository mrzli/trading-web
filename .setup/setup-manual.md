# Steps

- Remove any invalid `.git` directory already present in repo root.
- Setup React + Vite project.
  - Create a dir called `tmp/` inside repo root.
  - Navigate into `tmp/`.
  - Run `bun create vite trading-web --template react-ts --no-interactive` to create the project files.
  - Navigate back to repo root.
  - Copy newly created project files into repo root using `cp -a tmp/trading-web/. .`.
  - remove the `tmp/` directory with `rm -rf tmp`.
  - Commit the changes with a message like "initial project setup with React + Vite".
- Copy files from `.setup/files/` into project root using `cp -a .setup/files/. .`.
  - Commit the changes with a message like "copy setup files".
- Install dependencies using `bun install`.
  - Change `minimumReleasaseAge` in `bunfig.toml` if necessary.
  - Commit the changes with a message like "install dependencies".
- Setup linting and formatting.
  - Execute `bun add -d esling-plugin-simple-import-sort prettier`
  - Update `esling.config.js`:
    - Setup `eslint-plugin-simple-import-sort`:
      - Add import:
        ```js
        import simpleImportSort from 'eslint-plugin-simple-import-sort';
        ```
      - Update the main config object:
        - Add a `plugins` field, as an object, if it does not already exist.
        - Add a `rules` field, as an object, if it does not already exist.
      - Add to `plugins` object:
        ```js
        'simple-import-sort': simpleImportSort,
        ```
      - Add to `rules` object:
        ```js
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        ```
  - Update `package.json`:
    - Remove any existing `lint` and `format` scripts.
    - Add to the `scripts` section:
      ```json
      "pretty": "prettier --write .",
      "lint": "eslint .",
      "lint:fix": "eslint . --fix",
      "format": "bun run pretty && bun run lint:fix"
      ```
  - Commit the changes with a message like "setup linting and formatting".
- Format project files with `bun run format`.
  - Commit the changes with a message like "format project files".
- Clean up basic app code:
  - CSS updates:
    - Keep `index.css`.
    - Remove all other CSS files and their imports.
  - Image updates:
    - If either `src/assets/` or `public/` does not have any appropriate images, add some, or copy one from the other directory.
    - Remove all but one image from `src/assets/`.
    - Updates imports and uses accordingly. Imports are relative.
    - Remove all but one image from `public/`. Possib
    - Update imports and uses accordingly. Imports start with `/` and they are then relative to `public/`.
  - Update `App.tsx`:
    - Rename to `app.tsx` (lowercase).
      - Update imports that reference it.
    - Move `app.tsx` into `src/app/` directory.
      - Create `src/app/` if it does not already exist.
      - Update imports that reference it.
      - Update its imports to account for the move.
    - Update `app.tsx` code:
      - Update exports to export directly, and remove any default export. Update imports that reference the component.
      - Simplify the component code:
        - Remove all code related to state, effects, event handlers, or any other logic. Keep it a simple presentational component.
        - Make root element a `div` with no class or styles.
        - Have some text, maybe a `h1` and a `p` element.
        - Leave two image elements referencing one image from `src/assets/` and one from `public/`.
        - Add some basic inline styles typed as `CSSProperties`. These need to imported a as `import type { CSSProperties } from 'react';`.
        - Leave something like this:
          ```tsx
          const imageContainerStyle: CSSProperties = {
            height: '4rem',
          };

          const imageStyle: CSSProperties = {
            display: 'flex',
            gap: '1rem',
            marginTop: '1rem',
          };

          export function App() {
            return (
              <div>
                <h1>template-react</h1>
                <p>App is running.</p>
                <div style={imageContainerStyle}>
                  <img alt='Vite logo' src={viteLogo} style={imageStyle} />
                  <img alt='React logo' src={reactLogo} style={imageStyle} />
                </div>
              </div>
            );
          }
  - Commit the changes with a message like "cleanup basic app code".

