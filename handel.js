let data;
document.getElementById('textInput').addEventListener('input', function() {
    let codes = this.value.split(',')
    let match = []
    codes.forEach(value => {
        value = value.trim()
        if (value === '' || value > 67) return
        match.push(data.find(({id})=> id === value ).name)
    })
    document.getElementById('outputText').textContent = match.toString();
});
fetch("./dcode.json")
    .then(response => response.json())
    .then(json => {
        data = json
    });
