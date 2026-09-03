import { loader } from "fumadocs-core/source";
import { pageSchema } from "fumadocs-core/source/schema";
import { defineDocs } from "fumadocs-mdx/macro";
import { z } from "zod";

const docs = defineDocs({
  dir: "content/lessons",
  docs: {
    schema: pageSchema.extend({
      summary: z.string(),
      audience: z.string(),
      status: z.enum(["published", "coming"]).default("published"),
      order: z.number(),
      slug: z.string().optional(),
    }),
  },
});

export const source = loader({
  baseUrl: "/learn",
  source: docs.toFumadocsSource(),
});
