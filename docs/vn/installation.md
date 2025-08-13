# Hướng Dẫn Cài Đặt
Để bắt đầu với Testious, bạn có thể dễ dàng cài đặt các gói cần thiết qua npm.

### 1. Cài đặt các gói cốt lõi
Đầu tiên, hãy cài đặt các gói chính của Testious, bao gồm API và công cụ dòng lệnh (CLI), vào dự án của bạn:
```bash
npm i -D testious testious-cli
```

* testious: Gói này chứa các API cốt lõi để bạn có thể viết và quản lý các nhóm test (test group).
* testious-cli: Đây là công cụ dòng lệnh giúp tự động hóa quá trình đóng gói file test của bạn bằng Rollup và khởi chạy Testious server.

### 2. Cài đặt Runner
Testious cần một runner để thực thi các bài test. Tùy thuộc vào môi trường bạn muốn làm việc:

* Dành cho môi trường Node.js:
```bash
npm i -D testious-node-runner
```

 * Dành cho môi trường trình duyệt (Browser):
```bash
npm i -D testious-browser-runner
```

### 3. Đảm bảo Rollup đã được cài đặt
Để Testious có thể xử lý các file test một cách hiệu quả, bạn cần đảm bảo Rollup và các plugin cần thiết đã được cài đặt trong dự án của mình. Testious sử dụng Rollup để đóng gói các file test trước khi chuyển chúng cho runner.