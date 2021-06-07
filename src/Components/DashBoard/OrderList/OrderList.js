import React, { useContext, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../../App";
import TableLoader from "../TableLoader/TableLoader";

const OrderList = () => {
  const {
    loggedInUser: { email },
  } = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleStatusChange = (id, status) => {};

  return (
    <div
      className="px-5 pt-4 mx-md-4 bg-white"
      style={{ borderRadius: "15px" }}
    >
      {loading ? (
        <TableLoader />
      ) : (
        <Table hover borderless responsive>
          <thead className="bg-light">
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Service</th>
              <th>Pay with</th>
              <th>Status</th>
            </tr>
          </thead>
          {orders.map((order) => {
            <tbody>
              <tr>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.service}</td>
                <td>{order.payWith}</td>
                <td>
                  <select
                    className={
                      order.status === "Pending"
                        ? "btn btn-danger"
                        : order.status === "Done"
                        ? "btn btn-success"
                        : "btn btn-info"
                    }
                    defaultValue={order.status}
                    onChange={(e) =>
                      handleStatusChange(order._id, e.target.value)
                    }
                  >
                    <option className="bg-white text-muted">Pending</option>
                    <option className="bg-white text-muted">On going</option>
                    <option className="bg-white text-muted">Done</option>
                  </select>
                </td>
              </tr>
            </tbody>;
          })}
        </Table>
      )}
    </div>
  );
};

export default OrderList;
