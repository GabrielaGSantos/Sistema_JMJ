$(document).ready(() => {
    $("#editar_jmj").submit(function (e) {
        var url = window.location.pathname; // the script where you handle the form input.
        var value = "";

        if($("#pais").val() != $("#pais").attr("placeholder"))
            value = `pais=${$("#pais").val()}&`;

        if($("#cidade").val() != $("#cidade").attr("placeholder"))
            value = `cidade=${$("#cidade").val()}&`;
        
        if($("#ano").val() != $("#ano").attr("placeholder"))
            value = `ano=${$("#ano").val()}&`;

        if($("#periodo").val() != $("#periodo").attr("placeholder"))
            value = `periodo=${$("#periodo").val()}&`;
        
        if($("#lema").val() != $("#lema").attr("placeholder"))
            value = `lema=${$("#lema").val()}&`;
            
        $.ajax({
            type: "POST",
            url: url,
            data: $("#editar_jmj").serialize(), // serializes the form's elements.
            dataType: 'json',
            success: function (data) {
                if (data.error)
                    alert(data.error);
                else 
                    alert(data.message);
            }
        });

        e.preventDefault(); // avoid to execute the actual submit of the form.
    });
})