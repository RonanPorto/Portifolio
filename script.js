const imagem = document.getElementById('myimg');

imagem.addEventListener('mouseover', function(){
    imagem.style.transform = 'scale(1.2)';
    imagem.style.zIndex = '1';
});
imagem.addEventListener('mouseout', function(){
    imagem.style.transform = 'scale(1)';
    imagem.style.zIndex = '0';
});