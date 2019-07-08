   $(
  (function() {
    "use strict";


  $('#searchBtn').on('click',function(){

  $('.AAA').animate({marginTop: +25},'slow');
  $('#moreImagesBtn').css('display','block');
  $('.input-field').css('display','block');

});







    // API Key
    const flickrKey = "AIzaSyDIDsg6K1u6P_M151KRFZqwUD4_Y-aMJkQ";
    // Search Text
    let userInput = $("#userInput");
    // Search Btn
    let searchBtn = $("#searchBtn");
    // More Images btn
    let moreImagesBtn = $("#moreImagesBtn");
    // Result Image area
    let imageContainer = $(".image-container");
    // Count of returned results
    let perPageCount = 20;
    // variable for current page requested so that when the user scrolls, it is increamented and json is requested
    let currentPage = 1;

    let sizeBtn = $("#sizeInput").val();

    console.log(sizeBtn);

    let results = $('.playlist-videos');

    let next = '';

    var KEY = 'AIzaSyDIDsg6K1u6P_M151KRFZqwUD4_Y-aMJkQ';

    // SEARCH BTN EVENT LISTENER






   
 
    searchBtn.on("click", function() {

      $('#bring-more').css('display','block');
      $('#main').css('display','block');
 
      $('#results').empty();
      imageContainer.html("");

      var url_search = 'https://www.googleapis.com/youtube/v3/search';
   

      var searchParams = {
          part: 'id,snippet',
          maxResults: sizeBtn,
          // pageToken: 'dsfdsf',
          q: userInput.val(),
          key: KEY,
          id:'RsEeyZNiwUk'
      };

      

      $.get(url_search, searchParams, function(response) {
        results.empty();
        

        console.log(response.items);
        if (response.items.length == 0) {
          $('.playlist-title').remove();
          $("<div style='text-align: center' class='col-xl-12' id='heref' />").html('<h1 style="padding: 50px 0;">:( Não encontramos vídeos com o termo buscado.<br><br>Utilize outras palavras-chave.</h1>').appendTo(results);
        }


        next = response.nextPageToken;
        console.log(response.nextPageToken);

        console.log(url_search);
        

        $.each(response.items, function(index, item) {
          var my_obj_str = JSON.stringify(item);
          console.log("--> "+my_obj_str);

          $("<div class='col-xl-12' id='here' />").html('<div class="row"><div class="playlist-video" tabindex="0"> <div class="video-thumbnail" style="float: left; padding-right: 15px"> <img id="video-thumb" src="'+item.snippet.thumbnails.high.url+'" alt="" style="width: 210px; height: 118px"> </div><div class="video-info"> <h3 class="video-title">'+item.snippet.title+'</h3> <ul class="video-meta-data"> <li class="video-creator">'+item.snippet.channelTitle+' <i class="fas fa-check-circle"></i></li><li class="video-views">252K views</li><li class="video-upload-date">1 day ago</li></ul> </div></div></div>').appendTo(results);

        });
      });
    }); // end of SEARCH BTN EVENT LISTENER


 






       $("#sizeInput").blur(function(){
        // alert('asd');
    // API Key
    const flickrKey = "AIzaSyDIDsg6K1u6P_M151KRFZqwUD4_Y-aMJkQ";
    // Search Text
    let userInput = $("#userInput");
    // Search Btn
    let searchBtn = $("#searchBtn");
    // More Images btn
    let moreImagesBtn = $("#moreImagesBtn");
    // Result Image area
    let imageContainer = $(".image-container");
    // Count of returned results
    let perPageCount = 10;
    // variable for current page requested so that when the user scrolls, it is increamented and json is requested
    let currentPage = 1;

    let sizeBtn = $("#sizeInput").val();

    console.log(sizeBtn);

    let results = $('.playlist-videos');

    let next = '';

    var KEY = 'AIzaSyDIDsg6K1u6P_M151KRFZqwUD4_Y-aMJkQ';

    // SEARCH BTN EVENT LISTENER


      $('#results').empty();
      imageContainer.html("");

      var url_search = 'https://www.googleapis.com/youtube/v3/search';

      var searchParams = {
          part: 'id,snippet',
          maxResults: sizeBtn,
          // pageToken: 'dsfdsf',
          q: userInput.val(),
          key: KEY
      };

      $.get(url_search, searchParams, function(response) {
        results.empty();

        console.log(response);
        next = response.nextPageToken;
        console.log(response.nextPageToken);
        

        $.each(response.items, function(index, item) {
          var my_obj_str = JSON.stringify(item);
          console.log("--> "+my_obj_str);

          $("<div class='col-xl-12' id='here' />").html('<div class="row"><div class="playlist-video" tabindex="0"> <div class="video-thumbnail" style="float: left; padding-right: 15px"> <img id="video-thumb" src="'+item.snippet.thumbnails.high.url+'" alt="" style="width: 210px; height: 118px"> </div><div class="video-info"> <h3 class="video-title">'+item.snippet.title+'</h3> <ul class="video-meta-data"> <li class="video-creator">'+item.snippet.channelTitle+'<i class="fas fa-check-circle"></i></li><li class="video-views">252K views</li><li class="video-upload-date">1 day ago</li></ul> </div></div></div>').appendTo(results);

        });
      });

    });

























    // SEARCH BTN EVENT LISTENER
    moreImagesBtn.on("click", function() {
      // Clear exisitng images

      // $('#results').empty();
      imageContainer.html("");
      // validateInput();

      var url_search = 'https://www.googleapis.com/youtube/v3/search';

      var searchParams = {
          part: 'id,snippet',
          maxResults: 5,
          pageToken: next,
          q: userInput.val(),
          key: KEY
      };

      console.log('A');

      $.get(url_search, searchParams, function(response) {
        // results.empty();
        console.log('B');

        console.log(response);
        next = response.nextPageToken;
        console.log(response.nextPageToken);

        $.each(response.items, function(index, item) {
          var my_obj_str = JSON.stringify(item);
          console.log("--> "+my_obj_str);

          console.log('C');

          $("<div class='col-xl-12' id='here' />").html('<div class="row"><div class="playlist-video" tabindex="0"> <div class="video-thumbnail" style="float: left; padding-right: 15px"> <img id="video-thumb" src="'+item.snippet.thumbnails.high.url+'" alt="" style="width: 210px; height: 118px"> </div><div class="video-info"> <h3 class="video-title">'+item.snippet.title+'</h3> <ul class="video-meta-data"> <li class="video-creator">'+item.snippet.channelTitle+'<i class="fas fa-check-circle"></i></li><li class="video-views">252K views</li><li class="video-upload-date">1 day ago</li></ul> </div></div></div>').appendTo(results);

        });
      });
    }); // end of SEARCH BTN EVENT LISTENER












    // Build urls for the images


 
  })() // end of self self executing anonymous function
);