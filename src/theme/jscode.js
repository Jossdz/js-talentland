// @flow
// Original: https://github.com/sdras/night-owl-vscode-theme
// Converted automatically using ./tools/themeFromVsCode

/*:: import type { PrismTheme } from '../src/types' */

var theme /*: PrismTheme */ = {
  plain: {
    color: "#323330",
    backgroundColor: "#F8DA59"
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
        fontStyle: "italic"
      }
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "#563837",
        fontStyle: "italic"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(255, 246, 212)",
        fontStyle: "italic"
      }
    },
    {
      types: ["string", "url"],
      style: {
        color: "#787063"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "#5FCBDF"
      }
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)"
      }
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "#FA7456"
      }
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ["punctuation"],
      style: {
        color: "#E09E5D",
      }
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "#7C8299"
      }
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "#BB3943"
      }
    },
    {
      types: ["boolean"],
      style: {
        color: "#CE786A"
      }
    },
    {
      types: ["property"],
      style: {
        color: "rgb(128, 203, 196)"
      }
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)"
      }
    }
  ]
};

module.exports = theme;
