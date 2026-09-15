import { useEffect } from "react";

function PageTransition({ children }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="animate-page-enter">
      {children}
    </div>
  );
}

export default PageTransition;