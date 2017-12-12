$(document).ready(() => {
    $("#confirmar_deletar").click(() => {
        if ($("#confirmar_deletar").is(":checked")) {
            $("#excluir").prop('disabled', false);
        }
        else {
            $("#excluir").prop('disabled', true);
        }
    })

    $("#excluir_jmj").submit(function (e) {

        var url = "/jmj/excluir"; // the script where you handle the form input.

        $.ajax({
            type: "POST",
            url: url,
            data: $("#excluir_jmj").serialize(), // serializes the form's elements.
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