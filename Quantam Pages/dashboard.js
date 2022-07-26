var courseBody = document.querySelector(".course-container");
var dataGroup = [
    {
        "title": "Acceleration",
        "subject": "Physics",
        "grade": "Grade 7",
        "gradeNo": "+2",
        "units": "Units",
        "unitsNo": 4,
        "lessons": "Lessons",
        "lessonsNo": 18,
        "topics": "Topics",
        "topicsNo": 24,
        "teacher": "Mr Frank's Class B",
        "noOfStudents": "50 Students",
        "imageLoc": "images/imageMask.png",
        "duration": "21-Jan-2020-21-Aug-2020"
    },
    {
        "title": "Displacement, Velocity and Speed",
        "subject": "Physics 2",
        "grade": "Grade 6",
        "gradeNo": "+3",
        "units": "Units",
        "unitsNo": 2,
        "lessons": "Lessons",
        "lessonsNo": 15,
        "topics": "Topics",
        "topicsNo": 20,
        "teacher": "No Classes",
        "noOfStudents": "",
        "imageLoc": "images/imageMask-1.png",
        "duration": ""
    },
    {
        "title": "Introduction to Biology:Micro organims and how they affec...",
        "subject": "Mathematics",
        "grade": "Grade 4",
        "gradeNo": "+1",
        "units": "Units",
        "unitsNo": 5,
        "lessons": "Lessons",
        "lessonsNo": 16,
        "topics": "Topics",
        "topicsNo": 22,
        "teacher": "All Classes",
        "noOfStudents": "300 Students",
        "imageLoc": "images/imageMask-3.png",
        "duration": ""
    },
    {
        "title": "Introduction to High School Mathematics",
        "subject": "Physics",
        "grade": "Grade 8",
        "gradeNo": "+3",
        "units": "Units",
        "unitsNo": 4,
        "lessons": "Lessons",
        "lessonsNo": 18,
        "topics": "Topics",
        "topicsNo": 24,
        "teacher": "Mr Frank's Class A",
        "noOfStudents": "44 Students",
        "imageLoc": "images/imageMask-2.png",
        "duration": "19-Oct-2019 - 20-Oct-2020"
    }
];
var courseData = '';
for (var _i = 0, dataGroup_1 = dataGroup; _i < dataGroup_1.length; _i++) {
    var data = dataGroup_1[_i];
    courseData += "\n    <div class=\"courses-tab course1\">\n                        <div class=\"course-specs\">\n                            <div class=\"course-img\">\n                                <img src=\"".concat(data.imageLoc, "\" alt=\"course image 1\">\n                            </div>\n                            <div class=\"course-text\">\n                                <div class=\"course-head\">\n                                    <p class=\"bold\">").concat(data.title, "</p>\n                                </div>\n                                <div class=\"course-sub\">\n                                    <p class=\"medium grey\">").concat(data.subject, "</p>\n                                    <p class=\"medium grey\">").concat(data.grade, " <span class=\"bold\">").concat(data.gradeNo, "</span></p>\n                                </div>\n                                <div class=\"course-time\">\n                                    <p class=\"medium grey\"><b>").concat(data.unitsNo, "</b>&nbsp;").concat(data.units, "&nbsp;<b>").concat(data.lessonsNo, "</b>&nbsp;").concat(data.lessons, "&nbsp;<b>").concat(data.topicsNo, "</b>&nbsp;").concat(data.topics, "</p>\n                                </div>\n                                <div class=\"course-class\">\n                                    <p class=\"bold\">").concat(data.teacher, "</p>\n                                    <img src=\"images/arrow-down.svg\" alt=\"Down arrow icon\">\n                                </div>\n                                <div class=\"course-date \">\n                                    <p class=\"medium grey\">").concat(data.noOfStudents, "</p>\n                                    <p class=\"semi-bold grey\">").concat(data.duration, "</p>    \n                                </div>\n                            </div>\n                            <div>\n                                <img src=\"images/favourite.svg\" alt=\"favourite icon\">\n                            </div>\n                        </div>\n                        <div class=\"course-tools\">\n                            <img src=\"images/preview.svg\" alt=\"preview icon\">\n                            <img src=\"images/manage course.svg\" alt=\"manage course icon\">\n                            <img src=\"images/grade submissions.svg\" alt=\"grade submissions button\">\n                            <img src=\"images/reports.svg\" alt=\"reports button\">\n                        </div>\n                    </div>\n    ");
}
courseBody.innerHTML = courseData;
