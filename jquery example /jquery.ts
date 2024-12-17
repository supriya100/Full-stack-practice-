<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>jQuery Animation Example</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    $(document).ready(function () {
      $('#btnFadeOut').click(function () {
        $('#box').fadeOut(1000); // Fade out over 1 second
      });

      $('#btnFadeIn').click(function () {
        $('#box').fadeIn(1000); // Fade in over 1 second
      });
    });
  </script>
  <style>
    #box {
      width: 100px;
      height: 100px;
      background-color: red;
    }
  </style>
</head>
<body>
  <h1>jQuery Animation Example</h1>
  <div id="box"></div>
  <button id="btnFadeOut">Fade Out</button>
  <button id="btnFadeIn">Fade In</button>
</body>
</html>
