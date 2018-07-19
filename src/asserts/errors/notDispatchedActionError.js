import stringify from 'json-stringify-safe';

function notDispatchedActionError(dispatchedActions, expectedActions, action) {
  return new Error(
    `Action ${stringify(action)} was not dispatched when it was expected.\n` +
    `Actions expected to be dispatched: ${stringify(expectedActions)}\n` +
    `Actual dispatched actions: ${stringify(dispatchedActions)}`
  );
}

export { notDispatchedActionError };
