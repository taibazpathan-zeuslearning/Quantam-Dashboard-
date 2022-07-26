const courseBody:any=document.querySelector(".course-container");

let dataGroup:{
    title:string;
    subject:string;
    grade: string;
    gradeNo:string;
    units:string;
    unitsNo:number;
    lessons:string;
    lessonsNo:number;
    topics:string;
    topicsNo:number;
    teacher:string;
    noOfStudents:string;
    imageLoc:string;
    duration:string;
}[]=[
    {
        "title":"Acceleration",
        "subject":"Physics",
        "grade": "Grade 7",
        "gradeNo":"+2",
        "units":"Units",
        "unitsNo":4,
        "lessons":"Lessons",
        "lessonsNo":18,
        "topics":"Topics",
        "topicsNo":24,
        "teacher":"Mr Frank's Class B",
        "noOfStudents":"50 Students",
        "imageLoc":"images/imageMask.png",
        "duration":"21-Jan-2020-21-Aug-2020"     
    },
    {
        "title":"Displacement, Velocity and Speed",
        "subject":"Physics 2",
        "grade": "Grade 6",
        "gradeNo":"+3",
        "units":"Units",
        "unitsNo":2,
        "lessons":"Lessons",
        "lessonsNo":15,
        "topics":"Topics",
        "topicsNo":20,
        "teacher":"No Classes",
        "noOfStudents":"",
        "imageLoc":"images/imageMask-1.png",
        "duration":""
    },
    {
        "title":"Introduction to Biology:Micro organims and how they affec...",
        "subject":"Mathematics",
        "grade": "Grade 4",
        "gradeNo":"+1",
        "units":"Units",
        "unitsNo":5,
        "lessons":"Lessons",
        "lessonsNo":16,
        "topics":"Topics",
        "topicsNo":22,
        "teacher":"All Classes",
        "noOfStudents":"300 Students",
        "imageLoc":"images/imageMask-3.png",
        "duration":""
    },
    {
        "title":"Introduction to High School Mathematics",
        "subject":"Physics",
        "grade": "Grade 8",
        "gradeNo":"+3",
        "units":"Units",
        "unitsNo":4,
        "lessons":"Lessons",
        "lessonsNo":18,
        "topics":"Topics",
        "topicsNo":24,
        "teacher":"Mr Frank's Class A",
        "noOfStudents":"44 Students",
        "imageLoc":"images/imageMask-2.png",
        "duration":"19-Oct-2019 - 20-Oct-2020"
    }
];

let courseData:String='';
for(let data of dataGroup){
    courseData+=`
    <div class="courses-tab course1">
                        <div class="course-specs">
                            <div class="course-img">
                                <img src="${data.imageLoc}" alt="course image 1">
                            </div>
                            <div class="course-text">
                                <div class="course-head">
                                    <p class="bold">${data.title}</p>
                                </div>
                                <div class="course-sub">
                                    <p class="medium grey">${data.subject}</p>
                                    <p class="medium grey">${data.grade} <span class="bold">${data.gradeNo}</span></p>
                                </div>
                                <div class="course-time">
                                    <p class="medium grey"><b>${data.unitsNo}</b>&nbsp;${data.units}&nbsp;<b>${data.lessonsNo}</b>&nbsp;${data.lessons}&nbsp;<b>${data.topicsNo}</b>&nbsp;${data.topics}</p>
                                </div>
                                <div class="course-class">
                                    <p class="bold">${data.teacher}</p>
                                    <img src="images/arrow-down.svg" alt="Down arrow icon">
                                </div>
                                <div class="course-date ">
                                    <p class="medium grey">${data.noOfStudents}</p>
                                    <p class="semi-bold grey">${data.duration}</p>    
                                </div>
                            </div>
                            <div>
                                <img src="images/favourite.svg" alt="favourite icon">
                            </div>
                        </div>
                        <div class="course-tools">
                            <img src="images/preview.svg" alt="preview icon">
                            <img src="images/manage course.svg" alt="manage course icon">
                            <img src="images/grade submissions.svg" alt="grade submissions button">
                            <img src="images/reports.svg" alt="reports button">
                        </div>
                    </div>
    `
}
courseBody.innerHTML=courseData;