(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.waitFor = factory());
}(this, (function () { 'use strict';

    /**
     * Returns a Promise that resolves to the value of you need.
     * @param condition A function that returns the variables you need to check, such as () => window.etherem
     * @param options
     * @param options.timeout Maximum detection time, default 5000 ms
     * @param options.step Interval between each detect, default 500 ms
     */
    function index (condition, options) {
        var checkTime = 0;
        options = Object.assign({
            timeout: 5000,
            step: 500,
        }, options);
        return new Promise(function (resolve, reject) {
            var check = function () {
                var data = condition();
                if (data) {
                    resolve(data);
                    return;
                }
                if (checkTime >= options.timeout) {
                    reject(new Error("timeout"));
                    return;
                }
                checkTime += options.step;
                setTimeout(check, options.step);
            };
            check();
        });
    }

    return index;

})));
