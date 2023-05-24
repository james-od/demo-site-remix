// import { marked } from "marked";
// import { useEffect, useRef } from "react";
// import hljs from "highlight.js";

// // THIS IS VERY IMPORTANT.
// // In Next.js, put this in your _app.js file
// import "highlight.js/styles/github.css";

// const markdown = `
//   \`\`\`typescript
//     const variable = 'hello';

//     function getProfile(id: string): {
//       name: string; address: string, photo: string
//     } {
//       return {
//         name: 'ben', address: "ben's house", photo: "/ben.png"
//       };
//     }
//   \`\`\`
// `;

// export default function Blog() {
//   useEffect(() => {
//     const blocks = document.querySelectorAll('pre code');
//     hljs.highlightAll();
//   });

//   return (
//     <div className="App">
//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"/>
//       {/* Example with raw JS */}
//       <pre>
//         <code className="hljs language-js">
//           <span className="hljs-built_in">console</span>.log(
//           <span className="hljs-number">1</span>)
//         </code>
//       </pre>      
//       <pre>
//         <code className="language-typescript">const variable = 'raw';</code>
//       </pre>

//       {/* Example with marked */}
//       <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
//     </div>
//   );
// }

import React from "react";
import ReactDOM from "react-dom";
import { marked } from "marked";
import hljs from "highlight.js";

const MARKDOWN_TEXT = `React + marked + highlight.js

**Code Sample:**
\`\`\`javascript
import marked from "marked";

marked.setOptions({
  langPrefix: "hljs language-",
  highlight: function(code) {
    return require("highlight.js").highlightAuto(code, ["html", "javascript"])
      .value;
  }
});
\`\`\`
`;


export default function Blog(){
  marked.setOptions({
    langPrefix: "hljs language-",
    highlight: function(code) {
      return hljs.highlightAuto(code, ["html", "javascript"]).value;
    }
  });
  
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"/>
      <div dangerouslySetInnerHTML={{ __html: marked(MARKDOWN_TEXT) }} />;
    </div>
  );  
}
