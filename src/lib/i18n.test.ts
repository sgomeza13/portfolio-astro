import { test } from "node:test";
import assert from "node:assert/strict";
import { alternatePath, localize, formatPeriod } from "./i18n.ts";

test("alternatePath maps between locales", () => {
  assert.equal(alternatePath("/", "es"), "/es/");
  assert.equal(alternatePath("/es/", "en"), "/");
  assert.equal(alternatePath("/posts/foo/", "es"), "/es/posts/foo/");
  assert.equal(alternatePath("/es/posts/foo/", "en"), "/posts/foo/");
  assert.equal(alternatePath("/es/posts/foo/", "es"), "/es/posts/foo/");
  assert.equal(alternatePath("/essays/", "es"), "/es/essays/");
});

test("localize overrides prose and flags fallback", () => {
  const post = { title: "T", summary: "S", kind: "project" };
  assert.deepEqual(localize(post, { title: "T-es", summary: "S-es" }), { ...post, title: "T-es", summary: "S-es", isFallback: false });
  assert.deepEqual(localize(post, undefined), { ...post, isFallback: true });
});

test("formatPeriod renders open and closed ranges per locale", () => {
  const start = new Date("2024-01-15");
  assert.equal(formatPeriod("en", start), "Jan 2024 – Present");
  assert.equal(formatPeriod("es", start), "ene 2024 – actualidad");
  assert.equal(formatPeriod("en", start, new Date("2025-03-01")), "Jan 2024 – Mar 2025");
});
