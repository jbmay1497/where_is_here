# whereishere

## Project setup
```
npm install
```
Please also disable any adblock extensions while using the project as it can prevent the Google Maps API 
from working properly.
### Compiles and hot-reloads for development
```
npm run serve
```
The project runs on port 8080.
## Web App Info

This project provides 2 coordinate based guessing games based ona latitude and longitude position:

1. Water or Land?
2. What Country?

Each uses a different API to get / locate the coordinates. The game "Water or Land?" uses the API from [https://onwater.io/](https://onwater.io/) to determine
if a position from a randomly generated Latitude and Longitude is lcoated on land or in the water. 

The game "What Country?" uses the API from [https://3geonames.org/](https://3geonames.org/) to return a random Latitude and Longitude position that is located on land.

Both games also use the [Google Maps API](https://developers.google.com/maps) to display the coordinate on a map at the end of each round.

## Features to implement
* Add difficulty option to "What Country?" to allow for changing the number of guesses
* Adding functionality to allow user to choose the number of country choices in "What Country?"
* Grouping country choices by continent in "What Country?" for added difficulty
* Session information so game state is saved after a page reload