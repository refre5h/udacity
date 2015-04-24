var bio = {
	"name": "WilSonaNaNa Lidadadidi",
	"role": "Nobody",
	"welcomeMsg": "Aliquet imperdiet fusce gravida porttitor lectus malesuada. Venenatis. Vehicula. Bibendum.",
	"contacts": {
		"mobile": "415-580-1368",
		"email": "hi@example.com",
		"github": "refre5h",
		"twitter": "wilson",
		"location": "San Francisco"
	},
	"skills" : ["League of Lengends","Ping Pong","Walk"],
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
    "jobs": [
        {
            "employer": "WeMade",
            "title": "Producer",
            "location": "Palo Alto",
            "date": "2014",
            "description": "Natoque enim. Ultrices elementum sociis auctor rhoncus integer luctus leo. Semper nunc mollis sociosqu turpis aptent a maecenas. Nonummy mi, velit, cras, bibendum mauris eget rhoncus nam nullam magna quis condimentum. Suscipit integer. Ligula per habitasse nibh ipsum. Nulla viverra curae; fermentum curabitur Aenean taciti hymenaeos torquent. Tortor nulla fermentum."
        },
       	{
            "employer": "Outspark",
            "title": "PM",
            "location": "San Francisco",
            "date": "2010 - 2013",
            "description": "Hac morbi. Habitasse dolor ad nec vulputate. Euismod justo magna congue ut sit, hac donec nullam feugiat ullamcorper est orci fringilla. Ullamcorper litora sit ridiculus purus nam adipiscing mattis phasellus nibh netus Arcu. Fermentum enim magna. Lobortis. Ridiculus ligula bibendum donec commodo Id massa. Sollicitudin molestie ac adipiscing curabitur tellus."
        }
    ]
};

var projects = {
	"projects": [
		{
			"title": "Watcha Doin'?",
			"date": "2014",
			"description": "Picture guessing game. Natoque enim. Ultrices elementum sociis auctor rhoncus integer luctus leo. Semper nunc mollis sociosqu turpis aptent a maecenas. Nonummy mi, velit, cras, bibendum mauris eget rhoncus nam nullam magna quis condimentum.",
			"image": "images/project1.ico"
		},
		{
			"title": "Pollo",
			"date": "2015",
			"description": "Social polling platform. Hac morbi. Habitasse dolor ad nec vulputate. Euismod justo magna congue ut sit, hac donec nullam feugiat ullamcorper est orci fringilla. Ullamcorper litora sit ridiculus purus nam adipiscing mattis phasellus nibh netus Arcu. Fermentum enim magna. Lobortis.",
			"image": "images/project2.ico"
		}
	]
};



var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
//var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
//$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);


var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

$("#header").append(HTMLwelcomeMsg);
var formattedWelcomeMsg = bio.welcomeMsg;
$(".welcome-message:last").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (i=0; i<bio.skills.length; i++) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skillsH3").append(formattedSkills);
	}
};

function displayWork() {
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDate);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
};
displayWork();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);

		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		$(".project-entry:last").append(formattedProjectImage);		
	}
}
projects.display();

/*
$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});
*/

$(document).click(
	function(loc) {
		console.log(loc.pageX, loc.pageY);
	}
);

$("#main").prepend(internationalizeButton);

function inName(){
	var nameArray = bio.name.split(" ");
	nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
	nameArray[1] = nameArray[1].toUpperCase();
	bio.name = nameArray[0] + " " + nameArray[1];
	return bio.name;
};

$("#mapDiv").append(googleMap);

