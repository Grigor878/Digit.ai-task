// dymaic import of images
export function getImageUrl(name) {
  return new URL(`../assets/imgs/${name}Result.png`, import.meta.url).href;
}

// export img as html
export const handleExportHTML = (wrapperRef, name) => {
  const contentHTML = wrapperRef?.current?.innerHTML;
  const blob = new Blob([contentHTML], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${name}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
