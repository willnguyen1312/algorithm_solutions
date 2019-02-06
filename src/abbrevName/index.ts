export function abbrevName(name: string): string {
  function replacer(match, p1: string, p2: string, offset, string) {
    return p1.toUpperCase() + '.' + p2.toUpperCase()
  }
  const regexPattern = /([A-z])[A-z]*\s*\.*([A-z])[A-z]*/
  return name.replace(regexPattern, replacer)
}
