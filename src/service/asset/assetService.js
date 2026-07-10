export function getAssetPath(path = "") {
  if (!path) return "";

  if (path.startsWith("/")) {
    return path;
  }

  return `/${path}`;
}

export function getImagePath(filename = "") {
  return getAssetPath(`images/${filename}`);
}

export function getMapPath(filename = "") {
  return getAssetPath(`maps/${filename}`);
}

export function getSoundPath(filename = "") {
  return getAssetPath(`sounds/${filename}`);
}

export function preloadImage(src) {
  return new Promise((resolve, reject) => {
    if (!src) {
      reject(new Error("Image source kosong."));
      return;
    }

    const img = new Image();

    img.onload = () => resolve(src);
    img.onerror = () => reject(new Error(`Gagal preload image: ${src}`));

    img.src = src;
  });
}

export async function preloadImages(sources = []) {
  const results = await Promise.allSettled(
    sources.map((src) => preloadImage(src))
  );

  return {
    success: results
      .filter((item) => item.status === "fulfilled")
      .map((item) => item.value),

    failed: results
      .filter((item) => item.status === "rejected")
      .map((item) => item.reason.message),
  };
}