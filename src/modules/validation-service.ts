export function email (email: String) : boolean {
  return /.*@.*\..*/.test(email)
}

export function empty (value: String) : Boolean {
  debugger
  return value !== ''
}
