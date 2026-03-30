# Task #1: Components, JSX, Props, Lists

## เป้าหมาย

สร้างโครงของ **DevBoard** โดยใช้ React components ที่แยกกันชัดเจน ส่งข้อมูลด้วย props และ render รายการด้วย `.map()`

เมื่อจบ task นี้จะได้:

- หน้าเว็บ static ที่แสดง "โพสต์ล่าสุด" และ "สมาชิก"
- เข้าใจการสร้าง component และการส่ง props
- เข้าใจการใช้ `.map()` render list

---

## Setup: สร้าง Project

```bash
npm create vite@latest devboard -- --template react
cd devboard
npm install
npm run dev
```

ลบไฟล์ที่ไม่ต้องการออก:

- ลบเนื้อหาใน `src/App.jsx` (เก็บแค่ function เปล่า)
- ลบเนื้อหาใน `src/App.css` (ไม่บังคับ)
- Push ขึ้น GitHub ก่อนเริ่ม task

---

## โครงสร้างไฟล์ที่จะสร้างใน task นี้

```
src/
├── components/
│   ├── Navbar.jsx      ← Activity 1
│   ├── PostCard.jsx    ← Activity 2
│   ├── PostList.jsx    ← Activity 3
│   └── UserCard.jsx    ← Activity 4
└── App.jsx             ← Activity 5 (รวมทุกอย่าง)
```

---

## ข้อมูล Hardcode สำหรับ task นี้

เพิ่มข้อมูลนี้ลงใน `src/App.jsx` ก่อนเริ่ม:

```jsx
const POSTS = [
  {
    id: 1,
    title: "React คืออะไร?",
    body: "React เป็น library สำหรับสร้าง UI ที่ทำให้ code อ่านง่ายและดูแลรักษาได้",
  },
  {
    id: 2,
    title: "ทำไมต้องใช้ Components?",
    body: "Components ช่วยให้เราแบ่ง UI ออกเป็นชิ้นเล็ก ๆ ที่ reuse ได้",
  },
  {
    id: 3,
    title: "JSX คืออะไร?",
    body: "JSX คือ syntax ที่ช่วยให้เราเขียน HTML ใน JavaScript ได้อย่างสะดวก",
  },
  {
    id: 4,
    title: "Props ทำงานอย่างไร?",
    body: "Props คือ argument ที่ส่งให้ component เหมือนกับการส่งพารามิเตอร์ให้ฟังก์ชัน",
  },
];

const USERS = [
  { id: 1, name: "สมชาย ใจดี", email: "somchai@dev.com" },
  { id: 2, name: "สมหญิง รักเรียน", email: "somying@dev.com" },
  { id: 3, name: "วิชาญ โค้ดเก่ง", email: "wichan@dev.com" },
];
```

---

## Activity 1 — Navbar Component

สร้างไฟล์ `src/components/Navbar.jsx`

```jsx
function Navbar() {
  return (
    <nav
      style={{ background: "#1e40af", color: "white", padding: "1rem 2rem" }}
    >
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>DevBoard</h1>
      <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.8 }}>
        กระดานนักพัฒนา
      </p>
    </nav>
  );
}

export default Navbar;
```

**Checkpoint:** เมื่อ import Navbar ใน App.jsx แล้วรัน ควรเห็น header สีน้ำเงินที่ด้านบน

---

## Activity 2 — PostCard Component

สร้างไฟล์ `src/components/PostCard.jsx`

Component นี้รับ props คือ `title` และ `body`

```jsx
function PostCard({ title, body }) {
  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        background: "white",
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem", color: "#1e40af" }}>{title}</h3>
      <p style={{ margin: 0, color: "#4a5568", lineHeight: 1.6 }}>{body}</p>
    </div>
  );
}

export default PostCard;
```

**ลองทดสอบ** โดย import ใน App.jsx และส่ง props:

```jsx
<PostCard title="ทดสอบ" body="นี่คือเนื้อหาทดสอบ" />
```

