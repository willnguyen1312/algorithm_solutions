export function abbrevName(name: string): string {
  const regexPattern = /([A-Z])\w*\s([A-Z])\w*/
  return name.replace(regexPattern, '$1.$2')
}
