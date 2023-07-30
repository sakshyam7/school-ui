import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="student" />
          <Widget type="teacher" />
          <Widget type="employee" />
          <Widget type="faculty" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Batch & Students" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Student Fees Details</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
