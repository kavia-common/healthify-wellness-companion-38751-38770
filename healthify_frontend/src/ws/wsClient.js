import { getFeatureFlags, getWsUrl } from '../api/config';

let socket = null;
let enabled = null;

function wsEnabled() {
  if (enabled === null) {
    const flags = getFeatureFlags();
    enabled = flags.includes('ws') || flags.includes('websocket');
  }
  return enabled;
}

// PUBLIC_INTERFACE
export function connectWs() {
  /**
   * Initializes a WebSocket connection if feature-flagged and URL is provided.
   * Returns the socket instance or null if disabled/unavailable.
   */
  if (!wsEnabled()) return null;
  const url = getWsUrl();
  if (!url) return null;

  try {
    socket = new WebSocket(url);
    socket.onopen = () => console.info('[ws] connected');
    socket.onclose = () => console.info('[ws] disconnected');
    socket.onerror = (e) => console.warn('[ws] error', e);
    return socket;
  } catch (e) {
    console.warn('[ws] failed to connect', e);
    return null;
  }
}

// PUBLIC_INTERFACE
export function sendWs(message) {
  /** Sends a message over WS if connected and enabled. */
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(typeof message === 'string' ? message : JSON.stringify(message));
    return true;
  }
  return false;
}

// PUBLIC_INTERFACE
export function disconnectWs() {
  /** Closes the WebSocket connection if present. */
  if (socket) {
    try {
      socket.close();
    } catch (_) { /* noop */ }
    socket = null;
  }
}
```

Explanation: Utility date helpers
````write file="healthify-wellness-companion-38751-38770/healthify_frontend/src/utils/date.js"
const pad = (n) => String(n).padStart(2, '0');

// PUBLIC_INTERFACE
export function formatDateTime(d = new Date()) {
  /** Formats a date into YYYY-MM-DD HH:mm string. */
  const y = d.getFullYear();
  const m = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const h = pad(d.getHours());
  const min = pad(d.getMinutes());
  return `${y}-${m}-${day} ${h}:${min}`;
}
