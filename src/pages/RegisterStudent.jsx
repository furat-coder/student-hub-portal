import { useState } from "react";

export default function RegisterStudent({ onAddStudent }) {
  // One state object holds all the form values (controlled inputs)
  const [form, setForm] = useState({
    name: "",
    studentId: "",
    email: "",
    age: "",
    course: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // One handler for every input, using the input's name attribute
  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  // Beginner-friendly validation: build an object of error messages
  function validateForm() {
    const newErrors = {};

    if (form.name.trim() === "") {
      newErrors.name = "Full name is required.";
    }
    if (form.studentId.trim() === "") {
      newErrors.studentId = "Student ID is required.";
    }
    if (!form.email.includes("@") || !form.email.includes(".")) {
      newErrors.email = "Please enter a valid email address.";
    }
    const age = Number(form.age);
    if (form.age === "" || age < 15 || age > 70) {
      newErrors.age = "Age must be a number between 15 and 70.";
    }
    if (form.course.trim() === "") {
      newErrors.course = "Course is required.";
    }
    if (form.phone.trim().length < 7) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    // Object.keys(...).length === 0 means "no errors"
    if (Object.keys(newErrors).length === 0) {
      const newStudent = {
        id: form.studentId.trim(),
        name: form.name.trim(),
        email: form.email.trim(),
        course: form.course.trim(),
        age: Number(form.age),
        status: "Active",
        phone: form.phone.trim(),
      };

      onAddStudent(newStudent);
      setSuccessMessage(newStudent.name + " was registered successfully!");

      // Clear the form
      setForm({ name: "", studentId: "", email: "", age: "", course: "", phone: "" });
    }
  }

  return (
    <div className="card" style={{ maxWidth: 560 }}>
      <h3>Register a New Student</h3>

      {successMessage && <div className="success">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Full Name</label>
          <input name="name" value={form.name} onChange={handleChange} />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="field">
          <label>Student ID</label>
          <input name="studentId" value={form.studentId} onChange={handleChange} />
          {errors.studentId && <div className="error">{errors.studentId}</div>}
        </div>

        <div className="field">
          <label>Email</label>
          <input name="email" value={form.email} onChange={handleChange} />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="field">
          <label>Age</label>
          <input name="age" type="number" value={form.age} onChange={handleChange} />
          {errors.age && <div className="error">{errors.age}</div>}
        </div>

        <div className="field">
          <label>Course</label>
          <select name="course" value={form.course} onChange={handleChange}>
            <option value="">Select a course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Business Administration">Business Administration</option>
            <option value="Engineering">Engineering</option>
          </select>
          {errors.course && <div className="error">{errors.course}</div>}
        </div>

        <div className="field">
          <label>Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>

        <button className="btn" type="submit">
          Register Student
        </button>
      </form>
    </div>
  );
}
