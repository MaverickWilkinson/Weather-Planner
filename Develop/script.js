$.ajax({
    url: "https://api.openweathermap.org/data/2.5/onecall?lat=47.60&lon=-122.33&appid=b45ecc5406887e49a29cd75e6b8dc427",
    method: "GET"
  }).then(function(response) {
    console.log(response.Object.humidity);
  });

const cities = ['Austin','Chicago',"New York","Orlando","San Francisco","Seattle","Denver","Atlanta"];

$(document).ready(function(){
displayButtons();
})


function displayButtons(){
    for(let i = 0; i < 8; i++){
        let buttonhtml = $(`
            <div class="citybutton">
                <div class="buttontext">
                    ${cities[i]}
                </div>
            </div>
        `)
        $("#citybuttonbox").append(buttonhtml);
    }
}