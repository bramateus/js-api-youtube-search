<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Teste iCasei: Front-End</title>
  </head>
  <body>

    <!-- <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css"> -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">




    <link rel="stylesheet" type="text/css" href="css/animate.css">
    <link rel="stylesheet" type="text/css" href="css/style2.css"> 

    <style type="text/css">


    </style>


    <div class="container AAA" style="margin-top: 15%">
      <h1 class="headline">
        iCasei Youtube API
      </h1>

      <div class="row" style="margin-left: 0px">
        <!-- <div class="input-field col s5">
          <input id="userInput" type="text" value="cpm22" class="validate">
          <label for="userInput">Pesquisar</label>
        </div>
        <div class="input-field col s2">
          <a class="waves-effect waves-light btn" id="searchBtn">
            <i class="fa fa-search" aria-hidden="true"></i> Search
          </a>
        </div> -->
        <div class="custom-file">
          
          <div class="input-group" style="width: 50%; float: left;">
            <input type="text" id="userInput" class="form-control" required>
            <span style="margin-left: -2px; cursor: pointer;" class="input-group-text" id="searchBtn">Pesquisar</span>
          </div>


          <div class="input-group" style="float: right; width: 12%">
            <span>Mostrar: &nbsp</span>
            <input style="width: 45%; text-align: center;" id="sizeInput" type="text" class="form-control" value="5" placeholder="Mostrar">
          </div>

        
        </div>




        <!-- <div class="input-field col s5" style="display: block;">
          <input id="sizeInput" type="text" value='5' class="validate">
          <label for="userInput">Mostrar</label>
        </div> -->
      </div>

      <div class="image-container">
      </div>
        <!-- // More image btn -->



      <div id="results"></div>

      <div id="main" class="vlogs-playlist playlist animated bounce medium" style="display: none; margin-top: 25px">
        <h2 class="playlist-title">Recomendados</h2>
        <div class="playlist-videos">
          <div class="playlist-video" tabindex="0">
            <div class="video-thumbnail">
              <img id="video-thumb" src="" alt="">
            </div>
            <div class="video-info">
              <h3 class="video-title"></h3>
              <ul class="video-meta-data">
                <!-- <li class="video-creator"><i class="fas fa-check-circle"></i></li> -->
                <li class="video-views"></li>
                <li class="video-upload-date"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <a  class="waves-effect waves-light btn" id="moreImagesBtn" style="background-color: #cecece; margin: 0 0 50px 0; display: none">
        BRING MORE
        <i class="fa fa-chevron-down" aria-hidden="true"></i> 
      </a>
  </div>





  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script type="text/javascript" src="js/script.js"></script>



  
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/js/materialize.min.js"></script>
    <!-- <script src="application.js"></script> -->
  </body>
</html>