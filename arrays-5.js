let nameofArr = ["SAM", "ABOUD", "ISLAM", "AHMED","BASHAR","KHALED"];

let nameofCheck = prompt("pleas write the name that you what to check");
function existednames(nameofArr, nameofCheck) {
  for (let i = 0; i <= nameofArr.length; i++) {
    if (nameofCheck === nameofArr[i]) {
      return true;
    }
  }
  return false;
}

console.log(existednames(nameofArr, nameofCheck.toUpperCase()));