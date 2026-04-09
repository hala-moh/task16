import { useParams, useNavigate } from "react-router-dom";

export default function SubCategoryDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div className="container my-5 text-center">

    
      <div
        className="p-5 text-white rounded mb-4"
        style={{
          background: "linear-gradient(135deg, #28a745, #198754)"
        }}
      >
        <h2 className="fw-bold">{name}</h2>
        <p>Choose a subcategory to browse products</p>
      </div>


      <button
        className="btn btn-success px-5 py-2"
        onClick={() => navigate("/products")}
      >
        Show All Products
      </button>

    </div>
  );
}