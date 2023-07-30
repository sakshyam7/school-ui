export const userColumns = [
  { field: "id", headerName: " Student ID", width: 170 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Phone",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "course",
    headerName: "Course",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Anusha Gurung",
    img: "https://images.pexels.com/photos/2250526/pexels-photo-2250526.jpeg?auto=compress&cs=tinysrgb&w=600",
    status: "Bsc Csit",
    email: "9825937463",
    age: 23,
    address:"Birtamod",
  },
  {
    id: 2,
    username: "Bishal Karki",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "984442443",
    status: "Bsc",
    age: 24,
    address:"Dhulabari",
  },
  {
    id: 3,
    username: "Abhisek Parajuli",
    img: "https://images.pexels.com/photos/3039620/pexels-photo-3039620.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "984242434",
    status: "Bsc Csit",
    age: 22,
    address:"Haldibari",
  },
  {
    id: 4,
    username: "Aashish Guragain",
    img: "https://images.pexels.com/photos/17167955/pexels-photo-17167955/free-photo-of-young-man-playing-on-guitar.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "983434245",
    status: "BCA",
    age: 21,
    address:"Arjundhara",
  },
  {
    id: 5,
    username: "Babita Oli",
    img: "https://images.pexels.com/photos/2779325/pexels-photo-2779325.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "989445434",
    status: "BBA",
    age: 22,
    address:"Birtamod",
  },
  {
    id: 6,
    username: "Konika Sitaula",
    img: "https://images.pexels.com/photos/3538030/pexels-photo-3538030.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "981213141",
    status: "MBA",
    age: 22,
    address:"Birtamod"
  },
  {
    id: 7,
    username: "Sushant Mainali",
    img: "https://images.pexels.com/photos/2952611/pexels-photo-2952611.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "985657585",
    status: "Bsc Csit",
    age: 24,
    address:"Haldibari",
  },
  {
    id: 8,
    username: "Peshal Oli",
    img: "https://images.pexels.com/photos/2573544/pexels-photo-2573544.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "984878682",
    status: "MCA",
    age: 25,
    address:"Bhadrapur Airpot",
  },
  {
    id: 9,
    username: "Arpana Sitaula",
    img: "https://images.pexels.com/photos/1816225/pexels-photo-1816225.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "986979892",
    status: "MBA",
    age: 22,
    address:"Bhadrapur",
  },
  {
    id: 10,
    username: "Ashok Basnet",
    img: "https://images.pexels.com/photos/2601545/pexels-photo-2601545.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "986768967",
    status: "Bsc Csit",
    age: 21,
    address:"Ilam",
  },
];


