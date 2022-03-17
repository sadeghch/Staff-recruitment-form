btn.onclick = function () {
  let address = document.getElementById("address").checked;
  let workexperience = document.getElementById("workexperience").value;
  let age = document.getElementById("age").value;
  let degree = document.getElementById("degree").value;
  let salary = document.getElementById("salary").value;
  let imgleft = document.getElementById("imgleft");
  let lefth2 = document.getElementById("lefth2");

  if (
    degree >= 2 &&
    age >= 22 &&
    age <= 35 &&
    workexperience >= 4 &&
    salary >= 2000000 &&
    address
  ) {
    imgleft.src = "src/image/check.jpg";
    lefth2.innerText = " تبریک می گوییم شما واجد شرایط می باشید";
  } else {
    imgleft.src = "src/image/unchecked.jpg";
    lefth2.innerText = " متاسفانه شما واجد شرایط نمی باشید";
  }
};
