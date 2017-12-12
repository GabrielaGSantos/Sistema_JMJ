$(document).ready(()=>{
    var numero = 1
    $("#adicionar_funcoes").click(()=>{
        $("#lista_funcoes").append(`<div class="field">
        <input type="text" name="funcao_${numero++}" value="" placeholder="Exemplo: ${numero==3?'Jovem':'Apoio'}"/>
      </div>`)
    })
})