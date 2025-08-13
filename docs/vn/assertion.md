# Assertion 

Lớp `Assertion` và hàm `expect` tạo thành hạt nhân của hệ thống kiểm thử trong Testious. Chúng cung cấp một bộ các phương thức (gọi là "matchers") cho phép bạn kiểm tra và xác nhận hành vi của mã nguồn một cách trực quan và hiệu quả.
Hàm `expect` nhận vào một giá trị thực tế (`value`) và trả về một đối tượng `Assertion`, từ đó bạn có thể gọi các matchers khác nhau để so sánh giá trị đó với giá trị mong đợi.
Ví dụ cơ bản:
```javascript
expect(1 + 1).toBe(2);
```

Các Matchers Có Sẵn
Dưới đây là danh sách các matchers được tích hợp sẵn trong lớp `Assertion`.

#### So sánh giá trị
 * `toBe(expected: any)`
   * Kiểm tra xem giá trị có giống hệt (===) với giá trị mong đợi hay không.
 * `toEqual(expected: any)`
   * Kiểm tra xem giá trị có bằng nhau về mặt nội dung hay không. Rất hữu ích khi so sánh các đối tượng hoặc mảng.
 * `toBeTruthy()`
   * Kiểm tra xem giá trị có là truthy (tương đương true) hay không.
 * `toBeFalsy()`
   * Kiểm tra xem giá trị có là falsy (tương đương false) hay không.
 * `toBeNull()`
   * Kiểm tra xem giá trị có phải là null hay không.
 * `toBeUndefined()`
   * Kiểm tra xem giá trị có phải là undefined hay không.
 * `toBeDefined()`
   * Kiểm tra xem giá trị có được định nghĩa (!== undefined) hay không.

#### Kiểm tra cấu trúc và thuộc tính
 * `toContain(expected: any)`
   * Kiểm tra xem một mảng hoặc chuỗi có chứa một phần tử/chuỗi con cụ thể hay không.
 * `toHaveLength(expectedLength: number)`
   * Kiểm tra độ dài của một mảng hoặc chuỗi.
 * `toHaveProperty(propertyPath: string, expectedValue?: any)`
   * Kiểm tra xem một đối tượng có thuộc tính cụ thể hay không.
   * Bạn có thể tùy chọn truyền vào `expectedValue` để kiểm tra giá trị của thuộc tính đó.
 * `toMatchObject(expected: object)`
   * Kiểm tra xem một đối tượng có chứa tất cả các thuộc tính của đối tượng mong đợi hay không.
 * `toHaveKey(key: string)`
   * Kiểm tra xem một đối tượng có chứa một key cụ thể hay không.

#### So sánh số học
 * `toBeGreaterThan(expected: number)`
   * Kiểm tra xem giá trị có lớn hơn số mong đợi hay không.
 * `toBeLessThan(expected: number)`
   * Kiểm tra xem giá trị có nhỏ hơn số mong đợi hay không.
 * `toBeCloseTo(expected: number, precision = 2)`
   * Kiểm tra xem hai số có gần nhau trong một độ chính xác nhất định hay không.
   * `precision` là tham số tùy chọn, mặc định là 2.

#### Kiểm tra kiểu dữ liệu
 * `toBeInstanceOf(expectedClass: any)`
   * Kiểm tra xem một đối tượng có phải là một instance của một lớp cụ thể hay không.

#### Kiểm tra lỗi
 * `toThrow(expectedMessage?: string)`
   * Kiểm tra xem một hàm có ném ra lỗi (throw an error) hay không khi được gọi.
   * Bạn có thể tùy chọn truyền vào một chuỗi để kiểm tra xem thông điệp lỗi có chứa chuỗi đó hay không.
 * `toThrowAsync(expectedMessage?: string)`
   * Tương tự như `toThrow`, nhưng được sử dụng cho các hàm bất đồng bộ (async function).

#### Mở rộng với Custom Matchers
Bạn có thể dễ dàng mở rộng lớp `Assertion` bằng cách thêm các matchers tùy chỉnh của riêng mình.
 * `addMatcher(name: string, fn: MatcherFunction)`
   * `name`: Tên của matcher tùy chỉnh.
   * `fn`: Hàm thực thi logic của matcher, nhận vào các tham số tương tự như các matchers có sẵn.

Ví dụ:
```javascript
// Thêm một matcher tùy chỉnh
Assertion.addMatcher('toBeEven', function(this: Assertion) {
  if (this.value % 2 !== 0) {
    throw new Error(`Expected ${this.value} to be an even number`);
  }
});

// Sử dụng matcher tùy chỉnh
expect(2).toBeEven();
expect(3).toBeEven(); // Sẽ ném ra lỗi

```