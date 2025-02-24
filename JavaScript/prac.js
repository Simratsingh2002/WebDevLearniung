function double(a){
  for (let index = 0; index < a.length; index++) {
    a[index]=a[index]*2
    for (let i=index;i<a.length;i++){
      if (a[i]*2==a[i+1]*2 && i==index) {
        i=i+1
      }
      else if (a[i]==a[i+1]) {
        i=i+1}
        else{
          break;
        }
    }
  
}return a}
console.log("a");