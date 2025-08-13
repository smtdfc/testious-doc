# Cấu Hình Testious

Mọi cài đặt cho Testious đều được quản lý thông qua file `testious.config.json` nằm ở thư mục gốc của dự án. File này cho phép bạn định nghĩa các runner, entry point và cấu hình server một cách linh hoạt.
Dưới đây là cấu trúc chi tiết của file cấu hình này:
```json
{
  "runners": ["node", "browser"],
  "entry": {
    "node": "node_test_entry.js",
    "browser": "browser_test_entry.js"
  },
  "server": {
    "port": 3000
  }
}
```

### Chi tiết 

#### `runners`
 * Loại dữ liệu: `string[]` 
 * Mô tả: Thuộc tính này khai báo các môi trường kiểm thử mà bạn muốn sử dụng. Các giá trị hợp lệ là "node" và "browser".
 * Ví dụ:
   * ["node"]: Chỉ chạy test trên môi trường Node.js.
   * ["browser"]: Chỉ chạy test trên môi trường trình duyệt.
   * ["node", "browser"]: Chạy test trên cả hai môi trường.

#### `entry`
 * Loại dữ liệu: `object`
 * Mô tả: Thuộc tính này định nghĩa các entry point (điểm khởi đầu) cho các bài test của bạn. Mỗi runner cần một entry point riêng.
 * Ví dụ:
   * "node": "node_test_entry.js": Chỉ ra rằng file node_test_entry.js sẽ là nơi chứa các file test cho môi trường Node.js.
   * "browser": "browser_test_entry.js": Tương tự, đây là file entry point cho môi trường trình duyệt.

#### `server`
 * Loại dữ liệu: `object`
 * Mô tả: Cấu hình cho server nội bộ của Testious, được sử dụng khi chạy test trên trình duyệt.
 * Các thuộc tính con:
   * `port`: Số cổng mà server sẽ lắng nghe. Mặc định là 3030.