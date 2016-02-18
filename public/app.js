document.addEventListener('DOMContentLoaded', function() {

  var firstField = document.getElementById('first-field');
  var secondField = document.getElementById('second-field');
  var message = document.getElementById('message');
  var button = document.getElementById('send-socket');

  message.addEventListener('input', function() {
    var text = message.value;

    if (text[text.length - 2] === '{' && text[text.length - 1] === '\n') {
      message.value = text + '   \n}';
      message.setSelectionRange(5, 5);
    }

    if (text[0] === '{' && text[text.length - 1] === '}') {
      var lines = text.split('\n');
      var convertedText = '';
      var shouldChange = false;

      for (index in lines) {
        var line = lines[index];
        if (line[0] != ' ' && line != '{' && line != '}') {
          shouldChange = true;
          lines[index] = '   ' + line;
        }
      }

      if (shouldChange) {
        lines.forEach(function(line) {
          if (line != '}') {
            convertedText += line + '\n';
          } else {
            convertedText += '}'
          }
        });

        message.value = convertedText;
        message.setSelectionRange(message.value.length - 2, message.value.length - 2);
      }
    }
  });

  button.addEventListener('click', function() {
    var address = firstField.value;
    var channel = secondField.value;
    var lines = message.value.split('\n');
    var stringJSON = '';

    lines.forEach(function(line) {
      stringJSON += line.replace(/ /g,'');
    });

    console.log(stringJSON);
    var letter = JSON.parse(stringJSON);
    console.log(letter);
  });
});