---

## Activity 3 — PostList Component

สร้างไฟล์ `src/components/PostList.jsx`

Component นี้รับ props คือ `posts` (array) แล้ว `.map()` render PostCard

```jsx
import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <div>
      <h2
        style={{
          color: "#2d3748",
          borderBottom: "2px solid #1e40af",
          paddingBottom: "0.5rem",
        }}
      >
        โพสต์ล่าสุด
      </h2>
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default PostList;
```

> **สำคัญ:** `key={post.id}` ต้องมีเสมอเมื่อใช้ `.map()` ใน React ถ้าลืมจะเห็น warning ใน console

---

## Activity 4 — UserCard Component

สร้างไฟล์ `src/components/UserCard.jsx`

```jsx
function UserCard({ name, email }) {
  // ดึงตัวอักษรแรกมาทำ avatar
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
        background: "white",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          background: "#1e40af",
          color: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "0.9rem",
        }}
      >
        {initials}
      </div>
      <div>
        <div style={{ fontWeight: "bold", color: "#2d3748" }}>{name}</div>
        <div style={{ fontSize: "0.85rem", color: "#718096" }}>{email}</div>
      </div>
    </div>
  );
}

export default UserCard;
```

---

## Activity 5 — รวมทุกอย่างใน App.jsx

แก้ไข `src/App.jsx` ให้ใช้ทุก component ที่สร้างมา:

```jsx
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import UserCard from "./components/UserCard";

const POSTS = [
  {
    id: 1,
    title: "React คืออะไร?",
    body: "React เป็น library สำหรับสร้าง UI ที่ทำให้ code อ่านง่ายและดูแลรักษาได้",
  },
  {
    id: 2,
    title: "ทำไมต้องใช้ Components?",
    body: "Components ช่วยให้เราแบ่ง UI ออกเป็นชิ้นเล็ก ๆ ที่ reuse ได้",
  },
  {
    id: 3,
    title: "JSX คืออะไร?",
    body: "JSX คือ syntax ที่ช่วยให้เราเขียน HTML ใน JavaScript ได้อย่างสะดวก",
  },
  {
    id: 4,
    title: "Props ทำงานอย่างไร?",
    body: "Props คือ argument ที่ส่งให้ component เหมือนกับการส่งพารามิเตอร์ให้ฟังก์ชัน",
  },
];

const USERS = [
  { id: 1, name: "สมชาย ใจดี", email: "somchai@dev.com" },
  { id: 2, name: "สมหญิง รักเรียน", email: "somying@dev.com" },
  { id: 3, name: "วิชาญ โค้ดเก่ง", email: "wichan@dev.com" },
];

function App() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          maxWidth: "900px",
          margin: "2rem auto",
          padding: "0 1rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "2rem",
        }}
      >
        {/* คอลัมน์ซ้าย: โพสต์ */}
        <div>
          <PostList posts={POSTS} />
        </div>

        {/* คอลัมน์ขวา: สมาชิก */}
        <div>
          <h2
            style={{
              color: "#2d3748",
              borderBottom: "2px solid #1e40af",
              paddingBottom: "0.5rem",
            }}
          >
            สมาชิก
          </h2>
          {USERS.map((user) => (
            <UserCard key={user.id} name={user.name} email={user.email} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
```

---

## Checkpoint สุดท้าย

เมื่อรัน `npm run dev` ควรเห็น:

- Header สีน้ำเงิน "DevBoard"
- คอลัมน์ซ้าย: โพสต์ 4 รายการแต่ละอันมี title และ body
- คอลัมน์ขวา: สมาชิก 3 คนพร้อม avatar ตัวอักษร

---

## สรุปสิ่งที่ได้เรียนรู้

| แนวคิด              | ตัวอย่างในงาน                                 |
| ------------------- | --------------------------------------------- |
| Function Component  | `function PostCard() {}`                      |
| JSX                 | `<div className="card">`                      |
| Props               | `<PostCard title={post.title} />`             |
| Destructuring Props | `function PostCard({ title, body })`          |
| .map() + key        | `posts.map(p => <PostCard key={p.id} ... />)` |

