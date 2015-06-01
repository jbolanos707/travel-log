$(function(){

  $("#addcity").click(function(){
    $("#new-city").append('<div class= "city">' +
                            '<label for="city"> <h2> Enter Other City:</h2> </label>' +
                            '<input class= "form-control input-city" type="text">' +
                          '</div>'
                        );

  });

  $("#addsite").click(function(){
    $("#new-site").append( '<div class= "favorite-site">' +
                              '<label for="favorite-site"><h2> Enter Other Site:</h2> </label>' +
                              '<input class= "form-control input-site" type="text">' +
                            '</div>'
                          );
  });

  $("#travel-form").submit(function(event){
    event.preventDefault();
    var inputtedCountry = $("input#country").val();

    var place = { country: inputtedCountry, cities: [], sites: [] };

    $(".city").each(function() {
      var inputtedCity = $(this).find("input.input-city").val();
debugger;
      var newCity = { visitedCity: inputtedCity };
      place.cities.push(newCity);
    });


    $(".favorite-site").each(function() {
      var inputtedSite = $(this).find("input.input-site").val();

      var newSite = { favoriteSite: inputtedSite};
      place.sites.push(newSite);
    });

    $('.country').text(place.country);


    // $("ul#cities").text("");
      place.cities.forEach(function(city){
        $('ul#cities').append('<li>' + city.visitedCity + "</li>");
      });

    place.sites.forEach(function(site){
      $('ul#favorite-sites').append('<li>' + site.favoriteSite + "</li>");
    });

    $("#show-places").show();

    $('input#country').val("");
    $('input.input-city').val("");
    $('input.input-site').val("");



  });

  $('.country').text(place.country);

  cities.forEach(function(city){
    $('ul#cities').append('<li>' + city.city + "</li>");
  });

  sites.forEach(function(site){
    $('ul#favorite-sites').append('<li>' + site.site + "</li>");
  });

  $("#show-places").show();

  $('input#country').val("");
  $('input.city').val("");
  $('input.favorite-site').val("");


});
