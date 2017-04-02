function forLoop (arrayName){
  for (var i=0; i<25; i++) {
    if (i===1) {
      arrayName.push("I am 1 strange loop")
    } else {
      arrayName.push(`I am ${i} loops`)
    }
  }
  return arrayName
}
function whileLoop (num) {
    while (num > 0){
        console.log(--num)
    }
    return "done"
}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop (arrayName) {
    do {
      arrayName.pop()
    }while (arrayName.length > 0 && maybeTrue())
    return arrayName
}