---

## Deploy ขึ้น Vercel (ทำครั้งแรกในนี้)

### ขั้นตอนที่ 1: Push ขึ้น GitHub

```bash
git add .
git commit -m "feat: task1 - static devboard components"
git push
```

### ขั้นตอนที่ 2: เชื่อม Vercel กับ GitHub (ทำครั้งเดียวตลอดโครงงาน)

1. ไปที่ [vercel.com](https://vercel.com) → Sign up ด้วย GitHub account
2. กด **"Add New Project"**
3. เลือก repository `devboard` แล้วกด **Import**
4. Vercel จะตรวจจับ Vite อัตโนมัติ → กด **Deploy** ได้เลย
5. รอ ~1 นาที → ได้ URL เช่น `https://devboard-xxx.vercel.app`

> ✅ หลังจากนี้ทุกครั้งที่ `git push` Vercel จะ deploy ให้อัตโนมัติ ไม่ต้องทำซ้ำ

### Checkpoint

เปิด Vercel URL แล้วควรเห็นหน้า DevBoard เหมือนกับที่รันบน localhost ทุกประการ

---

## วิธีส่งงาน

1. Commit ทุก activity และ push ขึ้น GitHub
2. ตรวจสอบว่า `npm run dev` รันได้โดยไม่มี error
3. ส่ง **GitHub URL** และ **Vercel URL** ให้อาจารย์

---

## 🚀 Challenge

ทำเสร็จแล้ว ลองท้าทายตัวเองด้วยโจทย์เพิ่มเติมด้านล่างนี้
ไม่มีเฉลย - **ในวันนำเสนอโครงงาน ถ้ามีทำเพิ่ม และสามารถอธิบายในสิ่งที่ทำได้ จะมีคะแนนเพิ่ม 2.5 คะแนน(ดิบ ๆ ไม่หาร)**

---

### ⭐ ระดับ 1 — PostCount Component

สร้าง component ชื่อ `PostCount` ที่รับ `count` เป็น props แล้วแสดงข้อความว่ามีกี่โพสต์

ตัวอย่างที่ควรเห็น:

```
โพสต์ทั้งหมด: 4 รายการ
```

วางไว้ใต้หัวข้อ "โพสต์ล่าสุด" ใน `PostList`

> 💡 Hint: `posts.length` บอกจำนวน array

---

### ⭐⭐ ระดับ 2 — Avatar หลากสี

ปรับ `UserCard` ให้ avatar มีสีต่างกันตามตัวอักษรแรกของชื่อ แทนที่จะเป็นสีน้ำเงินทุกคน

ตัวอย่างแนวทาง:

- ชื่อขึ้นต้น A–G → สีน้ำเงิน
- ชื่อขึ้นต้น H–N → สีเขียว
- ชื่อขึ้นต้น O–Z → สีม่วง

> 💡 Hint: `name.charCodeAt(0)` คืน ASCII code ของตัวอักษรแรก ลอง `% 3` แล้วใช้ switch/if เลือกสี

---

### ⭐⭐⭐ ระดับ 3 — PostSkeleton

สร้าง component `PostSkeleton` ที่แสดง placeholder สีเทา (เหมือนหน้าเว็บกำลังโหลด) แทนที่ `PostCard` ตอนยังไม่มีข้อมูล

ตัวอย่างที่ควรเห็น:

```
┌─────────────────────────────────┐
│ ░░░░░░░░░░░░░░  ← title กว้าง 60%  │
│ ░░░░░░░░░░░░░░░░░░░░  ← body    │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░     │
└─────────────────────────────────┘
```

> 💡 Hint: ใช้ `div` ที่มี `background: '#e2e8f0'`, `borderRadius`, และกำหนด `height` คงที่ แสดง 3 ก้อน ด้วย `.map([1,2,3], ...)`
