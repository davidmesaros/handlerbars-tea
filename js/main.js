var teas = [
  {
    name:"煎茶",
    englishName:"Sencha",
    description:"A Japanese green tea, specifically one made without grinding the tea leaves. The word 'sencha' means 'simmered tea', referring to the method that the tea beverage is made from the dried tea leaves. This is as opposed, for example, to matcha (抹茶), powdered Japanese green tea, in which case the green tea powder is mixed with hot water and therefore the leaf itself is included in the beverage.",
    price:15,
    colour:"#043f12"
  },
  {
    name:"玄米茶",
    englishName:"Genmaicha",
    description:"The Japanese name for green tea combined with roasted brown rice. It is sometimes referred to colloquially as 'popcorn tea' because a few grains of the rice pop during the roasting process and resemble popcorn. This type of tea was originally drunk by poor Japanese, as the rice served as a filler and reduced the price of the tea; which is why it is also known as the 'people's tea.' It was also used by those persons fasting for religious purposes or who found themselves to be between meals for long periods of time. Today it is consumed by all segments of society.",
    price:12,
    colour:"#d27200"
  },
  {
    name:"烏龍",
    englishName:"Oolong",
    description:"A traditional Chinese tea (Camellia sinensis) produced through a unique process including withering under the strong sun and oxidation before curling and twisting.[1] Most oolong teas, especially those of fine quality, involve unique tea plant cultivars that are exclusively used for particular varieties. The degree of oxidation can range from 8 to 85%, depending on the variety and production style.",
    price:13,
    colour:"#342616"
  },
  {
    name:"正山小种",
    englishName:"Lapsang Souchong",
    description:"A black tea (Camellia sinensis) originally from the Wuyi region of the Chinese province of Fujian. It is more commonly named 正山小种 in Chinese (zhèng shān xiǎo zhǒng) and 正山小種 Japanese (seisanshōshu). It is sometimes referred to as smoked tea (熏茶).",
    price:18,
    colour:"#a62f00"
  },
  {
    name:"抹茶",
    englishName:"Maccha",
    description:"A finely milled or fine powder green tea. The Japanese tea ceremony centers on the preparation, serving, and drinking of matcha. In modern times, matcha has also come to be used to flavour and dye foods such as mochi and soba noodles, green tea ice cream and a variety of wagashi (Japanese confectionery). Matcha is a fine ground, powdered, high quality green tea and not the same as tea powder or green tea powder",
    price:34,
    colour:"#31823c"
  },
  {
    name:"ほうじ茶",
    englishName:"Houjicha",
    description:"A Japanese green tea that is distinguished from others because it is roasted in a porcelain pot over charcoal; most Japanese teas are usually steamed. The tea is fired at a high temperature, altering the leaf color tints from green to reddish-brown. The process was first performed in Kyoto, Japan in the 1920s and its popularity persists today.",
    price:12,
    colour:"#c67a37"
  },
  {
    name:"茉莉花茶",
    englishName:"Jasmine Tea",
    description:"A type of scented tea which absorbs aroma from jasmine blossoms. Scented tea was known during the time of the Song Dynasty (960–1279); however it was reserved for the Imperial Court. Typically, jasmine tea employs green tea as the tea base; however, white tea and even black tea are also now used. The resulting flavor of jasmine tea is subtly sweet and highly fragrant. It is the most famous scented tea in China.",
    price:9,
    colour:"#dcb000"
  },
  {
    name:"普洱茶",
    englishName:"Pu-erh Tea",
    description:"A variety of fermented dark tea produced in Yunnan province, China. Fermentation is a tea production style in which the tea leaves undergo microbial fermentation and oxidation after they are dried and rolled.",
    price:45,
    colour:"#b5a172"
  },
  {
    name:"开花茶",
    englishName:"Flowering Tea",
    description:"A bundle of dried tea leaves wrapped around one or more dried flowers. These are made by binding tea leaves and flowers together into a bulb and are then set to dry.[1] When steeped, the bundle expands and unfurls in a process that emulates a blooming flower, while the flowers inside emerge as the centerpiece. Typically they are sourced from the Yunnan province of China.",
    price:35,
    colour:"#b94a34"
  }
  
]


var teaTemplate;
var teaDetailsTemplate;


function handleReady(){
  // Render all the leaves
  // renderLeaves();

  // Render the teas
  renderTeas();
  $("#tea-details").click(function(){
    $("#tea-details").fadeOut();
  })
  
  // Setup smooth scroll
  // $("nav a").smoothScroll();

  // Listen to the scroll event of the page
  // $(window).on("scroll", function(event){
  //   checkLeaves();
  // })
}

// function checkLeaves(){
//   if(document.body.scrollTop > 0){
//     blowAwayLeaves();
//   }
//   else{
//     bringLeavesBack();
//   }
// }

function renderTeas(){
  var source = $("#tea-template").html();
  teaTemplate = Handlebars.compile(source);

  source = $("#tea-details-template").html();
  teaDetailsTemplate = Handlebars.compile(source);

  for(var i = 0; i < teas.length; i++){
    renderTea(teas[i]);
  }
}

function renderTea(tea){
  var html = teaTemplate(tea);
  var div = document.createElement("div");
  div.innerHTML = html;
  $("#teas .panel").append(div);
  $(div).click(function(event){
    console.log("click clickd")
    showTeaDetails(tea);
  });
}

function showTeaDetails(tea){
  $("#tea-details").html(teaDetailsTemplate(tea)).fadeIn();
}



$(document).ready(handleReady)