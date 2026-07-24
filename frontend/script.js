

(() => {
  "use strict";

  // ---------- DOM refs ----------
  const longUrlInput  = document.getElementById("long-url");
  const shortUrlInput = document.getElementById("short-url");
  const shortenBtn    = document.getElementById("shorten-btn");
  const copyBtn       = document.getElementById("copy-btn");
  const statusEl      = document.getElementById("status");

  // ---------- Config (wire up later) ----------
  const API_BASE = "https://url-shortener-api-9b84.onrender.com"; // Change this to your Express server's URL
  const SHORTEN_ENDPOINT = "/api/shorten";

  // ---------- Helpers ----------
  function setStatus(message, variant = "") {
    statusEl.textContent = message;
    statusEl.classList.remove("is-success", "is-error", "is-info");
    if (variant) statusEl.classList.add(`is-${variant}`);
  }

  function isValidUrl(value) {
    try {
      const u = new URL(value);
      return u.protocol === "http:" || u.protocol === "https:";
    } catch {
      return false;
    }
  }

  function setLoading(loading) {
    shortenBtn.classList.toggle("is-loading", loading);
    shortenBtn.disabled = loading;
  }

  function spawnRipple(event, el) {
    const rect  = el.getBoundingClientRect();
    const size  = Math.max(rect.width, rect.height);
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width  = ripple.style.height = `${size}px`;
    ripple.style.left = `${(event.clientX ?? rect.left + rect.width / 2) - rect.left - size / 2}px`;
    ripple.style.top  = `${(event.clientY ?? rect.top  + rect.height / 2) - rect.top  - size / 2}px`;
    el.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }

  // ---------- Backend hook (placeholder) ----------
  // Replace this with a real fetch call to your Express API.
async function shortenUrl(longUrl) {

    const response = await fetch(`${API_BASE}${SHORTEN_ENDPOINT}`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            url: longUrl
        })

    });

    if (!response.ok) {
        throw new Error("Failed to shorten URL");
    }

    const data = await response.json();

    return data.shortUrl;
}

  // ---------- Handlers ----------
  async function handleShorten() {
    const value = longUrlInput.value.trim();

    if (!value) {
      setStatus("Please paste a URL to shorten.", "error");
      longUrlInput.focus();
      return;
    }
    if (!isValidUrl(value)) {
      setStatus("That doesn't look like a valid URL.", "error");
      longUrlInput.focus();
      return;
    }

    setLoading(true);
    setStatus("Shortening your URL…", "info");

    try {
      const shortUrl = await shortenUrl(value);
      shortUrlInput.value = shortUrl;
      shortUrlInput.classList.add("has-value");
      setStatus("Success! Your short URL is ready.", "success");
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy(event) {
    const value = shortUrlInput.value.trim();
    if (!value) {
      setStatus("Nothing to copy yet — shorten a URL first.", "info");
      return;
    }

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        // Fallback
        shortUrlInput.select();
        document.execCommand("copy");
        window.getSelection()?.removeAllRanges();
      }

      spawnRipple(event, copyBtn);
      const label = copyBtn.querySelector(".copy-label");
      const original = label ? label.textContent : "Copy";
      copyBtn.classList.add("is-copied");
      if (label) label.textContent = "Copied!";

      setStatus("Copied to clipboard.", "success");

      setTimeout(() => {
        copyBtn.classList.remove("is-copied");
        if (label) label.textContent = original;
      }, 1500);
    } catch (err) {
      console.error(err);
      setStatus("Couldn't copy — try selecting manually.", "error");
    }
  }

  // ---------- Wiring ----------
  shortenBtn.addEventListener("click", handleShorten);
  copyBtn.addEventListener("click", handleCopy);

  // Enter key submits from the long URL input
  longUrlInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleShorten();
    }
  });

  // Reset the status when the user edits the long URL again
  longUrlInput.addEventListener("input", () => {
    if (statusEl.classList.contains("is-error")) {
      setStatus("Ready to shorten your first URL.");
    }
  });
})();
