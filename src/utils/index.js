// 组合函数
export const compose = (...funs) => {
    return z => funs.reduceRight((x, y) => y(x), z)
}

// 组合函数
export const pipe = (...funs) => {
    return z => funs.reduce((x, y) => y(x), z)
}

// 函数柯里化,把需要多个参数的函数变成一个一个参数输入的函数
export function curry(fn, arity = fn.length) {
    return (function nextCurried(prevArgs) {
        return function curried(nextArg) {
            const args = [...prevArgs, nextArg]
            return args.length >= arity ? fn(...args) : nextCurried(args)
        }
    })([])
}