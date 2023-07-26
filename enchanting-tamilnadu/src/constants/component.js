export const MENU_ITEMS = ["Hotels", "Bike Rentals", "Restaurants"];
export const HOME_BANNER = {
  title: "WELCOME TO EXPLORER",
  caption: "Your Adventure Travel Expert in the SOUTH",
};

export const DESTINATION = {
  title: "Destinations",
  description: "Just for you . Because you and your bike are so special to us!",
};
export const SIMILAR_DESTINATION = {
  title: "Similar Destinations",
  description: "Because you liked ",
};

export const SUCCESS_BANNER = (name, source, destination) => {
    return "Thank you <span>{name}</strong> for expressing your interest in travelling with us. Our sales team will get back with the best packages from <span>{source}</strong> to <span>{destination}</strong>";
  };
  
export const BUTTON = {
    explore: "EXPLORE",
    readmore: "READ MORE",
    submit:"SUBMIT INTEREST"
}