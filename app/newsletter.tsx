"use client";

import { useEffect } from "react";

export default function Newsletter() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://an.gr-wcon.com/script/1255ad3d-46d3-4d82-8d63-34387f4a8b30/ga.js";
    script.async = true;
    script.crossOrigin = "use-credentials";
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <getresponse-form
        form-id="dd268582-eedb-4b37-affb-517230ecf0d4"
        e="0"
      ></getresponse-form>
    </div>
  );
}
