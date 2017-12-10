$(document).ready(()=>{
    var numero = 1
    $("#adicionar_comunidade").click(()=>{
        $("#lista_comunidades").append(`<div class="field half first">        
        <input type="text" name="comunidade_${++numero}" value="" placeholder="Exemplo: ${numero} "/>
      </div>
      <div class="field half">
        <input type="text" name="responsavel_${numero}" value="" placeholder="Exemplo: Luciano"/>
      </div>`)
    })
})