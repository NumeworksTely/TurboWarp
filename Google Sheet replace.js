(function(ext) {

   // Définissez les blocs et les fonctions

    var sheet_url = "https://sheetsu.com/apis/v1.0su/......"; // Replace ...... with your Sheetsu API URL

   ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext._shutdown = function() {
    };

   ext.update_sheet_cell = function(column, row, value, callback) {
        var data = {};
        data[column] = value;
        $.ajax({
            url: sheet_url + '/row/' + row,
            type: 'PUT',
            data: data,
            success: function(result) {
                callback(result);
            }
        });
   };

   // Définissez la description et l'interface utilisateur des blocs

    var descriptor = {
        blocks: [
            [' ', 'set value of column %n row %n to %s', 'update_sheet_cell', 1, 1, ''],
        ]
    };

   // Enregistrez l'extension

    ScratchExtensions.register('Google Sheets Extension', descriptor, ext);

})({});