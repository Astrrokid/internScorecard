import React from "react";
import Table from "../components/Table";
import pic1 from "../images/lando.jfif";
import pic2 from "../images/Leclerc.jfif";
import pic3 from "../images/Lewis.jfif";
import pic4 from "../images/naruto.jfif";
import pic5 from "../images/Riccardo.jfif";
import pic6 from "../images/Russel.jfif";
import pic7 from "../images/sharingan.jfif";
import pic8 from "../images/x.jfif";

function Home() {
  let interns = [
    {
      id: 1,
      img_url:pic1,
      name: "miracle mazi",
      email: "miraclemazi@gmail.com",
      learningPath: "Frontend",
      total: "30",
      age: "22",
      phone: "0900000",
      task1: 10,
      task2: 10,
      task3: 10,
    },
    {
      id: 2,
      img_url: pic2,
      name: "Sandra okoli",
      email: "sandraokoli@gmail.com",
      learningPath: "Product design",
      total: "30",
      age: "20",
      phone: "0900000",
      task1: 10,
      task2: 10,
      task3: 10,
    },
    {
      id: 3,
      img_url: pic3,
      name: "Clement Bassey",
      email: "clementbassey@gmail.com",
      learningPath: "Backend",
      total: "24",
      age: "19",
      phone: "0900000",
      task1: 8,
      task2: 7,
      task3: 9,
    },
    {
      id: 4,
      img_url: pic4,
      name: "Arinze manny",
      email: "rinzemanny@gmail.com",
      learningPath: "Frontend",
      total: "24",
      age: "19",
      phone: "0900000",
      task1: 10,
      task2: 5,
      task3: 9,
    },
    {
      id: 5,
      img_url: pic5,
      name: "Sopuru Peace",
      email: "sopurup@gmail.com",
      learningPath: "Backend",
      total: "24",
      age: "19",
      phone: "0900000",
      task1: 8,
      task2: 10,
      task3: 6,
    },
    {
      id: 6,
      img_url: pic6,
      name: "Kachie Anyanwu",
      email: "kashman@gmail.com",
      learningPath: "Product design",
      total: "26",
      age: "16",
      phone: "0900000",
      task1: 8,
      task2: 10,
      task3: 8,
    },
  ];

  localStorage.setItem("interns", JSON.stringify(interns));

  return (
    <div>
      <Table internsdetails={interns} />
    </div>
  );
}

export default Home;