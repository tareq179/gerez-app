import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import toast from "react-hot-toast";
import { UserContext } from "../../../App";
import TableLoader from "../TableLoader/TableLoader";

const OrderList = () => {
  const {
    loggedInUser: { email },
  } = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5500/order?email=${email}`)
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }, [email]);

  const handleStatusChange = (id, status) => {
    let modifiedOrders = [];
    orders.forEach((order) => {
      if (order._id === id) {
        order.status = status;
      }
      modifiedOrders.push(order);
    });
    setOrders(modifiedOrders);

    const modifiedStatus = { id, status };

    axios
      .patch("http://localhost:5500/updateOrderStatus", modifiedStatus)
      .then((res) => res.data && toast.success(`Set to ${status}`))
      .catch((error) => toast.error(error.message));
  };

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
            return (
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
              </tbody>
            );
          })}
        </Table>
      )}
    </div>
  );
};

export default OrderList;
