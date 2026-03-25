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
      - Change the component to be a functional one, with Type `FC` from `react`.
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
  - Run `bun run format` to format the updated files.
  - Commit the changes with a message like "cleanup basic app code".
- Setup basic routing:
  - Add react-router dependency with `bun add react-router`.
  - Create stub pages:
    - Put them under `src/app/` directory.
    - Call them `home-page.tsx` and `about-page.tsx`.
    - Content should just be the kebab-cased name of the component as text content of a `div`
      - For example, `home-page.tsx` should return `<div>home-page</div>`.
  - Create `src/routing/router.tsx` file:
    - Create root directory `src/routing/` if it does not already exist.
    - Initially, just have basic routing without any actions and loaders.
    - Use 'data mode'.
    - This is the skeleton:
      ```tsx
      import { createBrowserRouter } from 'react-router-dom';

      export const router = createBrowserRouter([]);
      ```
    - Root route should render `App` component. It will have child routes, to be added in next steps:
      ```tsx
      {
        path: '/',
        element: <App />,
        children: []
      }
      ```
    - Add the two stub pages as child routes:
      - Code:
        ```tsx
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'about',
          element: <AboutPage />
        }
        ```
      - `HomePage` should be rendered if there is no subpath (index route).
  - Change `src/main.tsx` to use the router:
    - You need to set this up so that the routing hierarchy is used, instead of just rendering `App` directly.
    - Render code:
      ```tsx
      import { RouterProvider } from 'react-router';
      import { router } from './routing/router';

      // ...
      /* ... */.render(
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      );
      ```
  - Finally update `App` component:
    - First, copy all the content of `App` component into `HomePage` component. Leave `App` with simple `<div>app</div>` content.
    - Add imports of `Link` and `Outlet` from `react-router`.
    - Have a navigation section with `Link` components linking to the two routes.
    - Add an `Outlet` component to render the child routes.
    - Example code:
      ```tsx
      import type { CSSProperties, FC } from 'react';
      import { Link, Outlet } from 'react-router';

      const navStyle: CSSProperties = {
        display: 'flex',
        gap: '1rem',
        padding: '1rem',
      };

      const linkStyle: CSSProperties = {
        textDecoration: 'none',
        color: '#2563eb',
      };

      export const App: FC = () => {
        return (
          <div>
            <nav style={navStyle}>
              <Link style={linkStyle} to=''>
                Home
              </Link>
              <Link style={linkStyle} to='about'>
                About
              </Link>
            </nav>
            <Outlet />
          </div>
        );
      };
      ```
  - Run `bun run format` to format the updated files.
  - Commit the changes with a message like "setup basic routing".
- Setup 'examples' subpages:
  - Create `src/app/examples/` directory.
  - Create stub pages under this dir:
    - `examples-page.tsx`.
    - `home-page.tsx`.
    - `about-page.tsx`.
  - Initially, all should just return the simple `div` as described above.
  - Remove the `src/app/about-page.tsx` file.
  - Update `src/routing/router.tsx` file:
    - Remove the `about` route from the root level.
    - Add `examples` route as child of root route, and have it have children.
    - Add `src/app/examples/home-page.tsx` as index route of `examples`.
    - Add `src/app/examples/about-page.tsx` as `about` route under `examples`.
  - Update `App` to have link to `examples` page instead of the previous root `about` page.
  - Update `ExamplesPage` to have almost identical routing as `App`, with required path differences ('about' instead of 'examples' link).
  - Run `bun run format` to format the updated files.
  - Commit the changes with a message like "setup examples subpages and routing".
- Setup a react-router loader example:
  - Create `loader` directory under `src/app/examples/`.
  - Create `loader-page.tsx` under that directory, with the same stub content as described above.
  - Update `router.tsx`, add a route for `loader` page under `examples` route.
  - Update `ExamplesPage` to have a link to `loader` page.
  - Add new file called `loader.ts` under `examples/loading/` directory.
    - Add a lambda function:
      - Variable name: `loader`.
      - It should be an async function, and it should return a promise.
      - Promise resolves after 500ms.
      - Returns a string `'resolved data'`.
      - Example code:
        ```ts
        export const loader = async () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve('resolved data');
            }, 200);
          });
        };
        ```
  - Add the loader to the `loader` route in `router.tsx`:
    ```tsx
    {
      path: 'loader',
      element: <LoaderPage />,
      loader: loader,
    }
    ```
  - Update `LoaderPage` to use loader data:
    - Add line: `const data = useLoaderData<typeof loader>();`
    - Display the data in a page, in a `div` for example.
    - Code example:
      ```tsx
      import type { FC } from 'react';
      import { useLoaderData } from 'react-router';

      import { loader } from './loader';

      export const LoaderPage: FC = () => {
        const data = useLoaderData<typeof loader>();

        return (
          <div>
            <div>loader-page</div>
            <div>{data}</div>
          </div>
        );
      };
      ```
  - Run `bun run format` to format the updated files.
  - Commit the changes with a message like "setup react-router loader example".
- Setup app context:
  - Setup app setup stuff, if not already done:
    - Create `src/setup/` directory.
    - Have an `index.ts` file that exports everything from any future subdectories.
  - Create `context/` directory under `src/setup/`.
  - Create files for context:
    - Create value type for context in `app-context-value.ts`.
      - Make it a very simple interface, with just `appName: string` field.
      - Code:
        ```ts
        export interface AppContextValue {
          readonly appName: string;
        }
        ```
    - Create the `app-context.ts` file:
      - `export const AppContext = createContext<AppContextValue | undefined>(undefined);`
    - Create the provider component in `app-context-provider.tsx`:
      - Create a functional component (as lambda) called `AppContextProvider`.
      - Code:
        ```tsx
        export interface AppContextProviderProps {
          readonly children: ReactNode;
        }

        export function AppContextProvider({ children }: AppContextProviderProps) {
          const value: AppContextValue = {
            appName: '<your app name here>',
          };

          return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
        }
        ```
    - Create a custom app context hook file `use-app-context.ts`:
      ```tsx
      export const useAppContext = (): AppContextValue => {
        const context = useContext(AppContext);
        if (context === undefined) {
          throw new Error('useAppContext must be used within an AppContextProvider');
        }
        return context;
      };
      ```
    - Add an index file which exports everything from the context directory.
  - Update `src/main.tsx` to wrap the app in the context provider.
  - Add an example file for context, with the necessary route and links.
  - Run `bun run format` to format the updated files.
  - Commit the changes with a message like "setup app context and example page".
- Setup tailwind:
  - Install dependencies:
    - `bun add -d tailwindcss @tailwindcss/vite prettier-plugin-tailwindcss`
  - Update prettier config, add:
    ```json
    "plugins": ["prettier-plugin-tailwindcss"]
    ```
  - Update `vite.config.ts`:
    - Add import: `import tailwindcss from '@tailwindcss/vite';`
    - Add to plugins array: `tailwindcss()`
  - Update `index.css`:
    - Add `@import 'tailwindcss';`
  - Add example for tailwind usage:
    - Add stub `app/examples/tailwind-page.tsx`.
    - Add some tailwind classes to the `div`, for example: `text-2xl text-blue-500 bg-orange-200`.
  - Add route to `router.tsx`.
  - Add link to `ExamplesPage`.
  - Run `bun run format` to format the updated files.
  - Commit the changes with a message like "setup tailwind and example page".
