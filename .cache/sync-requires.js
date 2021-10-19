
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": preferDefault(require("/Users/jackkrone/dev/jackkrone.com/src/pages/404.tsx")),
  "component---src-pages-aboutme-tsx": preferDefault(require("/Users/jackkrone/dev/jackkrone.com/src/pages/aboutme.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/jackkrone/dev/jackkrone.com/src/pages/index.tsx")),
  "component---src-pages-projects-tsx": preferDefault(require("/Users/jackkrone/dev/jackkrone.com/src/pages/projects.tsx")),
  "component---src-pages-thoughts-tsx": preferDefault(require("/Users/jackkrone/dev/jackkrone.com/src/pages/thoughts.tsx"))
}

