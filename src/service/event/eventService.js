const listeners = {};

export function emitEvent(eventName, payload = null) {
  if (!listeners[eventName]) return;

  listeners[eventName].forEach((callback) => {
    callback(payload);
  });
}

export function listenEvent(eventName, callback) {
  if (!listeners[eventName]) {
    listeners[eventName] = [];
  }

  listeners[eventName].push(callback);

  return () => {
    removeEvent(eventName, callback);
  };
}

export function removeEvent(eventName, callback) {
  if (!listeners[eventName]) return;

  listeners[eventName] = listeners[eventName].filter(
    (item) => item !== callback
  );
}

export function clearEvent(eventName) {
  if (eventName) {
    delete listeners[eventName];
    return;
  }

  Object.keys(listeners).forEach((key) => {
    delete listeners[key];
  });
}