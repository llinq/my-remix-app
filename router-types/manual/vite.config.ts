import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/router-types/manual",
  plugins: [
    remix({
      basename: "/router-types/manual",
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("", "_index/route.tsx", { index: true });
          route("contacts/:contactId", "contacts/contacts.tsx");
          route("contacts/:contactId/edit", "contacts/contacts-edit.tsx");
          route("contacts/:contactId/destroy", "contacts/contacts-destroy.tsx");
        });
      },
    }),
    tsconfigPaths(),
  ],
});
