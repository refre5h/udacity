var bio = {
	"name": "Wilson Li",
	"role": "Nobody",
	"welcomeMsg": "I'm happy.",
	"contacts": {
		"mobile": "415-580-1368",
		"email": "hi@example.com",
		"github": "refre5h",
		"twitter": "wilson",
		"location": "San Francisco"
	},
	"skills" : ["game","ping pong","listen"],
	"bioPic": "images/fry.jpg"
};

var education = {
	"schools": [
		{
			"name": "CCSF",
			"location": "San Francisco",
			"degree": "AS",
			"majors": ["Econ","CS"],
			"date": "2004-2007",
			"url": "ccsf.edu"
		},
		{
			"name": "UCLA",
			"location": "Los Angeles",
			"degree": "BA",
			"majors": ["Econ","Math"],
			"date": "2007-2010",
			"url": "ucla.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Java",
			"school": "Udacity",
			"date": "2014",
			"url": "udacity.com"
		},
		{
			"title": "JS",
			"school": "Udacity",
			"date": "2015",
			"url": "udacity.com"
		}
	]
};

var work = {
    "job": [
       	{
            "employer": "Outspark",
            "title": "PM",
            "location": "San Francisco",
            "date": "2010 - 2013",
            "description": "I worked."
        },
        {
            "employer": "WeMade",
            "title": "Producer",
            "location": "Palo Alto",
            "date": "2014",
            "description": "I had fun."
        }
    ]
};

var projects = {
	"projects": [
		{
			"title": "Watcha Doin'?",
			"date": "2014",
			"description": "Picture guessing game.",
			"image": "http://www.game-group.com/wp-content/uploads/2011/08/1000-derby-duck-lr1-300x300.jpg"
		},
		{
			"title": "Pollo",
			"date": "2015",
			"description": "Social polling platform.",
			"image": "http://www.tlloh.com/wp-content/uploads/2010/04/chicken-pollo-del-bibero-2.jpg"
		}
	]
};



var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

var formattedSkills = HTMLskills.replace("%data%", bio.skills);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedWelcomeMsg);
$("#topContacts").append(formattedBioPic);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	$("#skillsH3").append(formattedSkills);
}