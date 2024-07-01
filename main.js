$(document).ready(function() {
    $('#lista_tarefas').submit(function(event) {
        event.preventDefault();

        var taskName = $('#text').val().trim();

        if (taskName) {
            var taskItem = $('<li></li>').text(taskName);
            var removeButton = $('<button class="remove-btn">Remover</button>');

            removeButton.click(function() {
                $(this).parent().remove();
            });

            taskItem.append(removeButton);
            $('#lista').append(taskItem);
            $('#text').val('');
        }
    });

    $('#lista').on('click', 'li', function(event) {
        if (!$(event.target).is('.remove-btn')) {
            $(this).toggleClass('completed');
        }
    });

    $('#clear').click(function() {
        $('#lista').empty();
    });
});
