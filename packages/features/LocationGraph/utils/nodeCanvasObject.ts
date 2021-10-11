export const nodeCanvasObject = (node, ctx, globalScale) => {
  if (node.__typename === 'Location') {
    const label = node.name;
    const fontSize = 16 / globalScale;
    ctx.font = `${fontSize}px Sans-Serif`;
    const textWidth = ctx.measureText(label).width;
    const bckgDimensions = [textWidth, fontSize].map((n) => n + fontSize * 0.2);
    ctx.fillStyle = `rgba(255, 255, 255, 0.8)`;
    ctx.fillRect(
      node.x - bckgDimensions[0] / 2,
      node.y - bckgDimensions[1] / 2,
      ...bckgDimensions
    );
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'black';
    ctx.fillText(label, node.x, node.y);

    node.__bckgDimensions = bckgDimensions;
  } else if (node.__typename === 'Character') {
    const size = 12;
    const img = new Image();
    img.src = node.image;
    ctx.drawImage(img, node.x - size / 2, node.y - size / 2, size, size);
  }
};
