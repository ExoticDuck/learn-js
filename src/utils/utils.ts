export const stringifyEmptyVars = (arg: any) => {
  if (arg === undefined) {
    return 'undefined'
  } else if (isNaN(arg)) {
    return 'NaN'
  } else if (arg === null) {
    return 'null'
  } else return arg
}
