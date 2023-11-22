var arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arr2 = [];
var n = 0;

const func = () => {
  for (var i = arr.length-1; i >= 0; i--) {
    arr2[n] = arr[i];
    n += 1;
  }
}
func();

for (var i = 0; i <= arr2.length; i++) {
    var a = arr2[i];
    var b = arr[i];
    console.log("[ "+a+" - "+b+" ]")
}

//I just wanna keep my github strike to be honest