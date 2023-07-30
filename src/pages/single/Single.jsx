import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/2250526/pexels-photo-2250526.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Anusha Gurung</h1>
                <div className="detailItem">
                  <span className="itemKey">Program:</span>
                  <span className="itemValue">Bsc Csit 8<sup>th</sup>Sem</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Symbol Number:</span>
                  <span className="itemValue">21370/75</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">9825937463</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Birtamod-3, Jhapa, Nepal
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Batch:</span>
                  <span className="itemValue">2075</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Batch & Student" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Student Fees Details</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
