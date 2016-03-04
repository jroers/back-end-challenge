#Back-end Challenge


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
	- This will need to be a two-step process, as data.json only has attendees listed in 

##Decisions Made
- PROBLEM 1: No IDs on Talks, Speakers and Attendees.
	- DECISION MADE: Added IDs to each talk and attendee.
	- RATIONALE: IDs should be unique. It would be possible for the same talk to happen multiple times, so using the title as the parameter wouldn't work in this case. 