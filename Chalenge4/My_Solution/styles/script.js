document.getElementById('account-name').addEventListener('keyup',()=>{
    document.querySelector('.p-name').textContent=document.querySelector('#account-name').value;
});

document.getElementById('account-number').addEventListener('keyup',()=>{
    document.querySelector('.p').textContent=document.querySelector('.pe').textContent=document.querySelector('#account-number').value;
})