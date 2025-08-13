# Test Group

Test Group là một thành phần cơ bản trong Testious, được sử dụng để nhóm các test case lại với nhau, giúp bạn quản lý và tổ chức mã nguồn test một cách logic. Để tạo một Test Group, bạn sử dụng hàm describe có sẵn.
Ví dụ:
```javascript
import {describe} from 'testious';

describe("Test group #1: Hello", (g) => {
  console.log("Hello testious");
});

```
#### API của `describe`

Hàm `describe` nhận vào các tham số sau:
```typescript
describe(description: string, (g: TestGroup) => unknown )
```

 * `description`: Một chuỗi mô tả ngắn gọn về Test Group.
 * `g`: Một đối tượng thuộc lớp `TestGroup`. Bạn sẽ sử dụng đối tượng này để định nghĩa các test case bên trong.

# Test Case

Test Case là đơn vị nhỏ nhất trong Testious, đại diện cho một trường hợp cụ thể trong bài test của bạn. Test Case được định nghĩa bên trong một Test Group.

Cách sử dụng:
Bạn sử dụng phương thức `it()` của đối tượng `g` (được truyền vào hàm `describe`) để tạo một Test Case.
```javascript
g.it("Testcase", () => {
  // Viết mã kiểm thử (assertion) của bạn tại đây
});
```

#### API của `it()`

Phương thức `it()` nhận các tham số sau:
```typescript
TestGroup.it(description: string, fn: Function, timeout?: number)
```

 * `description`: Một chuỗi mô tả ngắn gọn về Test Case.
 * `fn`: Hàm chứa logic kiểm thử của bạn. Đây là nơi bạn đặt các câu lệnh kiểm tra (assertion) để xác nhận hành vi của mã nguồn.
 * `timeout`: (Tùy chọn) Thời gian tối đa (tính bằng milliseconds) mà Test Case được phép chạy.

# Assertion 
Assertion là các hàm kiểm tra giúp bạn tự động xác nhận hành vi của mã nguồn. Đây là bước quan trọng nhất trong việc viết test case, nơi bạn so sánh kết quả thực tế với kết quả mong đợi.
Mọi assertion trong Testious đều bắt đầu bằng hàm expect().

Ví dụ:
```javascript
import {describe, expect} from 'testious';

describe("Test group #1: Hello", (g) => {
  g.it("Case 1", () => {
    // Chúng ta mong đợi giá trị 1 bằng với 1
    expect(1).toEqual(1);
  });
});

```

Trong ví dụ trên, `expect(1)` sẽ tạo ra một đối tượng `Assertion`, cho phép bạn gọi các phương thức so sánh như `toEqual()`.

#### API của `expect()`:

Hàm `expect()` nhận một tham số và trả về một đối tượng `Assertion`:
```typescript
expect(value: any): Assertion
```

 * `value`: Giá trị thực tế bạn muốn kiểm tra.
