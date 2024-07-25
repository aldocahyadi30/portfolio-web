export const LoadImages = (context) => {
    const images = {};
    context.keys().forEach((key) => {
      const fileName = key.replace('./', '');
      images[fileName] = context(key);
    });
    return images;
  };