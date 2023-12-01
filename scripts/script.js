"use strict";
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:8081/api/courses", requestOptions)
  .then(response => response.json())
  .then(result => {
    let allInfo = "";
    for (let i = 0; i < result.length; i++) {
      const department = result[i].dept;
      const courseName = result[i].courseName;
      const courseNum = result[i].courseNum;
      allInfo += `<table class="table">
      <thead>
        <tr>
          <th scope="row"><a href = "details.html">Show Details</a></th>
          <th scope="row">${department}</th>
          <th scope="row">${courseName}</th>
          <th scope="row">${courseNum}</th>
        </tr>
      </thead>

    </table>`;
      
    }
    document.getElementById("courseId").innerHTML = allInfo
  })
  .catch(error => console.log('error', error));

  
        
