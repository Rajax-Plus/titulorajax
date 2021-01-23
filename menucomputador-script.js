$(function (){
    $('#titulo-rajax-noticias').click(function (){ 
        if(!$('#iframe-rajax-noticias').length) {
                $('#iframeHolder-rajax-noticias').html('<iframe id="iframe-rajax-noticias" class="caixaflutuante-rajaxplus" src="https://www.rajax.com.br/p/noticias.html"></iframe>');
        }
    });   
});  
  
$(function (){
    $('#titulo-rajax-shows').click(function (){ 
        if(!$('#iframe-rajax-shows').length) {
                $('#iframeHolder-rajax-shows').html('<iframe id="iframe-rajax-shows" class="caixaflutuante-rajaxplus" src="https://www.rajax.com.br/p/shows.html"></iframe>');
        }
    });   
});  
  
$(function (){
    $('#titulo-rajax-historias').click(function (){ 
        if(!$('#iframe-rajax-historias').length) {
                $('#iframeHolder-rajax-historias').html('<iframe id="iframe-rajax-historias" class="caixaflutuante-rajaxplus" src="https://www.rajax.com.br/p/historias.html"></iframe>');
        }
    });   
});  
  
$(function (){
    $('#titulo-rajax-canais').click(function (){ 
        if(!$('#iframe-rajax-canais').length) {
                $('#iframeHolder-rajax-canais').html('<iframe id="iframe-rajax-canais" class="caixaflutuante-rajaxplus" src="https://www.rajax.com.br/p/canais.html"></iframe>');
        }
    });   
});  

$(function (){
    $('#titulo-rajax-busca-pc').click(function (){ 
        if(!$('#iframe-rajax-busca-pc').length) {
                $('#iframeHolder-rajax-busca-pc').html('<iframe id="iframe-rajax-busca-pc" class="caixaflutuante-rajaxplus" src="https://www.rajax.com.br/p/busca.html"></iframe>');
        }
    });   
});    

$(function (){
    $('#titulo-rajax-contato-pc').click(function (){ 
        if(!$('#iframe-rajax-contato-pc').length) {
                $('#iframeHolder-rajax-contato-pc').html('<iframe id="iframe-rajax-contato-pc" class="caixaflutuante-rajaxplus" src="https://www.rajax.com.br/p/contato.html"></iframe>');
        }
    });   
}); 

$(function (){
    $('#titulo-rajax-institucional').click(function (){ 
        if(!$('#iframe-rajax-institucional').length) {
                $('#iframeHolder-rajax-institucional').html('<iframe id="iframe-rajax-institucional" class="caixaflutuante-rajaxplus" src="https://www.rajax.com.br/p/institucional.html"></iframe>');
        }
    });   
}); 

function abrirNoticias() {
  if(document.getElementById('spoiler-rajax-noticias') .style.display=='none') {document.getElementById('spoiler-rajax-noticias') .style.display=''}else{document.getElementById('spoiler-rajax-noticias') .style.display='none'}
}
function fecharNoticias() {
  if(document.getElementById('spoiler-rajax-noticias') .style.display=='none') {document.getElementById('spoiler-rajax-noticias') .style.display=''}else{document.getElementById('spoiler-rajax-noticias') .style.display='none'}
}  
  
function abrirShows() {
  if(document.getElementById('spoiler-rajax-shows') .style.display=='none') {document.getElementById('spoiler-rajax-shows') .style.display=''}else{document.getElementById('spoiler-rajax-shows') .style.display='none'}
}
function fecharShows() {
  if(document.getElementById('spoiler-rajax-shows') .style.display=='none') {document.getElementById('spoiler-rajax-shows') .style.display=''}else{document.getElementById('spoiler-rajax-shows') .style.display='none'}
}  
  
function abrirHistorias() {
  if(document.getElementById('spoiler-rajax-historias') .style.display=='none') {document.getElementById('spoiler-rajax-historias') .style.display=''}else{document.getElementById('spoiler-rajax-historias') .style.display='none'}
}
function fecharHistorias() {
  if(document.getElementById('spoiler-rajax-historias') .style.display=='none') {document.getElementById('spoiler-rajax-historias') .style.display=''}else{document.getElementById('spoiler-rajax-historias') .style.display='none'}
}  
  
function abrirCanais() {
  if(document.getElementById('spoiler-rajax-canais') .style.display=='none') {document.getElementById('spoiler-rajax-canais') .style.display=''}else{document.getElementById('spoiler-rajax-canais') .style.display='none'}
}
function fecharCanais() {
  if(document.getElementById('spoiler-rajax-canais') .style.display=='none') {document.getElementById('spoiler-rajax-canais') .style.display=''}else{document.getElementById('spoiler-rajax-canais') .style.display='none'}
}  
  
function abrirBuscaPC() {
  if(document.getElementById('spoiler-rajax-busca-pc') .style.display=='none') {document.getElementById('spoiler-rajax-busca-pc') .style.display=''}else{document.getElementById('spoiler-rajax-busca-pc') .style.display='none'}
}
function fecharBuscaPC() {
  if(document.getElementById('spoiler-rajax-busca-pc') .style.display=='none') {document.getElementById('spoiler-rajax-busca-pc') .style.display=''}else{document.getElementById('spoiler-rajax-busca-pc') .style.display='none'}
} 

function abrirContatoPC() {
  if(document.getElementById('spoiler-rajax-contato-pc') .style.display=='none') {document.getElementById('spoiler-rajax-contato-pc') .style.display=''}else{document.getElementById('spoiler-rajax-contato-pc') .style.display='none'}
}
function fecharContatoPC() {
  if(document.getElementById('spoiler-rajax-contato-pc') .style.display=='none') {document.getElementById('spoiler-rajax-contato-pc') .style.display=''}else{document.getElementById('spoiler-rajax-contato-pc') .style.display='none'}
} 

function abrirInstitucional() {
  if(document.getElementById('spoiler-rajax-institucional') .style.display=='none') {document.getElementById('spoiler-rajax-institucional') .style.display=''}else{document.getElementById('spoiler-rajax-institucional') .style.display='none'}
}
function fecharInstitucional() {
  if(document.getElementById('spoiler-rajax-institucional') .style.display=='none') {document.getElementById('spoiler-rajax-institucional') .style.display=''}else{document.getElementById('spoiler-rajax-institucional') .style.display='none'}
}  
