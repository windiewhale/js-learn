let myProfile = {
    "username": "balnarabigefial",
    "displayName": "Bálnára Bige Fial",
    "friends": [ 
        { "numberOfFriends": 670, "pendingRequests": 21, "lastConnection": "Péter Sz." },    
    ],

    "likes": [
        { "lastLikedPage": "Sirius Teaház", "serviceType": "tea house", "address": "Bródy Sándor u. 13, Bp, 1088", "openingHours": "12:00-22:00" },
        { "firstLikedFilm": "The Life Aquatic with Steve Zissou", "releaseYear": 2004, "director": "Wes Anderson" },
    ],

    "placesLived": [ "Dejtár", "Budapest"],

    "lastCheckIn": {"eventName": "Correbarri", "eventType": "running race", "date": "13.19.2019", "place": "Barcelona"}, 

    "latesShare": [
        { "from": "Hokedli", "when": "30. dec" }, 
        { "about": "job offer", "field": "cook"}
    ],

    "photoAlbums": [
        {"name": "piratas!", "numberOfItems": 111, "sharedOwnership": true},
        {"name": "ceylontrip", "numberOfItems": 31, "sharedOwnership": false},
        {"name": "IN", "numberOfItems": 45, "sharedOwnership": false},
        {"name": "Amsterdam", "numberOfItems": 48, "sharedOwnership": true}
    ],

    "firstPhoto": {"shotBy": "Eni Da", "year": 2010, "location": "undefined", "likes": 2},
    "lastPhoto": {"shotBy": "Creative Cooking Workshop", "year": 2019, "location": "Igar, Ozora Festival", "likes": 4 }
}
console.log(myProfile)