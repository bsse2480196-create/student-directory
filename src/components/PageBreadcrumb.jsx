function PageBreadcrumb({ items }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb bg-dark rounded px-4 py-3 mb-4 page-breadcrumb">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={item}
              className={`breadcrumb-item ${isLast ? "active fw-bold" : ""}`}
              aria-current={isLast ? "page" : undefined}
            >
              {isLast ? item : <a href="#!">{item}</a>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default PageBreadcrumb;
