(function(ext) {

    // Define the blocks and functions

    var sheet_url = "https://sheetsu.com/apis/v1.0su/8deb0b1fa203"; // Replace ...... with your Sheetsu API URL

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext._shutdown = function() {
    };

    ext.read_sheet_column = function(column, row, callback) {
        $.getJSON(sheet_url, function(data) {
            var rowData = data.map(function(elem) {
                return elem[column-1];
            });
            callback(rowData[row-1]);
        });
    };

    // Define the description and user interface of the blocks

    var descriptor = {
        blocks: [
            ['R', 'read column %n row %n', 'read_sheet_column', 1, 1],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Google Sheets Extension', descriptor, ext);

})({});