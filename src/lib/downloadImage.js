function dataUrlToFile(dataUrl, filename) {
  const [header, base64] = dataUrl.split(',');
  const mime = header.match(/:(.*?);/)[1];
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return new File([bytes], filename, { type: mime });
}

function isIOS() {
  return /iP(hone|od|ad)/.test(navigator.platform)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

/**
 * iOS Safari ignores the `download` attribute on <a>, so a synthetic click
 * there silently does nothing. Route through the native share sheet only on
 * iOS. Desktop Chrome/Edge (Windows) also implement canShare with files, but
 * there it opens an OS share dialog instead of downloading — worse than the
 * plain anchor download that already works there, so it must stay gated to iOS.
 */
export async function saveOrShareImage(dataUrl, filename) {
  if (isIOS() && navigator.canShare) {
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
