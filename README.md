#Back-end Challenge

##Table of Contents
1. [Purpose](#purpose)
2. [Extra Information Provided](#extra-information-provided)
3. [Steps to complete](#steps-to-complete)
4. [Decisions Made](#decisions-made)
5. [Endpoints](#api-endpoints)
6. [How to use this?](#how-to-use-this)
7. [Next Steps](#next-steps)

##Purpose

Create RESTful JSON API for talks and attendees at a conference.

##Extra information provided

- Any language is ok to use
- Follows the data structure in [data.json](https://github.com/SF-WDI-LABS/take-home-coding-challenge-workshop/blob/master/back-end/data.json)
- Two different structures for people - liberty to decide how to handle this

##Steps to complete

- Initialize node application
- Install express and body-parser
- Insert pre-seeded data copied from [data.json](https://github.com/SF-WDI-LABS/take-home-coding-challenge-workshop/blob/master/back-end/data.json)
- Create GET path for all talks
- Create GET path for all attendees

##Decisions Made
- PROBLEM 1: No IDs on Talks, Speakers and Attendees.
	- DECISION MADE: Added IDs to each talk and attendee with a datatype of String.
	- RATIONALE: IDs should be unique. It would be possible for the same talk to happen multiple times, so using the title as the parameter wouldn't work in this case. Decided to use Strings instead of integers to stay consistent with mongoDB convention.

##API Endpoints

`GET /talks` - Returns an array of all of the talks in the database (currently pre-seeded information)

`GET /talks/:id` - Returns an object of the talk with the ID passed in as a request parameter. Returns 404 error code in the header if the ID does not exist.

`GET /attendees` - Returns an array of all of the attendees for all talks (again, currently pre-seeded information)

`GET /attendees/:id` - Returns an object of the attendee with the id passed in as a request parameter. Returns 404 error code in the header if the ID does not exist.

##How to use this?
1. Clone this repo and navigate to its folder.
2. Run `npm install` then `nodemon` (or just `node server.js`)
3. Navigate to `localhost:3000` and try the above endpoints!
	- Or, try `curl`ing them down using your terminal!
	- `curl localhost:3000/talks`
	- `curl localhost:3000/talks/1`
	- `curl localhost:3000/attendees`
	- `curl localhost:3000/attendees/3`   

##Next Steps
1. Implement database: Mongoose as an option
	- Schemas would be as follows:
	- TalkSchema:
		- title: String,
		- abstract: String,
		- room: Integer,
		- speaker: UserSchema,
		- attendees: [UserSchema]
	- UserSchema
		- name: String,
		- company: String,
		- email: String,
		- bio: String,
		- registered: Date
2.  Create POST, PUT and DELETE routes for this API. This will allow users to add or remove themselves from a particular talk - ensuring that the speaker knows how big their audience will be.
3. Create GET route for attendees for a specific event
	- `GET /talks/:id/attendees` 