var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").classList.remove("hide")
    
    console.log("abc")
  } else {
    document.getElementById("navbar").classList.add("hide")
    
    console.log("cba")
  }
  prevScrollpos = currentScrollPos;
}
console.log("sasdsd")