import React from "react";

function NavBarMenu() {
  const listNavMenuItem = [
    "Tài khoản của tôi",
    "Trạng thái đơn hàng",
    "Danh sách ưa thích",
    "Giỏ hàng",
    "Đăng nhập",
    "Đăng ký",
  ];
  const navMenuItem = listNavMenuItem.map((e, i) => {
    if (i === listNavMenuItem.length - 1)
      return <li key={i}>{listNavMenuItem[i]}</li>;
    else
      return (
        <li key={i}>
          {listNavMenuItem[i]}
          <span>{"-"}</span>
        </li>
      );
  });
  return (
    <div className="nav-bar__menu">
      <ul>{navMenuItem}</ul>
    </div>
  );
}

export default NavBarMenu;
