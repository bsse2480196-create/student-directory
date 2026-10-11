# Student Directory

A StudentPortal directory page built with **React** (components and props) and **Bootstrap 5**
(Navbar, Breadcrumb, Cards, Buttons, Pagination, Alert, Grid).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3001 and go to the home page (the directory is the main view).

## Components

| Component | Props | Bootstrap parts |
|---|---|---|
| `AppNavbar` | `brand`, `links` | Navbar, dropdown, form |
| `PageBreadcrumb` | `items` | Breadcrumb |
| `StudentList` | `students`, `onView`, `onDelete` | Grid (`row` / `col-*`) |
| `StudentCard` | `student`, `onView`, `onDelete` | Card, Buttons |
| `PaginationBar` | `currentPage`, `totalPages`, `onPageChange` | Pagination |
| `AlertMessage` | `type`, `message`, `onClose` | Alert (dismissible) |
| `Footer` | `links`, `contact` | Grid |
