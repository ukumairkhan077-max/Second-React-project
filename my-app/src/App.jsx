

// function ArrayOfobjects({ products }) {
//   return (
//     <div>
//       {products.map((product) => {
//         return (
//           <div key={product.id} >
//             <h2>{product.name}</h2>
//             <p>ID: {product.id}</p>
//             <p>Price: {product.price}</p>
//           </div>
//         );
//       })}
//     </div>  
//   );
// }

// export default ArrayOfobjects;
// import { useState } from "react";

// function Counter() {
//   const [Count, SetCount] = useState(0);

//   function increment() {
//     SetCount(Count + 1);
//   }

//   function decrement() {
//     SetCount(Count - 1);
//   }

//   return (
//     <div>
//       <h3>{Count}</h3>
//       <button onClick={increment}>Increase</button>
//       <button onClick={decrement}>Decrease</button>
//     </div>
//   );
// }

// export default Counter;
// import { useState } from "react";

// function Toggle() {
//   const [state, setState] = useState(false); // boolean state

//   function toggleButton() {
//     setState(prevState => !prevState); // flip state
//   }

//   return (
//     <div>
//       <button onClick={toggleButton}>
//         {state ? "ON" : "OFF"}
//       </button>
//     </div>
//   );
// }

// export default Toggle;

// import { useState } from "react";

// function Forms() {
//   const [name, setName] = useState("");
//   const [Lastname, setLastName] = useState("");

//   function Name(e) {
//     setName(e.target.value);
//   }
//   function LastName(e) {
//     setLastName(e.target.value);
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={Name}
//       />
//       <h2>Name is : {name}</h2>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         onChange={LastName}
//       />
//       <h2>LastName is : {Lastname}</h2>
//     </div>
//   );
// }

// export default Forms;
// import { useState } from "react";

// function UseForm() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: ""
//   });

//   function handleChange(e) {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,    
//       [name]: value      
//     });
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         name="firstName"
//         placeholder="Enter first name"
//         value={formData.firstName}
//         onChange={handleChange}
//       />

//       <input
//         type="text"
//         name="lastName"
//         placeholder="Enter last name"
//         value={formData.lastName}
//         onChange={handleChange}
//       />

//       <input
//         type="email"
//         name="email"
//         placeholder="Enter email"
//         value={formData.email}
//         onChange={handleChange}
//       />

//       <h3>First Name: {formData.firstName}</h3>
//       <h3>Last Name: {formData.lastName}</h3>
//       <h3>Email: {formData.email}</h3>
//     </div>
//   );
// }

// export default UseForm;
// import { useState } from "react";

// function CompleteForm() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     age: "",
//     gender: "",
//     hobbies: [],
//     country: "",
//     bio: "",
//     birthDate: "",
//     profilePic: null,
//     agree: false
//   });

//   const [errors, setErrors] = useState({});

//   // Handle Input Change
//   function handleChange(e) {
//     const { name, value, type, checked, files } = e.target;

//     if (type === "checkbox" && name === "hobbies") {
//       if (checked) {
//         setFormData({
//           ...formData,
//           hobbies: [...formData.hobbies, value]
//         });
//       } else {
//         setFormData({
//           ...formData,
//           hobbies: formData.hobbies.filter(hobby => hobby !== value)
//         });
//       }
//     } else if (type === "checkbox") {
//       setFormData({
//         ...formData,
//         [name]: checked
//       });
//     } else if (type === "file") {
//       setFormData({
//         ...formData,
//         profilePic: files[0]
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
//   }

//   // Form Validation
//   function validate() {
//     let newErrors = {};

//     if (!formData.firstName) newErrors.firstName = "First name is required";
//     if (!formData.email.includes("@"))
//       newErrors.email = "Valid email required";
//     if (formData.password.length < 6)
//       newErrors.password = "Password must be 6+ characters";
//     if (!formData.agree)
//       newErrors.agree = "You must accept terms";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   }

//   // Submit Form
//   function handleSubmit(e) {
//     e.preventDefault();

//     if (validate()) {
//       console.log("Form Submitted:", formData);
//       alert("Form Submitted Successfully!");
//     }
//   }

//   // Reset Form
//   function handleReset() {
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       age: "",
//       gender: "",
//       hobbies: [],
//       country: "",
//       bio: "",
//       birthDate: "",
//       profilePic: null,
//       agree: false
//     });
//     setErrors({});
//   }

