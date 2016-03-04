var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// PRE-SEEDED DATA - FROM DATA.JSON

var allTalks = [
  {
  	"_id": 1,
    "title": "CILLUM NON",
    "abstract": "Aliqua consequat mollit Lorem dolor nulla qui sunt tempor veniam eiusmod ullamco quis commodo.",
    "room": 873,
    "speaker": {
      "name": "Hendrix Carroll",
      "company": "Songlines",
      "email": "hendrixcarroll@songlines.com",
      "bio": "Magna velit adipisicing ullamco sint duis nisi."
    },
    "attendees": [
      {
      	"_id": 1,
        "name": "Sanders Riley",
        "company": "Comtext",
        "email": "sandersriley@comtext.com",
        "registered": "2015-05-24T02:15:04 +07:00"
      },
      {
      	"_id": 2,
        "name": "Bean Cline",
        "company": "Utarian",
        "email": "beancline@utarian.com",
        "registered": "2015-06-21T02:54:39 +07:00"
      },
      {
      	"_id": 3,
        "name": "Alfreda Mitchell",
        "company": "Dreamia",
        "email": "alfredamitchell@dreamia.com",
        "registered": "2015-09-22T06:35:29 +07:00"
      }
    ]
  },
  {
  	"_id": 2,
    "title": "AD IPSUM",
    "abstract": "Fugiat nisi et mollit consequat sint.",
    "room": 343,
    "speaker": {
      "name": "Melody Juarez",
      "company": "Zillatide",
      "email": "melodyjuarez@zillatide.com",
      "bio": "Veniam do eu quis officia enim."
    },
    "attendees": []
  }
];

// This is an array that will be filled based on the information from the talks array
var allAttendees = [];

allTalks.forEach(function(talk) {
	talk.attendees.forEach(function(attendee) {
		allAttendees.push(attendee);
	});
});

// API ENDPOINTS

app.get('/', function (req, res) {
	res.json("Welcome to the API");
});

app.get('/talks', function (req, res) {
	res.json(allTalks);
});

app.get('/attendees', function (req, res) {
	res.json(allAttendees);
});

app.listen(3000, function() {
  console.log('server started');
});