function dataUrlToFile(dataUrl, filename) {
  const [header, base64] = dataUrl.split(',');
  const mime = header.match(/:(.*?);/)[1];
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return new File([bytes], filename, { type: mime });
}

/**
 * iOS Safari ignores the `download` attribute on <a>, so a synthetic click
 * there silently does nothing. Route through the native share sheet when
 * file sharing is supported, otherwise fall back to the classic anchor
 * download (Android/desktop browsers, where it already works).
 */
export async function saveOrShareImage(dataUrl, filename) {
  if (navigator.canShare) {
    const file = dataUrlToFile(dataUrl, filename);
    if (navigator.canShare({ files: [file] })) {
      await navigator.share({ files: [file] });
      return;
    }
  }
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  link.click();
}
