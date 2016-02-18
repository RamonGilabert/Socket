document.addEventListener('DOMContentLoaded', function() {

  var message = document.getElementById('message');

  message.addEventListener('input', function() {
    var text = message.value;

    if (text[text.length - 2] === '{' && text[text.length - 1] === '\n') {
      message.value = text + '\n}';
      message.setSelectionRange(2, 2);
    }

    if (text[0] === '{' && text[text.length - 1] === '}') {
      var lines = text.split('\n');
      var convertedText = '';

      for (index in lines) {
        var line = lines[index];
        if (line[0] != ' ' && line != '{' && line != '}') {
          lines[index] = '  ' + line;
        }
      }

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
  });
});
