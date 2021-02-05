import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "./TopBar.scss";

function TopBar() {
  return (
    <div className="top-bar">
      <div>
        <i class="fa fa-th" aria-hidden="true"></i>
        <i class="fa fa-th-list" aria-hidden="true"></i>
      </div>
      <Pagination size="sm">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    </div>
  );
}

export default TopBar;