export const teacherColumns = [
  { field: "id", headerName: " Teacher ID", width: 170 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "course",
    headerName: "Subject",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const teacherRows = [
  {
    id: 1,
    username: "Prakash Koirala",
    img: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t1.6435-9/127270224_3773978599301330_7949118263076312921_n.jpg?stp=dst-jpg_s851x315&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=8RUM5CcnCiAAX8HQP2w&_nc_ht=scontent.fbdp2-1.fna&oh=00_AfBJ0mEbvrGJyNpnRutQLbbvqWWXiRGazrWx4LZHjuNoEg&oe=64E837D7",
    status: "Advance Database",
    email: "prakazz123@gmail.com",
    age: 33,
    address:"Bhadrapur",
  },
  {
    id: 2,
    username: "Narayan Dhamala",
    img: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/355107441_6381343325241710_4464343838196980800_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=B-Nbks2mbeIAX-bvF6B&_nc_ht=scontent.fbdp2-1.fna&oh=00_AfD_b4dSXRbrFSA_d0GU5-LupoN0ywNvxlacyKzalf1hmw&oe=64C58EA0",
    email: "ndhamala@gmail.com",
    status: "Cloud Computing",
    age: 30,
    address:"Damak",
  },
  {
    id: 3,
    username: "Raju Podel",
    img: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/321647333_469439161928462_295691446614764870_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=N7fUvzPOYqIAX8_3hTR&_nc_ht=scontent.fbdp2-1.fna&oh=00_AfAQcBCQbtlAJIqmi74Zaa19IwivWJfwA1Rs3nim7QkIkA&oe=64C640A8",
    email: "rppoudel@gmail.com",
    status: "Web Technology",
    age: 35,
    address:"Sainik",
  },
  {
    id: 4,
    username: "Seetal Mandal",
    img: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t1.6435-9/30740030_1749437191761284_3354381054587699200_n.jpg?stp=c160.0.960.960a_dst-jpg_s851x315&_nc_cat=101&ccb=1-7&_nc_sid=da31f3&_nc_ohc=1IJFCxOqrkYAX8ehXQT&_nc_ht=scontent.fbdp2-1.fna&oh=00_AfAxji_VC23Ukn7LiVz0X0_bO5Mhspi1ukfCgtgA-kWMGQ&oe=64E84D03",
    email: "seetal@gmail.com",
    status: "Advance Java",
    age: 31,
    address:"Bhadrapur",
  },
  {
    id: 5,
    username: "Kamal Phuyal",
    img: "data:image/jpeg;base64,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",
    email: "phuyalkamal@gmail.com",
    status: "POM",
    age: 29,
    address:"Birtamod",
  },
  {
    id: 6,
    username: "Sunil Sharma",
    img: "data:image/jpeg;base64,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",
    email: "sharmasunil@gmail.com",
    status: "Software Engineering",
    age: 44,
    address:"Birtamod"
  },
  {
    id: 7,
    username: "OM Kanta Koirala",
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAcwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABwgCBAMFBgH/xAA9EAABAwMBBAYGCAUFAAAAAAABAAIDBAURBgcSITETQVFhgZEIIiNxobEUFTJCUpKiwRYzU2JyQ7LC0fD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AnFERAREQEREBERAREQEREBERAREQEREBERAWrcLhRW2nNRcauClgHOSeQMb5lRdtK2wQ2WWa1aa6OpuDDuS1LhvRwnrA/E4eQ7+Sga8Xi5XurNXda2ernP35X5x3AcgO4ILOV21rRVG8sN36Zw/oQvePMDC1ods2ipHYdXVEY7X0r8fAFV0s2mr7fBm02qsqmZxvxxEs/NyXY1Wz3V9HCZZtP124OZjj3z5NyUFobLq3T99cGWm70lTIRnomyAP/ACnj8F3OVSAh8UmDvMex2CDwLSPkpK0JtfvFiljpb1JJc7byO+czRDta4/a9x8wgssi0bLd6G+W2C42uobPSzNyx7fiCOojrC3kBERAREQEREBRJtv1/JZqb+HrPOWV9QzNTKw8YYz90Hqc74D3hSjdK2G226qr6k4hponSyHuaMn5Kml8ulTervWXOsdmeqlMjuPLPIDuAwPBBpEqRNjOh4dWXmWqubC62UO6Xs5CZ55N93DJ8O1R0rC+jdMx2mbpAP5jK3fPucxoH+0oJap4IqaFkNPGyKJg3WMY3da0dgA5LkREEZ7ZNBUt9ss93oKdrLtSMMhcwYM7AOLXdpxxB7sKtPJXZuc0dPbqqeb+XHC97vcASVSZB7XZhrqo0deW9K977TUOAq4Rxx/e0fiHxHDsVqaeaKogjmgkbJFI0PY9pyHNIyCFSBWQ9H7ULrppea1VEm9NbHhrMnj0TslvkQ4e7CCU0REBERAREQeH21Vj6PZxdDGcOm6OHwc8A/DKqoVaHbvGX7Oaxw5RzwuP5wP3VXkBT76NVOG2i9VO9xfURx7vZutJz+r4KAlK/o+6iFt1JNZpyeiubfZ90rASPMZ8ggsYiIg0L7A2qslwp5HbrJaaRjndgLSMqlatbtf1GNOaLqnMz9JrQaSDHUXA5d4NB8cKqSApU9HasfDrSppc+zqKJ2R2lrmkfuorUl+j9EX7QA4f6dHK4/pH7oLMIiICIiAiIg6PW9pdfdJXW2xgGWemcIgfxji34gKnLgQSCMEcwVeIqs223Rr9P6hfdKSPFsuLy8YHCKU8XN8eJHiOpBGq3rLcprPdqO5U382lmbK0duDnHjyUgaT2MX29Qw1dxngt1JK0PaT7SRzTyIaDjl2lSlYtjekrVuPqaaW5TN471XJ6uf8G4GO45QSBBIJYWSN5PaHDPes18a0NaABgDkAvqCvPpE3x1TqCiszMiKih6V/fI//poHmVESt5qjQOnNUydPdreHVW7uioieWSAdXEcDjvBUYah2CTMDpNO3Zsg6oK1u6fzt4fpCCElOPo22d2btepG+od2lid2n7T/+CiyfSF7ptSxadmpN25yuDWRB4dkHk7IzwwM+5Wr0dp+DS+naK0Ux3hAz2j/6kh4ud4knwwg7pERAREQEREBdffbPQ361z225wNmpp24c08weog9RHUV2CIIcoLnetktULZfI5rjpV78UtdGMupsn7Lh+3l2KVbRd7deqNlZaqyGqp3cnxOzjuPYe4rZqKeGpgkgqIY5YpBuvjkaHNcOwg81HNy2R0kFY+v0hd62wVbuJbC4uiPXyyCB3ZI7kEloouZRbXrblkdzs10jB9V0zd12O/DW/MrIy7YKgbv0ewU39+Sf3PyQSa57WgknAHEkqONXbTGMqvqPRUP1xe5csBh9aKA8sk8iR5DrPUtQ7OdVahAGtNYzyU5Hr0lvbuNd44A82le50xpSy6WpTT2ahZCHfbkPrSSf5OPE+7kg6LZ3oT+Hemu15m+nahrcuqalx3tzPNrT8z1+5e4REBERAREQEREBERAREQEREBERAREQEREBERAREQFpsudE9z2tq4fUxn1x1jOR2jC23cQuu+p6D1D9H4tdvA77s54d/cEHLFdrfMwPjractPL2gGeOFk250Ly4NrKf1Tg+0HYD8iD4rijtFDG9rmQEOa0AEyOPAeP8A7J7Vj9TW/wBQ9AcjdIPSv4FoAaefMY4FBstr6V0DJvpEYjeMtLnAdWetZR1tLK4tiqYXuaMkNkBwtcWmhETY2wlrG5w1sjgBnnyPWePv481lT22jpsdBA1uA5o4k8CQTz7wg+VF1o6fe6abd3XFrvUccENDiOXYcrj+vLcWlwqQWgkZDHdQz2dizntVHO975o3vL3b5zK/GcAZxnhwAWDbLb4wAyFzRxxiV4xwI7e8+ZQZuu9Ewua+UtcPuujcCeGeAI48xy7R2rnpKuCraXU0rZGjAJby5A/Iha7rRQOawOpwQwEAZPIgN+QA8FsUtHT0rpDTxBnSHLsePlzPAdpQbCIiAiIg//2Q==",
    email: "kantaom@gmail.com",
    status: "Physics",
    age: 48,
    address:"Birtamod",
  },
 
];

export const examColumns = [
  { field: "id", headerName: " Exam Name", width: 200 },
  {
    field: "subject",
    headerName: "Subject",
    width: 230,
  },
  {
    field: "faculty",
    headerName: "Faculty",
    width: 230,
  },

  {
    field: "sem",
    headerName: "Semester",
    width: 200,
  },
  {
    field: "time",
    headerName: "Time",
    width: 200,
  },
  {
    field: "date",
    headerName: "Date",
    width: 200,
  },
];

//temporary data
export const examRows = [
  {
    id: "Class Test",
    subject: "Advance Database",
    date: "2080-01-22",
    faculty: "Bsc Csit",
    sem: 'First',
    time:"12:00",
  },
  {
    id: "Class Test",
    subject: "Cloud Computing",
    date: "2080-01-23",
    faculty: "Bsc Csit",
    sem: 'Eighth',
    time:"12:00",
  },
  {
    id: "Pre-Board",
    subject: "Advance Java",
    date: "2080-02-01",
    faculty: "Bsc Csit",
    sem: 'Seventh',
    time:"12:00",
  },
  {
    id: "Pre-Board",
    subject: "SPM",
    date: "2080-01-02",
    faculty: "Bsc Csit",
    sem: 'Seventh',
    time:"12:00",
  },
  {
    id: "First Terminal",
    subject: "C Programming",
    date: "2080-02-04",
    faculty: "Bsc Csit",
    sem: 'First',
    time:"12:00",
  },
  {
    id: "First Terminal",
    subject: "Digital Logic",
    date: "2080-02-05",
    faculty: "Bsc Csit",
    sem: 'First',
    time:"12:00",
  },
  {
    id: "First Terminal",
    subject: "Physics",
    date: "2080-02-06",
    faculty: "Bsc Csit",
    sem: 'First',
    time:"12:00",
  },
  {
    id: "Class Test",
    subject: "Dot Net",
    date: "2080-03-02",
    faculty: "Bsc Csit",
    sem: 'Sixth',
    time:"12:00",
  },
  {
    id: "Class Test",
    subject: "Technical Writing",
    date: "2080-03-03",
    faculty: "Bsc Csit",
    sem: 'Sixth',
    time:"12:00",
  },
  {
    id: "Class Test",
    subject: "Compiler",
    date: "2080-03-04",
    faculty: "Bsc Csit",
    sem: 'Sixth',
    time:"12:00",
  },
  {
    id: "Class Test",
    subject: "E Commerce",
    date: "2080-03-05",
    faculty: "Bsc Csit",
    sem: 'Sixth',
    time:"12:00",
  },
  
  
 
];


export const bookColumns = [
  { field: "id", headerName: "ID", width: 200 },
  {
    field: "bookname",
    headerName: "Book Name",
    width: 230,
  },
  {
    field: "faculty",
    headerName: "Faculty",
    width: 230,
  },

  {
    field: "sem",
    headerName: "Semester",
    width: 200,
  },
  {
    field: "author",
    headerName: "Author",
    width: 200,
  },
  {
    field: "date",
    headerName: "Published",
    width: 200,
  },
  {
    field: "numbers",
    headerName: "Availlable",
    width: 200,
  },
];

//temporary data
export const bookRows = [
  {
    id: "#0021",
    bookname: "Advance Database",
    faculty: "Bsc Csit",
    sem: 'Eight',
    author: "David lu",
    date:"2019",
    numbers:"13"
  },
  {
    id: "#0022",
    bookname: "Cloud Computing",
    faculty: "Bsc Csit",
    sem: 'Eight',
    author: "Jim Carry",
    date:"2017",
    numbers:"10"
  },
  {
    id: "#0023",
    bookname: "Advance Java",
    faculty: "Bsc Csit",
    sem: 'Seven',
    author: "Martin kim",
    date:"2018",
    numbers:"09"
  },
  {
    id: "#0024",
    bookname: "DataWarehousing",
    faculty: "Bsc Csit",
    sem: 'Seven',
    author: "David Morgan",
    date:"2015",
    numbers:"15"
  },
  {
    id: "#0025",
    bookname: "Software Management",
    faculty: "Bsc Csit",
    sem: 'Seven',
    author: "Robert John",
    date:"2021",
    numbers:"12"
  },
  {
    id: "#0026",
    bookname: "E governance",
    faculty: "Bsc Csit",
    sem: 'Six',
    author: "J.K White",
    date:"2016",
    numbers:"05"
  },
  {
    id: "#0027",
    bookname: "Technical Writing",
    faculty: "Bsc Csit",
    sem: 'Six',
    author: "Camila Morgan",
    date:"2014",
    numbers:"16"
  },
  {
    id: "#0028",
    bookname: "E Commerce",
    faculty: "Bsc Csit",
    sem: 'Six',
    author: "Kazi Fahim",
    date:"2019",
    numbers:"13"
  },
  {
    id: "#0029",
    bookname: "Computer Network",
    faculty: "Bsc Csit",
    sem: 'Fifth',
    author: "David lu",
    date:"2017",
    numbers:"14"
  },
  {
    id: "#0030",
    bookname: "Web Technology",
    faculty: "Bsc Csit",
    sem: 'Fourth',
    author: "Albert Winck",
    date:"2017",
    numbers:"03"
  },
];



export const classColumns = [
  { field: "id", headerName: "Day", width: 200 },
  {
    field: "bookname",
    headerName: "Subject",
    width: 230,
  },
  {
    field: "faculty",
    headerName: "Faculty",
    width: 230,
  },

  {
    field: "sem",
    headerName: "Semester",
    width: 200,
  },
  {
    field: "teacher",
    headerName: "Teacher",
    width: 200,
  },
  {
    field: "time",
    headerName: "Time",
    width: 200,
  },
  
];

//temporary data
export const classRows = [
  {
    id: "Sunday",
    bookname: "Advance Database",
    faculty: "Bsc Csit",
    sem: 'Eight',
    teacher: "Prakash Koirala",
    time:"6:30-7:30",
  },
  {
    id: "Monday",
    bookname: "Mobile Application",
    faculty: "Bsc Csit",
    sem: 'Eight',
    teacher: "Sital Mandal",
    time:"7:30-8:30",
  },
  {
    id: "Tuesday",
    bookname: "Cloud Computing",
    faculty: "Bsc Csit",
    sem: 'Eight',
    teacher: "Narayan Dhamala",
    time:"7:30-8:30",
  },
  {
    id: "Wednesday",
    bookname: "Advance Database",
    faculty: "Bsc Csit",
    sem: 'Eight',
    teacher: "Prakash Koirala",
    time:"6:30-7:30",
  },
  {
    id: "Thursday",
    bookname: "Mobile Application",
    faculty: "Bsc Csit",
    sem: 'Eight',
    teacher: "Sital Mandal",
    time:"7:30-8:30",
  },
  {
    id: "Friday",
    bookname: "Cloud Computing",
    faculty: "Bsc Csit",
    sem: 'Eight',
    teacher: "Narayan Dhamala",
    time:"7:30-8:30",
  },
 
 
];
