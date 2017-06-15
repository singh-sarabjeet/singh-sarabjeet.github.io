var work = {
	"jobs":[
	{
		"employer" : "BizViz Technologies",
		"title" : "Associate Software Engineer",
		"location" : "Bengaluru",
		"dates" : "June,2016 - Current",
		"description" : "Working on migrating the existing 4D database to the new Oracle database"
	},
	{
		"employer" : "Cognizant Technology Solutions",
		"title" : "Programmer Analyst",
		"location" : "Bengaluru",
		"dates" : "October,2016 - June,2017",
		"description" : "Worked on integration algorithm of two products" 
	}
	]
};

var projects = [{
	"title" : "Popular Movies",
	"dates" : "September,2016 - December,2016",
	"description" : "An android app that shows movie data from TMDB API",
	"images" : ["https://raw.githubusercontent.com/sjsingh200893/Popular_Movies/master/app/Screens/MainScreen.png",
	"https://raw.githubusercontent.com/sjsingh200893/Popular_Movies/master/app/Screens/DetailScreen.png"]
},
{
	"title" : "Stock Hawk",
	"dates" : "Feb,2017 - March,2017",
	"description" : "An article reader for android",
	"images" : ["https://raw.githubusercontent.com/sjsingh200893/StockHawk/master/app/Screens/MainScreen.png",
	"https://raw.githubusercontent.com/sjsingh200893/StockHawk/master/app/Screens/DetailScreen.png"]
},
{
	"title" : "Musical",
	"dates" : "April,2017 - May,2017",
	"description" : "An android music player app with material design",
	"images" : ["M_image1","M_image2"]
},
{
	"title" : "XYZ Reader",
	"dates" : "April,2017 - May,2017",
	"description" : "An article reader for android",
	"images" : ["XYZ_img1","XYZ_img1"]
}
];	

var bio = {
	"name" : "Sarabjeet Singh",
	"roll" : "Android Developer",
	"contactInfo" : "sjsingh200893@gmail.com",
	"bioPic" : "https://avatars0.githubusercontent.com/u/11057104?v=3&s=460",
	"welcomeMessage" : "Welcome Recruiters!!",
	"skills" : ["Android","Java","C","MySQL","PL/SQL","JavaScript"],
	"contacts" : {
		"mobile" : 8285803721,
		"email" : "sjsingh200893@gmail.com",
		"github" : "sjsingh200893",
		"twitter" : "@tweetsammy",
		"location" : "Bengaluru"
	}
};

var education = {
	"schools" : [
	{
		"name" : "Galgotia's College Of Engineering and Technology",
		"location" : "Greater Noida, India",
		"passingYear" : 2016,
		"major" : "Information Technology"
	}
	],
	"onlineCourses" : [
	{
		"title" : "Udacity Android Developer Nanodegree",
		"school" : "Udacity",
		"dates" : "August,2016 - May,2017",
		"url" : "udacity_certi_link"
	},
	{
		"title" : "Passwordless Login Solutions for Android",
		"school" : "Udacity",
		"dates" : "May,2016 - Ongoing",
		"url" : "certi_link"
	}]
};



var formattedName = HTMLheaderName.replace("%data%",
	bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",
	bio.roll);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var formatedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formatedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formatedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formatedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);


$("#header").append(formatedMobile);
$("#header").append(formatedEmail);
$("#header").append(formatedGithub);
$("#header").append(formatedTwitter);

var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);

$("#header").append(formattedBioPic);

$("#header").append(HTMLskillsStart);
if(bio.skills.length!=0){
	
	for(var i = 0 ; i<bio.skills.length ; i++){
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkill);
}
}

function displayWork(){

	for(var job = 0 ; job < work.jobs.length ; job++){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
		
		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
		
	}
}
projects.display = function(){

	for(var project = 0; project < projects.length ; project++){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects[project].description);

		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);

		for(imageUrl = 0; imageUrl< projects[project].images.length; imageUrl++){
			var projectImage = HTMLprojectImage.replace("%data%",projects[project].images[imageUrl]);
			$(".project-entry:last").append(projectImage);
		}
	}
}

displayWork();
projects.display();

$("#mapDiv").append(googleMap);