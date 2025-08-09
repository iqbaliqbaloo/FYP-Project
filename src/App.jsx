import React from "react";
import StudentCard from "./Student Card/SrudentCard";
function App() {
 const year = new Date().getFullYear(); 
  return (
 
    <div>
      <StudentCard name='Shair Ali'  rollno='22021519-170' course='Computer Science'/>
     
    </div>
  );
}
export default App;
