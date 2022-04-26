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
function coin(){var sel1_id=$('#ori').val();var sel2_id=$('#goal').val();
  if(sel1_id=="0" || sel2_id=="00"){$("#price").text(" ")};
  if(sel1_id==1){
      let a=sel2_id-sel1_id;
                if(a==20){$("#price").text(" ")}
                if(a==21){$("#price").text("20")}
                if(a>21&&a<=24){$("#price").text("25")}
                if(a==25){$("#price").text("40")}
                if(a>=26&&a<=28){$("#price").text("70")}
                if(a==29){$("#price").text("110")}
                if(a==30){$("#price").text("120")}
                if(a>30){$("#price").text("150")}};
  if(sel1_id==2){
        let b=sel2_id-sel1_id;
        if(b==19){$("#price").text("20")}
        if(b==20){$("#price").text(" ")}
        if(b>=21&&b<24){$("#price").text("20")}
        if(b==24){$("#price").text("30")}
        if(b>24&&b<=27){$("#price").text("50")}
        if(b==28){$("#price").text("90")}
        if(b==29){$("#price").text("100")}
        if(b>=30&&b<33){$("#price").text("130")}
        if(b==33){$("#price").text("140")}
        if(b>33){$("#price").text("150")}};
    if(sel1_id==3){let c=sel2_id-sel1_id;
            if(c==20){$("#price").text(" ")}
            if((c>=21&&c<24)||c==19){$("#price").text("20")}
            if((c>=24&&c<27)||c==18){$("#price").text("25")}
            if(c==27){$("#price").text("65")}
            if(c==28){$("#price").text("75")}
            if(c>=29&&c<32){$("#price").text("105")}
            if(c==32){$("#price").text("115")}
            if(c==33){$("#price").text("125")}
            if(c==34){$("#price").text("130")}
            if(c==35){$("#price").text("140")}
            if(c==36){$("#price").text("145")}
            if(c>36){$("#price").text("150")}};
        if(sel1_id==4){let d=sel2_id-sel1_id;
                if(d==20){$("#price").text(" ")}
                if((d>=21&&d<23)||d==19||d==18){$("#price").text("20")}
                if((d>=23&&d<26)||d==17){$("#price").text("25")}
                if(d==26){$("#price").text("65")}
                if(d==27){$("#price").text("75")}
                if(d>=28&&d<31){$("#price").text("105")}
                if(d==31){$("#price").text("115")}
                if(d==32){$("#price").text("125")}
                if(d==33){$("#price").text("130")}
                if(d==34){$("#price").text("140")}
                if(d==35){$("#price").text("145")}
                if(d>35){$("#price").text("150")}};}
