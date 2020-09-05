function keys(o?: object | null) {
  if (typeof o === 'undefined' || o === null) {
    return [];
  }

  return Object.keys(o);
}

export default keys;
