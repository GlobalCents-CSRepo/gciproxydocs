"use strict";(self.webpackChunkgciproxy=self.webpackChunkgciproxy||[]).push([[9262],{3849:(e,s,i)=>{i.r(s),i.d(s,{Highlight:()=>u,assets:()=>r,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=i(4848),t=i(8453);const a={sidebar_position:4},o="Markdown Features",c={id:"tutorial-basics/markdown-features",title:"Markdown Features",description:"Docusaurus supports Markdown and a few additional features.",source:"@site/docs/tutorial-basics/markdown-features.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/markdown-features",permalink:"/gciproxydocs/docs/tutorial-basics/markdown-features",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/markdown-features.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create a Blog Post",permalink:"/gciproxydocs/docs/tutorial-basics/create-a-blog-post"},next:{title:"Deploy your site",permalink:"/gciproxydocs/docs/tutorial-basics/deploy-your-site"}},r={},u=({children:e,color:s})=>{const i={span:"span",...(0,t.R)()};return(0,n.jsx)(i.span,{style:{backgroundColor:s,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${s} with label ${e}`)},children:e})},l=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"markdown-features",children:"Markdown Features"})}),"\n",(0,n.jsxs)(s.p,{children:["Docusaurus supports ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"https://daringfireball.net/projects/markdown/syntax",children:"Markdown"})})," and a few ",(0,n.jsx)(s.strong,{children:"additional features"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"front-matter",children:"Front Matter"}),"\n",(0,n.jsxs)(s.p,{children:["Markdown documents have metadata at the top called ",(0,n.jsx)(s.a,{href:"https://jekyllrb.com/docs/front-matter/",children:"Front Matter"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-text",metastring:'title="my-doc.md"',children:"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n"})}),"\n",(0,n.jsx)(s.h2,{id:"links",children:"Links"}),"\n",(0,n.jsx)(s.p,{children:"Regular Markdown links are supported, using url paths or relative file paths."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-md",children:"Let's see how to [Create a page](/create-a-page).\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-md",children:"Let's see how to [Create a page](./create-a-page.md).\n"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Result:"})," Let's see how to ",(0,n.jsx)(s.a,{href:"/gciproxydocs/docs/tutorial-basics/create-a-page",children:"Create a page"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"images",children:"Images"}),"\n",(0,n.jsx)(s.p,{children:"Regular Markdown images are supported."}),"\n",(0,n.jsxs)(s.p,{children:["You can use absolute paths to reference images in the static directory (",(0,n.jsx)(s.code,{children:"static/img/docusaurus.png"}),"):"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-md",children:"![Docusaurus logo](/img/docusaurus.png)\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Docusaurus logo",src:i(1379).A+"",width:"65",height:"59"})}),"\n",(0,n.jsx)(s.p,{children:"You can reference images relative to the current file as well. This is particularly useful to colocate images close to the Markdown files using them:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-md",children:"![Docusaurus logo](./img/docusaurus.png)\n"})}),"\n",(0,n.jsx)(s.h2,{id:"code-blocks",children:"Code Blocks"}),"\n",(0,n.jsx)(s.p,{children:"Markdown code blocks are supported with Syntax highlighting."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-md",children:'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n```\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',children:"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"admonitions",children:"Admonitions"}),"\n",(0,n.jsx)(s.p,{children:"Docusaurus has a special syntax to create admonitions and callouts:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-md",children:":::tip[My tip]\n\nUse this awesome feature option\n\n:::\n\n:::danger[Take care]\n\nThis action is dangerous\n\n:::\n"})}),"\n",(0,n.jsx)(s.admonition,{title:"My tip",type:"tip",children:(0,n.jsx)(s.p,{children:"Use this awesome feature option"})}),"\n",(0,n.jsx)(s.admonition,{title:"Take care",type:"danger",children:(0,n.jsx)(s.p,{children:"This action is dangerous"})}),"\n",(0,n.jsx)(s.h2,{id:"mdx-and-react-components",children:"MDX and React Components"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://mdxjs.com/",children:"MDX"})," can make your documentation more ",(0,n.jsx)(s.strong,{children:"interactive"})," and allows using any ",(0,n.jsx)(s.strong,{children:"React components inside Markdown"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n"})}),"\n","\n",(0,n.jsxs)(s.p,{children:["This is ",(0,n.jsx)(u,{color:"#25c2a0",children:"Docusaurus green"})," !"]}),"\n",(0,n.jsxs)(s.p,{children:["This is ",(0,n.jsx)(u,{color:"#1877F2",children:"Facebook blue"})," !"]})]})}function g(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1379:(e,s,i)=>{i.d(s,{A:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iTGF5ZXJfMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCA2NC42OTk5OTUgNTguODA2MDUiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImxvZ28uc3ZnIgogICB3aWR0aD0iNjQuNjk5OTk3IgogICBoZWlnaHQ9IjU4LjgwNjA1MyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4xIChjNjhlMjJjMzg3LCAyMDIxLTA1LTIzKSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcwogICBpZD0iZGVmczM5IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgaWQ9Im5hbWVkdmlldzM3IgogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgZml0LW1hcmdpbi10b3A9IjAiCiAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgIGlua3NjYXBlOnpvb209IjIuNDE0MzcwOCIKICAgaW5rc2NhcGU6Y3g9IjYwLjg4NTQyOSIKICAgaW5rc2NhcGU6Y3k9IjI5LjQwNzI0OCIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE2IgogICBpbmtzY2FwZTp3aW5kb3cteD0iMTkxMiIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiAvPgo8c3R5bGUKICAgdHlwZT0idGV4dC9jc3MiCiAgIGlkPSJzdHlsZTIiPgoJLnN0MHtmaWxsOiNFODY2MzA7fQoJLnN0MXtmaWxsOiM4ODg0ODM7fQo8L3N0eWxlPgo8ZwogICBpZD0iTGF5ZXJfMl8wMDAwMDAxMTc1MTU3MDM2MTk3MDM5ODAzMDAwMDAwMTA4NTgxNzQ3ODQ2MDExNzQzMF8iCiAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjksLTMuMTkzOTQ1NCkiPgoJPGcKICAgaWQ9IkxheWVyXzQiPgoJCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Im0gNDEuMywzMSB2IDMuMiBoIDI0IGMgLTAuMiw3LjIgLTEuMiwxNSAtNS45LDE5LjEgLTQuOCw0LjUgLTE0LDUuMyAtMjMuMSw1LjQgQyAyNy4yLDU4LjggMTcuOSw1Ny44IDEzLjEsNTMuMyA4LjMsNDguOCA3LjMsNDAuOSA3LjIsMzIuNyA3LDI0LjQgOCwxNi4yIDEzLjEsMTEuOSBjIDUuMSwtNC4zIDE0LC01LjMgMjMuMSwtNS40IDkuMSwtMC4xIDE4LjQsMC45IDIzLjIsNS40IDIuNywyLjMgNC4zLDUuOCA1LjIsMTEuMSBIIDU5LjkgQyA1OS40LDE5LjkgNTcuOCwxNy4xIDU1LjYsMTUgNTEuMywxMC45IDQzLjgsMTAuMyAzNi4zLDEwLjIgMjguOCwxMC4xIDIxLjMsMTEgMTcuMSwxNSBjIC00LjIsNCAtNS4zLDEwLjggLTUuNCwxNy43IC0wLjEsNi45IDAuOSwxMy43IDUuNCwxNy42IDQuNSwzLjkgMTEuNyw0LjYgMTkuMiw0LjggNy41LDAuMiAxNSwtMC44IDE5LjIsLTQuOCAyLjYsLTIuNSA0LjMsLTUuOCA0LjcsLTkuNCBMIDYwLjYsMzkgaCAtMTEgbCAtMC40LDEuMSBjIC0wLjQsMSAtMSwyIC0xLjgsMi43IC0yLjIsMi4xIC02LjksMi41IC0xMS4xLDIuNiAtNC4yLDAuMSAtOC45LC0wLjQgLTExLjIsLTIuNiAtMi4zLC0yLjIgLTIuNiwtNi4yIC0yLjcsLTEwLjEgLTAuMSwtMy45IDAuNSwtOC4xIDIuOCwtMTAuMiAyLjMsLTIuMSA2LjcsLTIuNSAxMSwtMi41IDQuMiwtMC4xIDguOSwwLjQgMTEuMiwyLjYgMSwwLjkgMS43LDIuMSAyLDMuNCBsIDAuMSwwLjQgaCAzLjMgbCAtMC4yLC0wLjYgYyAtMC40LC0yLjEgLTEuNSwtNCAtMywtNS41IC0zLC0yLjkgLTguMywtMy40IC0xMy40LC0zLjUgLTUuMSwtMC4xIC0xMC4zLDAuNiAtMTMuMywzLjQgLTMsMi44IC0zLjcsNy43IC0zLjgsMTIuNSAtMC4xLDQuOCAwLjYsOS43IDMuOCwxMi40IDMuMiwyLjcgOC4zLDMuNCAxMy40LDMuNSA1LjEsMC4xIDEwLjMsLTAuNiAxMy4zLC0zLjQgMC45LC0wLjggMS42LC0xLjggMi4xLC0yLjkgaCA0LjggYyAtMC41LDIuMiAtMS42LDQuMSAtMy4yLDUuNyAtMy41LDMuMyAtMTAuNiwzLjggLTE3LDMuOSAtNi40LDAuMSAtMTMuNiwtMC42IC0xNy4xLC00IC0zLjYsLTMuMyAtNC4xLC05LjIgLTQuMywtMTUuMiAtMC4xLC02IDAuNywtMTIuMSA0LjMsLTE1LjMgMy42LC0zLjIgMTAuNiwtMy44IDE3LjEsLTMuOSA2LjQsLTAuMSAxMy42LDAuNiAxNy4xLDQgMi4xLDIgMy4zLDQuNyAzLjYsNy41IGwgMC4yLDEuMyBoIDExIEwgNjgsMjQuNSBDIDY3LjIsMTcuNCA2NS4xLDEyLjcgNjEuNiw5LjUgNTYsNC4zIDQ2LjEsMy40IDM2LjIsMy4yIDI2LjMsMy4xIDE2LjUsNC4yIDEwLjksOS40IDUsMTQuNiA0LjEsMjMuNiAzLjksMzIuNiBjIDAuMiw5IDEuMSwxOCA3LDIzLjEgNS45LDUuMSAxNS41LDYuMyAyNS40LDYuMyA5LjksMCAxOS43LC0xIDI1LjMsLTYuMiA1LjksLTUuMSA2LjgsLTE0LjEgNywtMjMuMSBWIDMxIFoiCiAgIGlkPSJwYXRoNCIgLz4KCTwvZz4KPC9nPgoKPC9zdmc+Cg=="},8453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>c});var n=i(6540);const t={},a=n.createContext(t);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);