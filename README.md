💬 Full Stack Messenger Clone
📝 Mô tả dự án
Đây là một dự án clone ứng dụng nhắn tin Messenger với đầy đủ phần Frontend và Backend. Ứng dụng mô phỏng trải nghiệm trò chuyện thời gian thực với các tính năng chính và giao diện tương tự Messenger.

## Getting Started
Mục tiêu:
💬 Gửi và nhận tin nhắn theo thời gian thực (real-time messaging)

First, run the development server:
🧑‍🤝‍🧑 Hiển thị danh sách bạn bè / danh sách trò chuyện

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
🕒 Hiển thị trạng thái hoạt động (online/offline, đã xem tin nhắn)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
🖼️ Gửi hình ảnh, emoji, và tệp đính kèm

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
🔔 Thông báo khi có tin nhắn mới

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
🔒 Xác thực và phân quyền người dùng

## Learn More
🎨 Giao diện thân thiện, responsive, sử dụng Tailwind CSS

To learn more about Next.js, take a look at the following resources:
Dự án phục vụ mục đích học tập và rèn luyện kỹ năng Full Stack thực chiến.

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
🛠️ Công nghệ sử dụng
Frontend: Next.js 13.4 + React

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
Style: Tailwind CSS

## Deploy on Vercel
Backend & Authentication: Supabase

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
Cơ sở dữ liệu: PostgreSQL (qua Supabase)

Real-time: Supabase Realtime hoặc WebSocket

Storage: Supabase Storage (lưu ảnh, tệp đính kèm)

✨ Tính năng chính
🔐 Đăng ký, đăng nhập và quản lý tài khoản người dùng (dùng Supabase Auth)

🧑‍🤝‍🧑 Hiển thị danh sách bạn bè và các cuộc trò chuyện

💬 Gửi và nhận tin nhắn theo thời gian thực (real-time messaging)

🖼️ Gửi và xem hình ảnh, emoji, tệp đính kèm trong cuộc trò chuyện

🕒 Hiển thị trạng thái hoạt động (online/offline, đã xem tin nhắn)

🔔 Thông báo đẩy khi có tin nhắn mới

🔍 Tìm kiếm cuộc trò chuyện hoặc người dùng

📱 Giao diện responsive hỗ trợ tốt trên cả điện thoại và máy tính

🛠️ Các bước phát triển tiếp theo
📞 Tích hợp gọi video/audio giữa các người dùng

📁 Hỗ trợ gửi nhiều loại tệp khác nhau với dung lượng lớn

👥 Tạo nhóm chat, mời thành viên và phân quyền quản lý

📊 Phân tích hành vi trò chuyện để gợi ý người thường liên lạc

🛡️ Bổ sung các tính năng bảo mật như mã hóa tin nhắn đầu-cuối (end-to-end encryption)

📲 Hoàn thiện UX/UI trên mobile và tối ưu hiệu năng
