let arr = ['b','h','w','e','a'];
arr.sort((a, b) => a.localeCompare(b, undefined, {numeric: true}))
console.log(arr)