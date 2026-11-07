(function(){
var f=document.getElementById('orc');if(!f)return;
var NUM='5513981621428';
f.addEventListener('submit',function(e){e.preventDefault();
var n=f.nome,t=f.tel,m=document.getElementById('msg'),ok=true;
[n,t].forEach(function(i){var v=i.value.trim();i.classList.toggle('invalid',!v);if(!v)ok=false});
if(!ok){m.textContent='Preencha nome e telefone ou WhatsApp para enviar.';return}
var txt='Olá! Gostaria de um orçamento com a Aquarela Print.\n\nNome: '+n.value.trim()+(f.empresa.value.trim()?'\nEmpresa: '+f.empresa.value.trim():'')+'\nTelefone: '+t.value.trim()+'\nServiço: '+f.servico.value+(f.desc.value.trim()?'\nProjeto: '+f.desc.value.trim():'');
m.textContent='Abrindo o WhatsApp com o seu pedido…';
window.aqConv&&window.aqConv();window.open('https://wa.me/'+NUM+'?text='+encodeURIComponent(txt),'_blank','noopener');
});})();
(function(){
var sent=0;
window.aqConv=function(){var n=Date.now();if(n-sent<2000)return;sent=n;
if(typeof gtag==='function')gtag('event','conversion',{'send_to':'AW-980950224/v_fHCNnS87MdENC54NMD','value':1.0,'currency':'BRL'});};
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href*="wa.me"]');if(a)window.aqConv();});
})();