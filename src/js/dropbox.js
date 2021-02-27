$(function () {


    let options = {

        // Required. Called when a user selects an item in the Chooser.
        success: function(files) {
            $.post('src/php/images.php', {data: JSON.stringify({
                id: files[0].id,
                name: files[0].name,
                thumbnail: files[0].thumbnailLink,
                link: files[0].link
            })});

        },

        // Optional. Called when the user closes the dialog without selecting a file
        // and does not include any parameters.
        cancel: function() {

        },

        // Optional. "preview" (default) is a preview link to the document for sharing,
        // "direct" is an expiring link to download the contents of the file. For more
        // information about link types, see Link types below.
        linkType: "preview", // or "direct"

        // Optional. A value of false (default) limits selection to a single file, while
        // true enables multiple file selection.
        multiselect: false, // or true

        // Optional. This is a list of file extensions. If specified, the user will
        // only be able to select files with these extensions. You may also specify
        // file types, such as "video" or "images" in the list. For more information,
        // see File types below. By default, all extensions are allowed.
        extensions: ['images'],

        // Optional. A value of false (default) limits selection to files,
        // while true allows the user to select both folders and files.
        // You cannot specify `linkType: "direct"` when using `folderselect: true`.
        folderselect: false, // or true

        // Optional. A limit on the size of each file that may be selected, in bytes.
        // If specified, the user will only be able to select files with size
        // less than or equal to this limit.
        // For the purposes of this option, folders have size zero.
        // sizeLimit: 1024, // or any positive number
        };

        let button = Dropbox.createChooseButton(options);
        document.getElementById("botonDropbox").appendChild(button);
})