// file path = https://riadadel.github.io/pbi-fullscreen/index.js
(function to_fullscreen_embedded() {
  let url = new URL(location.href);
  const is_pbi_report = url.pathname.includes("/powerbi/");
  const is_fullscreen =
    url.searchParams.get("rs:Command") &&
    url.searchParams.get("rc:Toolbar") &&
    url.searchParams.get("rc:Toolbar").toLowerCase() == "false".toLowerCase();
  if (!is_pbi_report || is_fullscreen) return;
  url.searchParams.set("rs:Command", "Render");
  url.searchParams.set("rc:Toolbar", "false");
  url.searchParams.delete("rs:embed");
  location.href = url;
})();
