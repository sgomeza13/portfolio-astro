// Turns a paragraph holding only an image into a <figure>,
// using the alt text as its caption.
export function figures() {
  return (tree) => {
    const walk = (node) => {
      node.children?.forEach((child, i) => {
        const kids = child.children?.filter((k) => !(k.type === 'text' && !k.value.trim()));
        if (child.tagName === 'p' && kids?.length === 1 && kids[0].tagName === 'img') {
          const img = kids[0];
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
                children: [{ type: 'text', value: img.properties.alt ?? '' }],
              },
            ],
          };
        } else walk(child);
      });
    };
    walk(tree);
  };
}
