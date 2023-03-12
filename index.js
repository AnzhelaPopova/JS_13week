function add() {
  const title = document.getElementById('title');
  const newElement1 = document.createElement('div');
  const newElement2 = document.createElement('img');
  const newElement3 = document.createElement('div');
  const newElement4 = document.createElement('date');

  const ava = [
    '/images/ava1.jpg',
    '/images/ava2.jpg',
    '/images/ava3.jpg',
    '/images/ava4.jpg',
    '/images/ava5.jpg',
    '/images/ava6.jpg'
  ];
 
  title.after (newElement1);
  newElement1.after (newElement2);
  newElement2.after (newElement3);
  newElement3.after (newElement4);
      
  let nameInput = document.getElementById('name')
  let nameInputValue= nameInput.value
  let nameDelSpace = nameInputValue.replace(/\s+/g, ' ').trim()
  let nameLowerCase = nameDelSpace.toLowerCase()
  
  let nameCut = nameLowerCase.split(" ")
  let name_1 = nameCut[0]
  let name_2 = nameCut[1]
  let name_3 = nameCut[2]

  let radioInput = document.getElementsByName('radiobtn')
  let radioInputValue = radioInput[0].checked
  
       function name () {
         if (nameInputValue == "" || radioInputValue == false) {
           return  'username'}
           else if ( name_2 == undefined & name_3 == undefined ){ return nameFirst = name_1[0].toUpperCase() + name_1.slice(1) }
           else if ( name_3 == undefined ){ return (name_1[0].toUpperCase() + name_1.slice(1)) + " " + (name_2[0].toUpperCase() + name_2.slice(1)) }
          else { return (name_1[0].toUpperCase() + name_1.slice(1)) + " " + (name_2[0].toUpperCase() + name_2.slice(1)) + " " +  (name_3[0].toUpperCase() + name_3.slice(1))}
        }
      newElement1.innerHTML = name ()
  
  let fotoInput = document.getElementById('foto')
  let fotoInputValue = fotoInput.value
      
  function showFoto (fotoInputValue) {
    
  if (fotoInputValue == "") {
   const randomAva = Math.floor(Math.random() * ava.length);
    newElement2.setAttribute ('src', ava[randomAva])
    newElement2.setAttribute ('style', 'width: 100px')
  }
    
   else {
    newElement2.setAttribute ('src', fotoInputValue)
    newElement2.setAttribute ('style', 'width: 100px')
  }
} 

newElement2.innerHTML = showFoto (fotoInputValue)


  let commentInput = document.getElementById('comment')
  let commentInputValue = commentInput.value

  function checkSpam() {
    let comment = commentInput.value;
    let checkedComment = comment.replace(/viagra|xxx/gi, '***');
    return checkedComment;
  }
     
   newElement3.innerHTML = checkSpam()

   newElement4.innerHTML = new Date()
}



  
