let country;
let china = 100;
let chile = 250;
let australia = 170;
let jamaica = 120;

function getShippingCost(country) {
  switch (country) {
    case "Australia":
      console.log(`Shipping to ${country} will cost ${australia} credits`);
      break;
    case "China":
      console.log(`Shipping to ${country} will cost ${china} credits`);
      break;
    case "Chile":
      console.log(`Shipping to ${country} will cost ${chile} credits`);
      break;
    case "Jamaica":
      console.log(`Shipping to ${country} will cost ${jamaica} credits`);
      break;
    default:
      console.log("Sorry, there is no delivery to your country");
  }
  return;
}

getShippingCost("Australia"); // "Shipping to Australia will cost 170 credits"
getShippingCost("Germany"); // "Sorry, there is no delivery to your country"
getShippingCost("China"); // "Shipping to China will cost 100 credits"
getShippingCost("Chile"); // "Shipping to Chile will cost 250 credits"
getShippingCost("Jamaica"); // "Shipping to Jamaica will cost 120 credits"
getShippingCost("Sweden"); // "Sorry, there is no delivery to your country"