//   return (
//     <div style={{ maxWidth: "500px", margin: "auto" }}>
//       <h2>Complete React Form</h2>

//       <form onSubmit={handleSubmit}>
        
//         {/* Text Inputs */}
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           value={formData.firstName}
//           onChange={handleChange}
//         />
//         <p style={{ color: "red" }}>{errors.firstName}</p>

//         <input
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           value={formData.lastName}
//           onChange={handleChange}
//         />

//         {/* Email */}
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <p style={{ color: "red" }}>{errors.email}</p>

//         {/* Password */}
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <p style={{ color: "red" }}>{errors.password}</p>

//         {/* Number */}
//         <input
//           type="number"
//           name="age"
//           placeholder="Age"
//           value={formData.age}
//           onChange={handleChange}
//         />

//         {/* Date */}
//         <input
//           type="date"
//           name="birthDate"
//           value={formData.birthDate}
//           onChange={handleChange}
//         />

//         {/* Radio Buttons */}
//         <div>
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="Male"
//               onChange={handleChange}
//             /> Male
//           </label>

//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="Female"
//               onChange={handleChange}
//             /> Female
//           </label>
//         </div>

//         {/* Checkboxes */}
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               name="hobbies"
//               value="Reading"
//               onChange={handleChange}
//             /> Reading
//           </label>

//           <label>
//             <input
//               type="checkbox"
//               name="hobbies"
//               value="Gaming"
//               onChange={handleChange}
//             /> Gaming
//           </label>
//         </div>

//         {/* Select Dropdown */}
//         <select
//           name="country"
//           value={formData.country}
//           onChange={handleChange}
//         >
//           <option value="">Select Country</option>
//           <option value="Pakistan">Pakistan</option>
//           <option value="USA">USA</option>
//           <option value="UK">UK</option>
//         </select>

//         {/* Textarea */}
//         <textarea
//           name="bio"
//           placeholder="Write about yourself"
//           value={formData.bio}
//           onChange={handleChange}
//         />

//         {/* File Upload */}
//         <input
//           type="file"
//           name="profilePic"
//           onChange={handleChange}
//         />

//         {/* Agree Checkbox */}
//         <label>
//           <input
//             type="checkbox"
//             name="agree"
//             checked={formData.agree}
//             onChange={handleChange}
//           />
//           I agree to terms
//         </label>
//         <p style={{ color: "red" }}>{errors.agree}</p>

//         <br /><br />

//         <button type="submit">Submit</button>
//         <button type="button" onClick={handleReset}>
//           Reset
//         </button>

//       </form>
//     </div>
//   );
// }

// export default CompleteForm;

// import { useState } from "react";
// function forms(){
//   const [name, setname]=useState("")
//   function handlechange(e){
//     setname(e.target.value)
//   }
//   return(
//     <input type="text"
//     value={name}
//     onChange={handlechange}/>
//   )
// }

// import { useState } from "react";

// function Form() {

//   const [formdata, setformdata] = useState({
//     firstname: "",
//     lastname: "",
//     password: "",
//     gender: "",
//     ischecked: false
//   });

//   function handlechange(e) {
//     const { name, value, type, checked } = e.target;

//     setformdata({
//       ...formdata,
//       [name]: type === "checkbox" ? checked : value
//     });
//   }

//   return (
//     <div>

//       <input
//         type="text"
//         name="firstname"
//         value={formdata.firstname}
//         onChange={handlechange}
//         placeholder="Enter first name"
//       />

//       <input
//         type="text"
//         name="lastname"
//         value={formdata.lastname}
//         onChange={handlechange}
//         placeholder="Enter last name"
//       />

//       <input
//         type="password"
//         name="password"
//         value={formdata.password}
//         onChange={handlechange}
//         placeholder="Enter password"
//       />

//       <label>
//         <input
//           type="radio"
//           name="gender"
//           value="Male"
//           checked={formdata.gender === "Male"}
//           onChange={handlechange}
//         />
//         Male
//       </label>

//       <label>
//         <input
//           type="radio"
//           name="gender"
//           value="Female"
//           checked={formdata.gender === "Female"}
//           onChange={handlechange}
//         />
//         Female
//       </label>

//       <label>
//         <input
//           type="checkbox"
//           name="ischecked"
//           checked={formdata.ischecked}
//           onChange={handlechange}
//         />
//         I agree to this statement
//       </label>

//     </div>
//   );
// }

// export default Form;