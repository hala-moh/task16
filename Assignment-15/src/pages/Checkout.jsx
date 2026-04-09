// import React, { useContext, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// export default function Checkout() {
//   const { cart, clearCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     city: "",
//     address: "",
//     phone: "",
//     payment: "cash",
//   });

//   const [errors, setErrors] = useState({});
//   const [success, setSuccess] = useState(false);


//   const subtotal = cart.reduce(
//     (acc, item) => acc + item.price * item.qty,
//     0
//   );

//   const shipping = subtotal >= 500 ? 0 : 50;
//   const total = subtotal + shipping;

  
//   function validate() {
//     let err = {};

//     if (!form.city) err.city = "City is required";

//     if (!form.address || form.address.length < 10)
//       err.address = "Address must be at least 10 characters";

//     if (!/^01[0-9]{9}$/.test(form.phone))
//       err.phone = "Enter valid Egyptian phone number";

//     setErrors(err);
//     return Object.keys(err).length === 0;
//   }

 
//   function handleSubmit() {
//     if (!validate()) return;

//     clearCart();
//     setSuccess(true);
//   }

  
//   if (success) {
//     return (
//       <div className="container text-center my-5">
//         <h2 className="text-success">🎉 Order Placed Successfully</h2>
//         <p>Your order has been confirmed 💚</p>

//         <button
//           className="btn btn-success mt-3"
//           onClick={() => navigate("/products")}
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="container my-5">

//       <h3 className="fw-bold mb-4">Complete Your Order</h3>

//       <div className="row g-4">

      
//         <div className="col-md-7">

       
//           <div className="card shadow-sm border-0 mb-4">

//             <div className="bg-success text-white p-3 rounded-top">
//               Shipping Address
//             </div>

//             <div className="p-4">

//               <input
//                 className={`form-control mb-2 ${errors.city && "is-invalid"}`}
//                 placeholder="City"
//                 value={form.city}
//                 onChange={(e) =>
//                   setForm({ ...form, city: e.target.value })
//                 }
//               />
//               <div className="invalid-feedback">{errors.city}</div>

//               <input
//                 className={`form-control mb-2 ${errors.address && "is-invalid"}`}
//                 placeholder="Street name, building number..."
//                 value={form.address}
//                 onChange={(e) =>
//                   setForm({ ...form, address: e.target.value })
//                 }
//               />
//               <div className="invalid-feedback">{errors.address}</div>

//               <input
//                 className={`form-control ${errors.phone && "is-invalid"}`}
//                 placeholder="01xxxxxxxxx"
//                 value={form.phone}
//                 onChange={(e) =>
//                   setForm({ ...form, phone: e.target.value })
//                 }
//               />
//               <div className="invalid-feedback">{errors.phone}</div>

//             </div>
//           </div>

       
//           <div className="card shadow-sm border-0">

//             <div className="bg-success text-white p-3 rounded-top">
//               Payment Method
//             </div>

//             <div className="p-4">

            
//               <div
//                 className={`border rounded p-3 mb-3 d-flex justify-content-between align-items-center ${
//                   form.payment === "cash" ? "border-success" : ""
//                 }`}
//                 onClick={() =>
//                   setForm({ ...form, payment: "cash" })
//                 }
//                 style={{ cursor: "pointer" }}
//               >
//                 <div>
//                   <strong>Cash on Delivery</strong>
//                   <p className="mb-0 text-muted small">
//                     Pay when order arrives
//                   </p>
//                 </div>

//                 {form.payment === "cash" && (
//                   <span className="text-success">✔</span>
//                 )}
//               </div>

              
//               <div
//                 className={`border rounded p-3 d-flex justify-content-between align-items-center ${
//                   form.payment === "online" ? "border-success" : ""
//                 }`}
//                 onClick={() =>
//                   setForm({ ...form, payment: "online" })
//                 }
//                 style={{ cursor: "pointer" }}
//               >
//                 <div>
//                   <strong>Pay Online</strong>
//                   <p className="mb-0 text-muted small">
//                     Secure payment with card
//                   </p>
//                 </div>

//                 {form.payment === "online" && (
//                   <span className="text-success">✔</span>
//                 )}
//               </div>

//             </div>
//           </div>

//         </div>

       
//         <div className="col-md-5">

//           <div className="card shadow-sm border-0">

//             <div className="bg-success text-white p-3 rounded-top">
//               Order Summary
//             </div>

//             <div className="p-4">

//               {cart.map((item) => (
//                 <div
//                   key={item._id}
//                   className="d-flex justify-content-between mb-2"
//                 >
//                   <span>
//                     {item.title} x {item.qty}
//                   </span>
//                   <span>{item.price * item.qty} EGP</span>
//                 </div>
//               ))}

//               <hr />

