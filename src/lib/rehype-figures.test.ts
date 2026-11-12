import { test } from 'node:test';
import assert from 'node:assert/strict';
import { figures } from './rehype-figures.mjs';

const img = (alt: string) => ({ type: 'element', tagName: 'img', properties: { alt }, children: [] });
const p = (...children: object[]) => ({ type: 'element', tagName: 'p', properties: {}, children });

test('a lone image becomes a numbered figure captioned by its alt; mixed paragraphs stay', () => {
  const tree = { type: 'root', children: [p(img('First')), p({ type: 'text', value: 'text ' }, img('inline')), p(img('Second'))] };
  figures()(tree);
  const [a, b, c] = tree.children as any[];
  assert.equal(a.tagName, 'figure');
  assert.equal(a.children[1].children[0].children[0].value, '1');
  assert.equal(a.children[1].children[1].value, ' First');
  assert.equal(b.tagName, 'p');
  assert.equal(c.children[1].children[0].children[0].value, '2');
});
