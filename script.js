var userInput = prompt("Welcome ! Here are the four season:\n\n1.Summer\n2.Winter\n3.Autum\n4.Spring\n\nchoose your favourite.");



if (userInput === "Summer".toLowerCase()){
  document.write(
    `<div class="bg-img">
    <div class="card" id="hot">
  <img src="./images/sunflower-zoom.jpg">
  <h1>HOT</h1>
  <p>
Summer is the warmest season of the year, marked by long days and abundant sunshine. It's a time for outdoor activities like swimming, hiking, and barbecues. Many people enjoy vacations during the summer months, heading to beaches or exploring nature. Summer nights the sound of crickets, adding to its relaxing atmosphere.</p>
  </div>
  </div>`);
} else if (userInput === "Winter".toLowerCase()) {
  document.write(`
    <div class="bg-img2">
    <div class="card" id="cold">
    <img src="./images/snow.webp">
    <h1>winter</h1>
    <p>Winter is the coldest season of the year,  It's a time for cozy activities like sipping hot drinks by the fire and bundling up in warm clothing. Outdoor activities such as ice skating, skiing, and building snowmen are popular in snowy areas.  Winter nights are long and crisp, often creating a peaceful, still atmosphere..</p>
    </div>
    </div>`);
} else if (userInput === "Autum".toLowerCase()) {
  document.write(`
    <div class="bg-img4">
    <div class="card" id="aut">
    <img src="./images/autum.jfif">
    <h1>autum</h1>
    <p>Autumn, also known as fall while people enjoy outdoor activities like hiking amidst the colorful foliage.while people enjoy outdoor activities like hiking amidst the colorful foliage Autumn's beauty and crisp air make it a favorite season for many..</p>
    </div>
     </div>
`);
} else if (userInput === "Spring".toLowerCase()) {
  document.write(`
     <div class="bg-img3">
    <div class="card" id="spri">
    <img src="./images/spring2.jpg">
    <h1>spring</h1>
    <p>Spring is a season of renewal, marked by the blossoming of flowers and the return of greenery. The season brings longer days and more sunshine, encouraging outdoor activities like gardening and picnicking. Gentle rain showers nourish the earth, helping plants and trees to flourish.</p>
    </div>
     </div>`);
} else {
  document.write(`<div class="card" id="panda">
        <img src="./images/panda.jpg">
    <h2>Nothing Found<h2/>
   </div>`
   );
}
