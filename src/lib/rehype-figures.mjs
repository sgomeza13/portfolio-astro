// Turns a paragraph holding only an image into a numbered <figure>,
// using the alt text as the caption: "Figure 2. <alt>".
export function figures() {
  return (tree) => {
    let n = 0;
    const walk = (node) => {
      node.children?.forEach((child, i) => {
        const kids = child.children?.filter((k) => !(k.type === 'text' && !k.value.trim()));
        if (child.tagName === 'p' && kids?.length === 1 && kids[0].tagName === 'img') {
          const img = kids[0];
          n += 1;
          node.children[i] = {
            type: 'element',
            tagName: 'figure',
            properties: {},
            children: [
              img,
              {
                type: 'element',
                tagName: 'figcaption',
                properties: {},
                children: [
                  { type: 'element', tagName: 'span', properties: { className: ['fig-n'] }, children: [{ type: 'text', value: `${n}` }] },
                  { type: 'text', value: ` ${img.properties.alt ?? ''}` },
                ],
              },
            ],
          };
        } else walk(child);
      });
    };
    walk(tree);
  };
}
