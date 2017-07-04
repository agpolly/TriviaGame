<!DOCTYPE html>
<html lang="en">
<html>
<head>
<meta charset="UTF-8">

  <title>Trivia Game</title>

    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Audiowide" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</head>
<body>

  <div class="container">
    <div class="row" id="header">
      <div class="col-md-12"><p>Wizarding World Trivia</p>
    </div>
  </div>

  <br>

  <div class="row" id="timer">
    <div class="col-md-12"> 
    </div>
  </div>

  <br>
  <br>

  <div class="row">
    <div class="col-md-12">Who was the half-blood prince?</div>
  </div>

  <br>

   <div class="row">
    <div class="col-md-12">
      <ul class="answers">
        <input type="radio" name="q1" value="a" id="q1a"><label for="q1a">Harry</label><br/>
        <input type="radio" name="q1" value="b" id="q1b"><label for="q1b">Snape</label><br/>
        <input type="radio" name="q1" value="c" id="q1c"><label for="q1c">Dumbledore</label><br/>
        <input type="radio" name="q1" value="d" id="q1d"><label for="q1d">Voldemort</label><br/>
      </ul>
    </div>
   </div>

  <br>

 <div class="row" id="question-1">
    <div class="col-md-12">What does the spell alohomora do?</div>
  </div>

  <br>

   <div class="row">
    <div class="col-md-12">
      <ul class="answers">
        <input type="radio" name="q1" value="a" id="q1a"><label for="q1a">Make things levitate</label><br/>
        <input type="radio" name="q1" value="b" id="q1b"><label for="q1b">Shine a light</label><br/>
        <input type="radio" name="q1" value="c" id="q1c"><label for="q1c">Repair things</label><br/>
        <input type="radio" name="q1" value="d" id="q1d"><label for="q1d">Open doors</label><br/>
      </ul>
    </div>
   </div>

</body>
  <script src="assets/javascript/game.js"></script>
</html>