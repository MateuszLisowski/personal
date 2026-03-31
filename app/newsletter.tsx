"use client";

import { useEffect } from "react";

export default function Newsletter() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://app.getresponse.com/view_webform.js?wid=dd268582-eedb-4b37-affb-517230ecf0d4";
    script.async = true;
    document.getElementById("gr-form-container")?.appendChild(script);
    return () => {
      document.getElementById("gr-form-container")?.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://app.getresponse.com/view_webform.html?wid=dd268582-eedb-4b37-affb-517230ecf0d4"
      width="100%"
      height="600"
      style={{ border: "none" }}
    ></iframe>
  );
}
