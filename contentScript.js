document.addEventListener('mouseup', function() {
    var selectedText = window.getSelection().toString();
    if (selectedText.length > 0) {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedText}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0 && data[0].meanings && data[0].meanings[0].definitions) {
                alert(data[0].meanings[0].definitions[0].definition);
            } else {
                alert('No data found for the selected word.');
            }
        })
        .catch(error => {
            alert('Error fetching data: ' + error);
        });
    }
});
