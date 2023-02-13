let obj ={
    "key1" : "9774",
    "key2" : "1234",
    "key3" : "2356"
}

console.log(Object.keys(obj));
Object.keys(obj).forEach(key => {
    console.log(obj[key]);
})
