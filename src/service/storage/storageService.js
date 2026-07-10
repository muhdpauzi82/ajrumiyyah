export function saveItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));

    return {
      success: true,
      key,
      value,
    };
  } catch (error) {
    console.error("Storage save error:", error);

    return {
      success: false,
      key,
      error,
    };
  }
}

export function loadItem(key, fallback = null) {
  try {
    const item = localStorage.getItem(key);

    if (item === null) return fallback;

    return JSON.parse(item);
  } catch (error) {
    console.error("Storage load error:", error);
    return fallback;
  }
}

export function removeItem(key) {
  try {
    localStorage.removeItem(key);

    return {
      success: true,
      key,
    };
  } catch (error) {
    console.error("Storage remove error:", error);

    return {
      success: false,
      key,
      error,
    };
  }
}

export function clearStorage() {
  try {
    localStorage.clear();

    return {
      success: true,
    };
  } catch (error) {
    console.error("Storage clear error:", error);

    return {
      success: false,
      error,
    };
  }
}

export function hasItem(key) {
  return localStorage.getItem(key) !== null;
}