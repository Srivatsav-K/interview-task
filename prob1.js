function maximizeTheSum(N, K, A) {
    if (K > 0) {
        const sorted = [...A].sort((a, b) => b - a)
        const distinctIntegers = sorted.slice(0, K)
        let sum = 0
        for (let i = 0; i < A.length; i++) {
            if (distinctIntegers.includes(A[i])) {
                sum += A[i]
            }
        }
        return sum
    } else {
        return 0
    }

}
console.log(maximizeTheSum(4, 1, [3, -1, 2, 5]))
console.log(maximizeTheSum(4, 2, [2, 1, 2, 5]))
