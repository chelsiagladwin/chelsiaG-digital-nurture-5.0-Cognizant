use("college_nosql")
//65. READ: Find all feedback documents where rating is 5.

db.feedback.find({ rating: 5 })

//66. READ: Find feedback for course CS101 where the tags array contains 'challenging'. Use $elemMatch or a simple array value query.

db.feedback.find({ 
  course_code: "CS101", 
  tags: "challenging" 
})

//67. READ: Retrieve only the student_id, course_code, and rating fields (projection) for all documents — exclude _id.
db.feedback.find({}, { 
  student_id: 1, 
  course_code: 1, 
  rating: 1, 
  _id: 0 
})

//68. UPDATE: For all feedback documents with rating < 3, add a field needs_review: true using updateMany and $set.

db.feedback.updateMany(
  { rating: { $lt: 3 } }, 
  { $set: { needs_review: true } 
})

//69. UPDATE: Push a new tag 'reviewed' into the tags array of all documents where needs_review is true, using $push

db.feedback.updateMany(
  { needs_review: true }, 
  { $push: { tags: "reviewed" } 
})

//70. DELETE: Delete all feedback documents where the semester is '2021-EVEN'.
db.feedback.deleteMany({ 
  semester: "2021-EVEN" 
})


