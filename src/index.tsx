import React from "react";
import ReactDOM from "react-dom/client";
// 👇 Change the path value here to see the rendering
// import App from './_0_components/App';
// import App from './_1_hofarray_css/App';
// import App from './_2_statehook/App';
// import App from './_3_todolistapp/App';
// import App from './_4_effecthook_fetchapi/App';
// import App from "./_5_router/App";
// import App from "./_6_contexthook/App";
// import App from "./_7_queryhook/App";
// import App from "./_8_formhook/App";
// import App from "./_9_customhook/App";
// import App from "./_10_reduxtoolkit/App";
// import App from "./_11_e2ecrudapp/App";
import App from "./_12_tlwdcss_basics/App";
// import App from "./_13_tlwdcss_ldgpage/App";

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
