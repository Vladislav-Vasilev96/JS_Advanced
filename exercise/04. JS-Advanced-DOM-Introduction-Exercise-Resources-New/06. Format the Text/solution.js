function solve() {
  let input =  document.getElementById('input').value;
  let output= document.getElementById('output');
  let sentences = input.split('.').filter(s => s.length != 0)

  while (sentences.length>0){
    let textParagraph = sentences.splice(0,3).join('. ')+ '.';
    let p = document.createElement('p')
    p.textContent = textParagraph;
    output.appendChild(p)
  }
}