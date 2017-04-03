App.start = App.cable.subscriptions.create('GradientChannel', {  
  received: function(data) {
    var topColor = data.gradient.topColor;
    var bottomColor = data.gradient.bottomColor;
    var position = data.gradient.position;
    var type = data.gradient.gradientType;
    var colorType = data.gradient.colorType;
  	var reversePosition;
    if (position == "top"){
      reversePosition = "to bottom";
    }
    else if (position == "right"){
      reversePosition = "to left"; 
    }
    else if (position == "bottom"){
      reversePosition = "to top"; 
    }
    else if (position == "left"){
      reversePosition = "to right"; 
    }
    else if (position == "center"){
      reversePosition = "ellipse at center"; 
    }
    else{
      reversePosition = position; 
    }
    if (colorType == "rgb"){
      topColor = $("#cpickerTopRGB").val();
      bottomColor = $("#cpickerBottomRGB").val();
    }
    var content = "background: "+ topColor +" ; /* Old Browsers */ \n"+
    "background: -webkit-"+ type +"-gradient("+ position +","+ topColor +","+ bottomColor +"); /*Safari 5.1-6*/\n"+
    "background: -o-"+ type +"-gradient("+ position +","+ topColor +","+ bottomColor +"); /*Opera 11.1-12*/ \n"+
    "background: -moz-"+ type +"-gradient("+ position +","+ topColor +","+ bottomColor +"); /*Fx 3.6-15*/ \n"+
    "background: "+ type +"-gradient("+ reversePosition +","+ topColor +","+ bottomColor +"); /*Standard*/\n"
    $('.preview')[0].setAttribute('style', $('.preview')[0].getAttribute('style') + '; ' + content);
    $("#codetocopy")[0].innerHTML = content;
  }
});