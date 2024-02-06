import React from "react";
import SideBar from "../components/Sidebar/SideBar";
import { Link, useLocation } from "react-router-dom";
import Tabel from "../components/Table/Tabel";

import { data } from "../utils/data";
const Pies = () => {
  const location = useLocation();

  console.log(location);
  const filteredData = data.filter((item) => {
    if (location.pathname === "/allpies") {
      return item;
    } else if (item.specific === location.pathname) {
      return item;
    }
  });

  console.log(filteredData);
  return (
    <div className="section flex justify-center w-full gap-[10px]">
      <div className="flex flex-col justify-center items-center md:flex-row md:items-start main w-[90%]">
        <div className="side w-[25%]">
          <div className="Sidebar">
            <SideBar />
          </div>
        </div>
        <div className="content w-[90%] flex flex-col gap-5 pb-5 overflow-x-auto mt-4">
          <h1 className="font-bold text-xl">Our Selection of Pies</h1>
          <Tabel filteredData={filteredData} />
          {/* <table>
            <caption className="pb-3">Current Selection of Pies</caption>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => {
                return (
                  <tr>
                    <td>
                      <img
                        src={`/BethanysPieShop/images/products/cheesecakes/${
                          index + 1
                        }.jpg`}
                        alt={item.name}
                      />
                    </td>

                    <td>{item.piename}</td>
                    <td>{item.discription}</td>
                    <td>{item.Price}</td>
                    <td>
                      <Link to="/pie">
                        <button className="btn" value={item.name}>
                          View
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
};

export default Pies;
