function myfunction() {
  $("#btn").hide()
  var schedule_guery_url = `https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/S2STravelTime/TYMC?%24top=1&%24format=JSON`;
  $.getJSON(schedule_guery_url, () => {
      console.log("API invoked.");
  }).done((data) => {
      function secToMin(sec) {
          let m = Math.floor(sec % 3600 / 60);

          return m+"分";
      }

      console.log("data receive sussessful.");
      console.log(data);

      $(".travel_time").text("--"+secToMin(data[0].TravelTimes[0].RunTime)+"->");

      var currentTime = 0;

      for (let i=0; i<20; i++) {
          if (i != 19) {
              currentTime = data[0].TravelTimes[i+1].RunTime - data[0].TravelTimes[i].RunTime;


              var travelTime = secToMin(currentTime);
              var stationName = data[0].TravelTimes[i].ToStationName.Zh_tw;

              var newStation = `<h3 class="station">${stationName}</h3>`;
              var newTime = `<h3 class="travel_time">--${travelTime}-></h3>`;
              $(".jit_schedule").append(newStation);
              $(".jit_schedule").append(newTime);
          }
          else {
              stationName = data[0].TravelTimes[19].ToStationName.Zh_tw;
              var newStation = `<h3 class="station">${stationName}</h3>`;
              $(".jit_schedule").append(newStation);
          }
      }
  }).fail((msg) => {
      console.log(msg);
  }).always(() => {
      console.log("finished.");
  });
  this.blur();
}
function coin(){
  var selecttext=$('#ori option:selected').text();
  var select=$('#goal option:selected').text();
  if(selecttext=="請選擇初始車站" || select=="請選擇抵達車站"){$("#price").text(" ")};
  if(selecttext=="台北車站" && select=="台北車站"){$("#price").text(" ")};
  if((selecttext=="台北車站" && select=="三重站")||(selecttext=="三重站" && select=="台北車站")){$("#price").text("20")};
  if((selecttext=="三重站" && select=="新北產業園區站")||(select=="三重站" && selecttext=="新北產業園區站")){$("#price").text("20")};
  if((selecttext=="新北產業園區站" && select=="新莊副都心站")||(select=="新北產業園區站" && selecttext=="新莊副都心站")){$("#price").text("20")};
  if((selecttext=="新莊副都心站" && select=="泰山站")||(selecttext=="新莊副都心站" && select=="泰山站")){$("#price").text("20")};
  if(selecttext=="泰山站" && select=="泰山貴和站"){$("#price").text("20")};
  if(selecttext=="泰山貴和站" && select=="體育大學站"){$("#price").text("20")};
  if(selecttext=="體育大學站" && select=="長庚醫院站"){$("#price").text("20")};
  if(selecttext=="長庚醫院站" && select=="林口站"){$("#price").text("20")};
  if(selecttext=="林口站" && select=="山鼻站"){$("#price").text("30")};
  if(selecttext=="山鼻站" && select=="機場第一航廈站"){$("#price").text("20")};
  if(selecttext=="機場第一航廈站" && select=="機場第二航廈站"){$("#price").text("20")};
  if(selecttext=="機場第二航廈站" && select=="機場旅館站"){$("#price").text("20")};
  if(selecttext=="機場旅館站" && select=="大園站"){$("#price").text("20")};
  if(selecttext=="大園站" && select=="領航站"){$("#price").text("20")};
  if(selecttext=="領航站" && select=="桃園體育園區站"){$("#price").text("20")};
  if(selecttext=="桃園體育園區站" && select=="興南站"){$("#price").text("20")};
  if(selecttext=="興南站" && select=="環北站"){$("#price").text("20")};
}