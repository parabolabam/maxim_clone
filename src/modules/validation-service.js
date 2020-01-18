export function email (email) {
  return /.*@.*\..*/.test(email)
}

export function empty (value) {
  return value !== ''
}
