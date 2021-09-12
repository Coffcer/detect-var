/**
 * Returns a Promise that resolves to the value of you need.
 * @param condition A function that returns the variables you need to check, such as () => window.etherem
 * @param options
 * @param options.timeout Maximum detection time, default 5000 ms
 * @param options.step Interval between each detect, default 500 ms
 */
export default function <T>(condition: () => T, options?: {
    timeout?: number;
    step?: number;
}): Promise<T>;
