import { defineConfig } from "astro/config";
import start from "solid-start/astro";

const packages = await (async () => {
  try {
    return (await import("./src/_generated/packages.json")).default;
  } catch (e) {
    throw new Error("No packages found. Did you run `pnpm generate`?");
  }
})();

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    start({
      prerenderRoutes: [
        "/",
        ...packages.flatMap(({ name }) => [`/package/${name}`, `/playground/${name}`]),
      ],
    }),
  ],
});
