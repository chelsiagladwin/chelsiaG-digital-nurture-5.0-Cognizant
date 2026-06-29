use college_nosql

db.createCollection("feedback")

db.feedback.insertMany([
{
    student_id: 1,
    course_code: "CS101",
    semester: "2022-ODD",
    rating: 5,
    comments: "Excellent teaching. Would recommend.",
    tags: ["challenging","well-structured","good-examples"],
    submitted_at: ISODate("2022-11-30T10:15:00Z"),
    attachments: [{filename:"notes.pdf", size_kb:240}]
},
{
    student_id: 2,
    course_code: "CS101",
    semester: "2022-ODD",
    rating: 4,
    comments: "Very informative and engaging.",
    tags: ["interactive","useful"],
    submitted_at: ISODate("2022-11-29T09:00:00Z"),
    attachments: [{filename:"assignment.pdf", size_kb:180}]
},
{
    student_id: 3,
    course_code: "CS101",
    semester: "2022-EVEN",
    rating: 3,
    comments: "Good course but difficult exams.",
    tags: ["difficult","conceptual"],
    submitted_at: ISODate("2023-04-18T12:10:00Z"),
    attachments: [{filename:"review.docx", size_kb:120}]
},
{
    student_id: 4,
    course_code: "CS102",
    semester: "2022-ODD",
    rating: 5,
    comments: "Excellent practical sessions.",
    tags: ["hands-on","lab"],
    submitted_at: ISODate("2022-11-28T11:20:00Z"),
    attachments: [{filename:"lab.pdf", size_kb:320}]
},
{
    student_id: 5,
    course_code: "CS102",
    semester: "2022-EVEN",
    rating: 2,
    comments: "Needs better explanations.",
    tags: ["fast-paced","needs-improvement"],
    submitted_at: ISODate("2023-04-20T14:15:00Z"),
    attachments: [{filename:"feedback.pdf", size_kb:150}]
},
{
    student_id: 6,
    course_code: "CS201",
    semester: "2023-ODD",
    rating: 4,
    comments: "Interesting topics covered.",
    tags: ["interesting","coding"],
    submitted_at: ISODate("2023-11-25T10:00:00Z"),
    attachments: [{filename:"project.zip", size_kb:520}]
},
{
    student_id: 7,
    course_code: "CS202",
    semester: "2023-ODD",
    rating: 1,
    comments: "Too much theory.",
    tags: ["boring","lengthy"],
    submitted_at: ISODate("2023-11-26T16:00:00Z"),
    attachments: [{filename:"notes.docx", size_kb:90}]
},
{
    student_id: 8,
    course_code: "CS301",
    semester: "2023-EVEN",
    rating: 5,
    comments: "One of the best courses.",
    tags: ["excellent","recommended"],
    submitted_at: ISODate("2024-04-21T15:00:00Z"),
    attachments: [{filename:"summary.pdf", size_kb:200}]
},
{
    student_id: 9,
    course_code: "CS302",
    semester: "2023-EVEN",
    rating: 3,
    comments: "Average experience.",
    tags: ["average","okay"],
    submitted_at: ISODate("2024-04-18T09:45:00Z"),
    attachments: [{filename:"report.pdf", size_kb:170}]
},
{
    student_id: 10,
    course_code: "CS303",
    semester: "2024-ODD",
    rating: 4,
    comments: "Good faculty and course material.",
    tags: ["helpful","organized"],
    submitted_at: ISODate("2024-11-22T13:30:00Z")
}
])

db.feedback.countDocuments()
