(function() {
    $('#finish').click(function() {
        var ext = {
            'id': $('#ext-id').val(),
            'title': $('#ext-name').val(),
            'version': $('#ext-version').val(),
            'authors': $('#ext-authors').val(),
            'description': $('#ext-description').val(),
            'iconurl': $('#ext-iconurl').val(),
            'projecturl': $('#ext-projecturl').val(),
            'licenseurl': $('#ext-licenseurl').val(),
            'download_script': $('#download-script').val(),
            'install_script': $('#install-script').val()
        };
        $.post("/", ext);
    });
})();