// A simple profile page. The data is stored in a normal object.
export default function Profile() {
  const profile = {
    name: "Furat Yusuf",
    studentId: "STU-1001",
    email: "furat.yusuf@school.edu",
    course: "Computer Science",
    phone: "+254 700 123 456",
    about:
      "I am a frontend development student who enjoys building user interfaces with React. I like clean layouts, simple code and learning something new every week.",
  };

  return (
    <div>
      <div className="card">
        <div className="profile-top">
          <div className="profile-avatar">FY</div>
          <div>
            <h3>{profile.name}</h3>
            <p className="empty">
              {profile.course} · {profile.studentId}
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Contact Information</h3>
        <p>Email: {profile.email}</p>
        <p>Phone: {profile.phone}</p>
        <p>Student ID: {profile.studentId}</p>
        <p>Course: {profile.course}</p>
      </div>

      <div className="card">
        <h3>About Me</h3>
        <p>{profile.about}</p>
      </div>
    </div>
  );
}
