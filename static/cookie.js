function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie =
    encodeURI(name) + "=" + encodeURI(value) + expires + "; path=/";
}

function readCookie(name) {
  if (
    document.cookie.split(";").some((item) => item.trim().startsWith(`${name}=`))
  ) {
    return true;
  }

  return null;
}

function cookieConsent() {
  if (!readCookie("cookieConsent")) {
    document.getElementById("cookie-banner").style.display = "flex";
  } else {
    document.getElementById("cookie-banner").style.display = "none";
  }
}

function closeCookieConsent(value) {
  createCookie("cookieConsent", value, 365);
  document.getElementById("cookie-banner").style.display = "none";
}

window.onload = function () {
  cookieConsent();
};
