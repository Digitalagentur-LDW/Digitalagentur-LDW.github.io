(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();var c=function(){const t=document.body.querySelector("#mainNav");t&&(window.scrollY===0?t.classList.remove("navbar-shrink"):t.classList.add("navbar-shrink"))};c();document.addEventListener("scroll",c);const a=document.body.querySelector("#mainNav");a&&new bootstrap.ScrollSpy(document.body,{target:"#mainNav",rootMargin:"0px 0px -40%"});const s=document.body.querySelector(".navbar-toggler"),d=[].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));d.map(function(t){t.addEventListener("click",()=>{window.getComputedStyle(s).display!=="none"&&s.click()})});new SimpleLightbox({elements:"#portfolio a.portfolio-box"});