//               <p>Subtotal: {subtotal} EGP</p>
//               <p>
//                 Shipping:{" "}
//                 {shipping === 0 ? "FREE" : shipping + " EGP"}
//               </p>

//               <h5 className="fw-bold">Total: {total} EGP</h5>

//               <button
//                 className="btn btn-success w-100 mt-3"
//                 onClick={handleSubmit}
//               >
//                 Proceed to Payment
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    city: "",
    address: "",
    phone: "",
    payment: "cash",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // 🔥 حساب الأسعار
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const shipping = subtotal >= 500 ? 0 : 50;
  const total = subtotal + shipping;

  // 🔥 validation
  function validate() {
    let err = {};

    if (!form.city) err.city = "City is required";

    if (!form.address || form.address.length < 10)
      err.address = "Address must be at least 10 characters";

    if (!/^01[0-9]{9}$/.test(form.phone))
      err.phone = "Enter valid Egyptian phone number";

    setErrors(err);
    return Object.keys(err).length === 0;
  }

  // 🔥 submit
  function handleSubmit() {
    const isValid = validate();

    if (!isValid) {
      alert("❌ Fix errors first");
      return;
    }

    clearCart();
    setSuccess(true);
  }

  // 🔥 صفحة النجاح داخل نفس الصفحة
  if (success) {
    return (
      <div className="container text-center my-5">
        <div className="card p-5 shadow-sm">

          <h2 className="text-success mb-3">
            🎉 Order Placed Successfully
          </h2>

          <p className="text-muted mb-4">
            Your order has been confirmed 💚
          </p>

          <button
            className="btn btn-success"
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">

      <h3 className="fw-bold mb-4">Complete Your Order</h3>

      <div className="row g-4">

        {/* 🔹 LEFT */}
        <div className="col-md-7">

          {/* Shipping */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="bg-success text-white p-3 rounded-top">
              Shipping Address
            </div>

            <div className="p-4">

              <input
                className={`form-control mb-2 ${errors.city ? "is-invalid" : ""}`}
                placeholder="City"
                value={form.city}
                onChange={(e) =>
                  setForm({ ...form, city: e.target.value })
                }
              />
              <div className="invalid-feedback">{errors.city}</div>

              <input
                className={`form-control mb-2 ${errors.address ? "is-invalid" : ""}`}
                placeholder="Street name, building number..."
                value={form.address}
                onChange={(e) =>
                  setForm({ ...form, address: e.target.value })
                }
              />
              <div className="invalid-feedback">{errors.address}</div>

              <input
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                placeholder="01xxxxxxxxx"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />
              <div className="invalid-feedback">{errors.phone}</div>

            </div>
          </div>

          {/* Payment */}
          <div className="card shadow-sm border-0">
            <div className="bg-success text-white p-3 rounded-top">
              Payment Method
            </div>

            <div className="p-4">

              <div
                className={`border rounded p-3 mb-3 d-flex justify-content-between ${
                  form.payment === "cash" ? "border-success" : ""
                }`}
                onClick={() =>
                  setForm({ ...form, payment: "cash" })
                }
                style={{ cursor: "pointer" }}
              >
                <div>
                  <strong>Cash on Delivery</strong>
                  <p className="mb-0 text-muted small">
                    Pay when order arrives
                  </p>
                </div>
                {form.payment === "cash" && <span>✔</span>}
              </div>

              <div
                className={`border rounded p-3 d-flex justify-content-between ${
                  form.payment === "online" ? "border-success" : ""
                }`}
                onClick={() =>
                  setForm({ ...form, payment: "online" })
                }
                style={{ cursor: "pointer" }}
              >
                <div>
                  <strong>Pay Online</strong>
                  <p className="mb-0 text-muted small">
                    Secure payment
                  </p>
                </div>
                {form.payment === "online" && <span>✔</span>}
              </div>

            </div>
          </div>

        </div>

        {/* 🔹 RIGHT */}
        <div className="col-md-5">
          <div className="card shadow-sm border-0">
            <div className="bg-success text-white p-3 rounded-top">
              Order Summary
            </div>

            <div className="p-4">

              {cart.map((item) => (
                <div
                  key={item._id}
                  className="d-flex justify-content-between mb-2"
                >
                  <span>
                    {item.title} x {item.qty}
                  </span>
                  <span>{item.price * item.qty} EGP</span>
                </div>
              ))}

              <hr />

              <p>Subtotal: {subtotal} EGP</p>
              <p>
                Shipping:{" "}
                {shipping === 0 ? "FREE" : shipping + " EGP"}
              </p>

              <h5 className="fw-bold">Total: {total} EGP</h5>

              <button
                className="btn btn-success w-100 mt-3"
                onClick={handleSubmit}
              >
                Proceed to Payment
              </button>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}