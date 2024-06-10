# Welcome to Remix Router Types!

Project used to deep dive in Remix configs

Don't forget install deps
```sh
npm install
```

## Router Types

### Conventional
[Oficial doc](https://remix.run/docs/en/main/discussion/routes#conventional-route-configuration)

#### Structure

> "routes" folder are required here

```
app/
├── routes/
│   ├── _index.tsx
│   ├── contacts.$contacts.tsx
│   ├── contacts.$contacts.edit.tsx
│   ├── contacts.$contacts.destroy.tsx
└── root.tsx
```

#### Run locally

```sh
cd router-types/conventional
npm run dev
```

### Conventional Folder
[Oficial doc](https://remix.run/docs/en/main/discussion/routes#conventional-route-folders)

#### Structure

> "routes" folder are required here

```
app/
├── routes/
│   ├── _index/
│   │   └── route.tsx
│   ├── contacts.$contactId._index/
│   │   └── index.tsx
│   ├── contacts.$contactId.destroy/
│   │   └── index.tsx
│   ├── contacts.$contactId.edit/
│   │   └── index.tsx
└── root.tsx
```

#### Run locally

```sh
cd router-types/conventional-folder
npm run dev
```

### Manual
[Oficial doc](https://remix.run/docs/en/main/discussion/routes#manual-route-configuration)

#### Structure

```ts vite.config.ts
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "routes/_index/route.tsx", { index: true });
          route("contacts/:contactId", "routes/contacts/contacts.tsx");
          route("contacts/:contactId/edit", "routes/contacts/contacts-edit.tsx");
          route("contacts/:contactId/destroy", "routes/contacts/contacts-destroy.tsx");
        });
      },
    }),
    tsconfigPaths(),
  ],
});
```

> "routes" folder is optional so it was removed 

```
app/
├── _index/
│   └── route.tsx
├── contacts/
│   ├── contacts-destroy.tsx
│   ├── contacts-edit.tsx
│   ├── contacts.tsx
└── root.tsx
```

#### Run locally

```sh
cd router-types/manual
npm run dev
```
