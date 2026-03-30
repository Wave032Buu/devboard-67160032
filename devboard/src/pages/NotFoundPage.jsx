import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "4rem 1rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "#e53e3e", marginBottom: "1rem" }}>
        404
      </h1>

      <p style={{ fontSize: "1.2rem", color: "#4a5568", marginBottom: "1.5rem" }}>
        ไม่พบหน้าที่คุณต้องการ
      </p>

      <Link
        to="/"
        style={{
          color: "white",
          background: "#1e40af",
          padding: "0.5rem 1.5rem",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        ← กลับหน้าหลัก
      </Link>
    </div>
  );
}

export default NotFoundPage;