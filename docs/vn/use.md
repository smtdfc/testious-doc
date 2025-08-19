# Hướng Dẫn Sử Dụng

### 1. Khởi Tạo Dự Án
Để Testious có thể hoạt động chính xác, bạn cần khởi tạo một dự án mới và cấu hình nó đúng cách. Hãy chạy lệnh sau:
```bash
testious init --no-install
```

__Lưu ý:__ Thêm cờ `--no-install` nếu bạn không muốn CLI tự động cài đặt các dependencies qua npm.

Sau khi khởi tạo thành công, bạn sẽ thấy hai file được tạo:
 * `testious.config.json`: File cấu hình chính của Testious.
 * `rollup.config.js`: File cấu hình của Rollup để đóng gói các file test.


### 2. Tạo Test Entry Point
Test Entry Point là nơi Testious sẽ tìm thấy các file test của bạn để đóng gói và thực thi. Mỗi môi trường (Node.js hoặc trình duyệt) chỉ có một entry point duy nhất.

Để tạo một entry point hãy tạo một file JavaScript mới, ví dụ:
```bash
touch index.js
```

Khai báo nó trong file testious.config.json của bạn.
Nếu bạn đang làm việc với Node.js, hãy sử dụng key `entry.node`:
```json
{  
 "runners": ["node","browser"],
  "entry": {
    "node": "node/index.js",
  }
}}
```

__Note__: Nếu bạn đang làm việc với môi trường trình duyệt, hãy thay bằng `entry.browser`.

### 3. Tạo File Test
Testious cung cấp một lệnh CLI tiện lợi để tạo các file test. Để tạo một file test có tên hello, bạn chỉ cần chạy:
```bash
testious create file hello
```

Lệnh này sẽ tạo ra file `hello.test.js`. Bây giờ, bạn có thể chỉnh sửa nội dung của file này. Ví dụ:
```javascript
import {describe} from 'testious';

describe("Test group #1: Hello", (g) => {
  console.log("Hello testious");
});
```

### 4. Chạy Test
Khi đã sẵn sàng, bạn có thể chạy các bài test bằng lệnh sau:
```bash
testious run --bundle
```

Với cờ `--bundle`, Testious sẽ tự động đóng gói file bằng Rollup trước khi kích hoạt runner.
Nếu bạn đang test cho môi trường trình duyệt, hãy thêm cờ `--browser`:
```bash
testious run --bundle --browser
```

Lệnh này sẽ tự động chuẩn bị, mở trình duyệt và chạy các bài test cho bạn.