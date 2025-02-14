import React from "react";
import { Image } from "react-bootstrap";
import { TiUserAdd } from "react-icons/ti";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Form } from "react-bootstrap";
import { submitProfilePicture } from "../functions/functions";
import { Link } from "react-router-dom";

export default function UserInfo(props) {
  async function changeProfilePicture(e) {
    console.log(e.target.files[0]);
    await submitProfilePicture(e.target.files[0], props.userId);
    await props.refreshData();
  }
  return (
    <div className="bg-white border round-border">
      <div className="text-center">
        <Image
          className="h-100 w-100"
          src="https://picsum.photos/750/200"
          style={{ "border-radius": "10px 10px 0px 0px" }}
        />
        <Link to={`/profile/` + props.profileData._id}>
          <Image
            src={props.profileData.image}
            style={{
              position: "relative",
              // left: "30%",
              bottom: "15px",
              "border-radius": "32px",
              height: "64px",
              width: "64px",
            }}
          ></Image>
        </Link>
        <Form onChange={changeProfilePicture}>
          <Form.File
            id="custom-file"
            label=""
            custom
            className="text-left"
            data-browse="Change profile pic"
          />
        </Form>

        <h4>{props.profileData.name + " " + props.profileData.surname}</h4>
        <p>{props.profileData.title}</p>
      </div>
      <div className="border-top p-2 shade">
        <a
          href="http://localhost:3001"
          className="text-left d-flex w-100 justify-content-between text-dark no-decoration"
        >
          <div className="d-flex flex-column">
            <span className="font-weight-light small-text">Connections</span>
            <span className="font-weight-bold small-text">
              Grow your network
            </span>
          </div>
          <div>
            <TiUserAdd />
          </div>
        </a>
      </div>
      <div className="border-top p-2 shade">
        <a href="http://localhost:3001" className="text-dark no-decoration">
          <div className="d-flex flex-column">
            <span className="font-weight-light small-text">
              Access exclusive tools & insights
            </span>
            <span className="font-weight-bold small-text">
              Try Premium Free for 1 Month
            </span>
          </div>
        </a>
      </div>
      <div className="d-flex flex-row border-top p-2 shade">
        <a href="http://localhost:3001" className="text-dark no-decoration">
          <BsFillBookmarkFill />
          <span className="small-text ml-1">My items</span>
        </a>
      </div>
    </div>
  );
}
