import "./SingleTeacher.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const SingleTeacher= () => {
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
                src="https://scontent.fbdp2-1.fna.fbcdn.net/v/t1.6435-9/127270224_3773978599301330_7949118263076312921_n.jpg?stp=dst-jpg_s851x315&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=8RUM5CcnCiAAX8HQP2w&_nc_ht=scontent.fbdp2-1.fna&oh=00_AfBJ0mEbvrGJyNpnRutQLbbvqWWXiRGazrWx4LZHjuNoEg&oe=64E837D7"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Er. Prakash Koirala</h1>
                <div className="detailItem">
                  <span className="itemKey">Program:</span>
                  <span className="itemValue">Bsc Csit </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Qualifiaction:</span>
                  <span className="itemValue">Software Engineer</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">98223232322</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Bhadrapur, Jhapa, Nepal
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Subject:</span>
                  <span className="itemValue">Advance Database</span>
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

export default SingleTeacher;
