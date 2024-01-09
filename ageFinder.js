document.getElementById('btn-age-result').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    if( inputText >= 18 ){
        const h3 = document.getElementById('input-result');
        h3.innerText = ('You are an Adult');
        
    }
    else{
        const h3 = document.getElementById('input-result');
        h3.innerText = ('You are a Child');
    }
    
    inputField.value = ''; 
  })