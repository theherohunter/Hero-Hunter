/*
 * Input: { prop1: { prop2: 'value } }
 * Output: { prop1.prop2: value }
 */

export function flattenDictionary(nestedMessages, prefix = '', separator = '.') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}${separator}${key}` : key;

    if (typeof value.id === 'string') {
      messages[prefixedKey] = value.value;
    } else {
      Object.assign(messages, flattenDictionary(value, prefixedKey));
    }

    return messages;
  }, {});
}
