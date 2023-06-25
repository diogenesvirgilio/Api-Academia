export class MaxNumberOCheckInsError extends Error {
  constructor() {
    super('Max number of check-ins reached.')
  }
}
