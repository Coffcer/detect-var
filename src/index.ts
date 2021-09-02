/**
 * Returns a Promise that resolves to the value of you need.
 * @param detect A function that returns the variables you need to check, such as () => window.etherem
 * @param options
 * @param options.timeout Maximum detection time, default 5000 ms
 * @param options.step Interval between each detect, default 500 ms
 */
export default function <T>(
  detect: () => T,
  options = { timeout: 5000, step: 500 }
): Promise<T> {
  let checkTime = 0

  return new Promise((resolve, reject) => {
    const check = () => {
      const data = detect()
      if (data) {
        resolve(data)
        return
      }
      if (checkTime >= options.timeout) {
        reject(new Error('detect timeout'))
        return
      }
      checkTime += options.step
      setTimeout(check, checkTime)
    }
    check()
  })
}
