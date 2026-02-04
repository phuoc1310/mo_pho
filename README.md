🌱 Mo Pho Backend API

Backend cho hệ thống Website Mơ Phố – không gian cà phê cộng đồng kết hợp gây quỹ thiện nguyện, phục vụ cho đề tài Thực tập tốt nghiệp – Ngành Hệ thống thông tin.

📌 Giới thiệu

Hệ thống backend Mơ Phố được xây dựng nhằm:

Cung cấp API cho website giới thiệu Mơ Phố

Quản lý sản phẩm gây quỹ, đơn hàng

Quản lý hoạt động thiện nguyện, báo cáo gây quỹ

Phân quyền rõ ràng cho các vai trò quản lý

Đảm bảo tính minh bạch và an toàn dữ liệu

Backend đóng vai trò trung tâm xử lý toàn bộ nghiệp vụ và dữ liệu của hệ thống.

🧩 Công nghệ sử dụng

Node.js + Express.js

PostgreSQL

JWT (JSON Web Token) cho xác thực & phân quyền

bcrypt cho mã hóa mật khẩu

dotenv quản lý biến môi trường
Vai trò người dùng

Hệ thống hỗ trợ 5 vai trò:

Vai trò	Mô tả
Guest	Xem thông tin, sản phẩm, hoạt động
Member	Đặt mua sản phẩm gây quỹ
Mo Pho Manager	Quản lý sản phẩm, đơn hàng, nội dung quán
BSTN Manager	Quản lý sự kiện & báo cáo gây quỹ
Admin	Quản trị toàn bộ hệ thống & phân quyền

✅ Các Use Case đã triển khai

Hệ thống đã triển khai đầy đủ 14 Use Case:

UC-01 → UC-06: Xem thông tin (Guest, Member)

UC-07: Đăng nhập hệ thống

UC-08: Quản lý sản phẩm

UC-09: Quản lý đơn hàng

UC-10: Quản lý nội dung quán

UC-11: Quản lý sự kiện thiện nguyện

UC-12: Quản lý báo cáo gây quỹ

UC-13: Xem báo cáo thu chi

UC-14: Quản lý tài khoản (Admin)

🔐 Xác thực & phân quyền

Sử dụng JWT cho đăng nhập

Các API quản lý được bảo vệ bằng middleware:

verifyToken

authorizeRoles(...)

Mỗi vai trò chỉ được phép truy cập đúng chức năng nghiệp vụ
