
document.getElementById("infoForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const gmail = document.getElementById("gmail").value;
  const password = document.getElementById("password").value;

  document.getElementById("result").innerHTML = `
    <h3>Thông tin đã nhập:</h3>
    <p><strong>Họ tên:</strong> ${name}</p>
    <p><strong>Số điện thoại:</strong> ${phone}</p>
    <p><strong>Gmail:</strong> ${gmail}</p>
    <p><strong>Mật khẩu:</strong> ${'*'.repeat(password.length)}</p>
  `;
});
