const params = new URLSearchParams(window.location.search);

if (params.get("success") === "1") {
    showToast("📩 Message Sent Successfully!");

    // Remove ?success=1 from the URL
    window.history.replaceState({}, document.title, window.location.pathname);
}