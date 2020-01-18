export function email (email: String) : boolean {
  debugger
  if (email === '') {
    return false
  }
  return /\d/.test(email)
}
