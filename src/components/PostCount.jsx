function PostCount({ count }) {
  return (
    <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>
      โพสต์ทั้งหมด: {count} รายการ
    </p>
  );
}

export default PostCount;