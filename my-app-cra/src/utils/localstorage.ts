export function removeStorage(key: string) {
  localStorage.setItem(key, '');
}

export function getStorage(key: string) {
  const value = localStorage.getItem(key);
  return value;
}

export function setStorage(key: string, value: any) {
  localStorage.setItem(key, value);
}
