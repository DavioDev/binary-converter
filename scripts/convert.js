function convert() {
    var output = document.getElementById("inputt");
    var input = document.getElementById("ti1").value;
    output.value = "";
    for (var i = 0; i < input.length; i++) {
        output.value += input[i].charCodeAt(0).toString(2) + " ";
    }
  }


document.getElementById('execCopy').addEventListener('click', execCopy);
function execCopy() {
  document.querySelector("#inputt").select();
  document.execCommand("copy");
}


document.getElementById('clipboardCopy').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
  let text = document.querySelector("#inputt").value;
  await navigator.clipboard.writeText(text);
}