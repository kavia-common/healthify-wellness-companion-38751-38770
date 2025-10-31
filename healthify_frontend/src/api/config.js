function readEnv(name) {
  return process.env[name] || '';
}

// PUBLIC_INTERFACE
export function getApiBase() {
  /** Returns API base URL (REACT_APP_API_BASE fallback to REACT_APP_BACKEND_URL). */
  return readEnv('REACT_APP_API_BASE') || readEnv('REACT_APP_BACKEND_URL') || '';
}

// PUBLIC_INTERFACE
export function getWsUrl() {
  /** Returns WebSocket URL from env. */
  return readEnv('REACT_APP_WS_URL') || '';
}

// PUBLIC_INTERFACE
export function getFeatureFlags() {
  /** Parses comma-separated feature flags into array. */
  const raw = readEnv('REACT_APP_FEATURE_FLAGS') || '';
  return raw.split(',').map((s) => s.trim()).filter(Boolean);
}

// PUBLIC_INTERFACE
export function getEnvInfo() {
  /** Returns useful environment information for rendering on Settings page. */
  return {
    apiBase: getApiBase(),
    backendUrl: readEnv('REACT_APP_BACKEND_URL') || '',
    wsUrl: getWsUrl(),
    featureFlags: getFeatureFlags(),
    nodeEnv: readEnv('REACT_APP_NODE_ENV') || readEnv('NODE_ENV') || '',
    port: readEnv('REACT_APP_PORT') || '3000'
  };
}
