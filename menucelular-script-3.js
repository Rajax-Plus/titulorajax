$(function (){
    $('#titulo-rajax-explore').click(function (){ 
        if(!$('#iframe-rajax-explore').length) {
                $('#iframeHolder-rajax-explore').html('<iframe id="iframe-rajax-explore" class="caixaflutuante-rajaxplus" src="https://www.rajax.com.br/p/busca.html"></iframe>');
        }
    });   
});  

$(function (){
    $('#titulo-rajax-contato-cel').click(function (){ 
        if(!$('#iframe-rajax-contato-cel').length) {
                $('#iframeHolder-rajax-contato-cel').html('<iframe id="iframe-rajax-contato-cel" class="caixaflutuante-rajaxplus" src="https://www.rajax.com.br/p/contato.html"></iframe>');
        }
    });   
}); 

function abrirExplore() {
  if(document.getElementById('spoiler-rajax-explore') .style.display=='none') {document.getElementById('spoiler-rajax-explore') .style.display=''}else{document.getElementById('spoiler-rajax-explore') .style.display='none'}
}
function fecharExplore() {
  if(document.getElementById('spoiler-rajax-explore') .style.display=='none') {document.getElementById('spoiler-rajax-explore') .style.display=''}else{document.getElementById('spoiler-rajax-explore') .style.display='none'}
}  

function abrirContatoCel() {
  if(document.getElementById('spoiler-rajax-contato-cel') .style.display=='none') {document.getElementById('spoiler-rajax-contato-cel') .style.display=''}else{document.getElementById('spoiler-rajax-contato-cel') .style.display='none'}
}
function fecharContatoCel() {
  if(document.getElementById('spoiler-rajax-contato-cel') .style.display=='none') {document.getElementById('spoiler-rajax-contato-cel') .style.display=''}else{document.getElementById('spoiler-rajax-contato-cel') .style.display='none'}
}  
