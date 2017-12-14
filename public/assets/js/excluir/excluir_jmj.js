$(document).ready(() => {
    $("#demo-priority-low").click(() => {
        $("#excluir").prop('disabled', false);
    })

    $("#demo-priority-high").click(() => {
        $("#excluir").prop('disabled', true);
    })

    $("#excluir_jmj").submit(function (e) {
        var url = window.location.pathname; // the script where you handle the form input.

        $.ajax({
            type: "POST",
            url: url,
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