(function to_fullscreen_embedded() {
  let url = new URL(location.href);
  const is_pbi_report = url.pathname.includes("/powerbi/");
  const is_fullscreen =
    url.searchParams.get("rs:embed") &&
    url.searchParams.get("rs:embed").toLowerCase() == "True".toLowerCase();
  if (!is_pbi_report || is_fullscreen) return;
  url.searchParams.set("rs:embed", "True");
  location.href = url;
})();
