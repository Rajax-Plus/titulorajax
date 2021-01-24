$(function (){
    $('#titulo-destaque-1').click(function (){ 
        if(!$('#iframe-destaque-1').length) {
                $('#iframeHolder-destaque-1').html('<iframe id="iframe-destaque-1" class="caixaflutuante-rajaxplus" src="#"></iframe>');
        }
    });   
});  

$(function (){
    $('#titulo-destaque-2').click(function (){ 
        if(!$('#iframe-destaque-2').length) {
                $('#iframeHolder-destaque-2').html('<iframe id="iframe-destaque-2" class="caixaflutuante-rajaxplus" src="https://rajax-plus.github.io/analisandoaconcorrencia.html"></iframe>');
        }
    });   
});  

$(function (){
    $('#titulo-destaque-3').click(function (){ 
        if(!$('#iframe-destaque-3').length) {
                $('#iframeHolder-destaque-3').html('<iframe id="iframe-destaque-3" class="caixaflutuante-rajaxplus" src="https://rajax-plus.github.io/tvfamavirtual.html"></iframe>');
        }
    });   
});  


function abrirDestaque1() {
  if(document.getElementById('spoiler-destaque-1') .style.display=='none') {document.getElementById('spoiler-destaque-1') .style.display=''}else{document.getElementById('spoiler-destaque-1') .style.display='none'}
}
function fecharDestaque1() {
  if(document.getElementById('spoiler-destaque-1') .style.display=='none') {document.getElementById('spoiler-destaque-1') .style.display=''}else{document.getElementById('spoiler-destaque-1') .style.display='none'}
}  

function abrirDestaque2() {
  if(document.getElementById('spoiler-destaque-2') .style.display=='none') {document.getElementById('spoiler-destaque-2') .style.display=''}else{document.getElementById('spoiler-destaque-2') .style.display='none'}
}
function fecharDestaque2() {
  if(document.getElementById('spoiler-destaque-2') .style.display=='none') {document.getElementById('spoiler-destaque-2') .style.display=''}else{document.getElementById('spoiler-destaque-2') .style.display='none'}
}

function abrirDestaque3() {
  if(document.getElementById('spoiler-destaque-3') .style.display=='none') {document.getElementById('spoiler-destaque-3') .style.display=''}else{document.getElementById('spoiler-destaque-3') .style.display='none'}
}
function fecharDestaque3() {
  if(document.getElementById('spoiler-destaque-3') .style.display=='none') {document.getElementById('spoiler-destaque-3') .style.display=''}else{document.getElementById('spoiler-destaque-3') .style.display='none'}
}
