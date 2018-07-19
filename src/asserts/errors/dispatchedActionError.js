import stringify from 'json-stringify-safe';

function dispatchedActionError(dispatchedActions, expectedActions, action) {
  return new Error(
    `Action ${stringify(action)} was dispatched when it was unexpected.\n` +
    `Actions expected to be not dispatched: ${stringify(expectedActions)}\n` +
    `Actual dispatched actions: ${stringify(dispatchedActions)}`
  );
}

export { dispatchedActionError };
