import React from "react";
import { Link } from "react-router-dom";
const Table = ({filteredData}) => {
  return (
    <div>
      <table>
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
              <tr key={index}>
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
      </table>
    </div>
  );
};

export default Table;
