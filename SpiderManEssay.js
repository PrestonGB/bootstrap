let villains = document.getElementById("villains");
let villainBody = document.getElementById("selection");

//let villainsObj = Object.values(villains);
//let villainsArray = Object.values(villainsObj);
//let villainClasses = villainsArray.map(item => item.className);
//let norman = document.getElementsByClassName("norman")[0];
//console.log(norman)
/*let getVillains = () => {
  villainClasses.forEach(entry => {
    console.log(entry);
     return entry=entry;
  })
}

getVillains();
*/

/*villains.addEventListener('select', function() {
  console.log('bull')
});*/

villains.addEventListener("change", function(event){
  console.log(`you look like ${event.target.value}`);
  villainBody.children[0].innerText=`Name: ${event.target.value} ; will need to create object for this`;
  villainBody.children[1].innerText=`Alias: ${event.target.value} but not really ; will need to create object for this`;
  villainBody.children[2].innerText=`First Appearance: ${event.target.value}.. uh that can't be right; will need to create object for this`
  villainBody.children[3].innerText=`oh my god this is totally all about ${event.target.value} he a badddd guy`;
})
