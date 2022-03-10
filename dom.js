// document.getElementById('batchid').innerHTML = "Hello Batch 100";
// var div = document.getElementsByClassName('mydiv');
// for (let i = 0; i < div.length; i++) {
//     document.write(div[i].style.display ="none");
    
// }

// var tag = document.getElementsByTagName('h1');

// for (let i = 0; i < tag.length; i++) {
//     //document.write(tag[i].innerHTML = "Under Construction");
//     var design = tag[i].style.color = 'red';
//     document.write(design);
// }

function showCustom() {
    var ourdiv = document.querySelectorAll('#maindiv');
for (let i = 0; i < ourdiv.length; i++) {
    ourdiv[i].setAttribute('class','customdesign');
}
}

function showRegular() {
    var ourdiv = document.querySelectorAll('#maindiv');
    for (let i = 0; i < ourdiv.length; i++) {
        ourdiv[i].setAttribute('class','regulardesign');
    }
}


















