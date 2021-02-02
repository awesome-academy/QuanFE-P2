import React from "react";
import { HEADER_NAV_ITEM } from "constants/header";

function NavBarMenu() {
  const listNavMenuItem = [
    "Tài khoản của tôi",
    "Trạng thái đơn hàng",
    "Danh sách ưa thích",
    "Giỏ hàng",
    "Đăng nhập",
    "Đăng ký",
  ];

  const navMenuItem = HEADER_NAV_ITEM.map((e, i) => {
    if (i === listNavMenuItem.length - 1)
      return (
        <li key={i}>
          <a href={e.href}>{e.text}</a>
        </li>
      );
    else
      return (
        <li key={i}>
          <a href={e.href}>{e.text}</a>
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
