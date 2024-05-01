
/* 

<easy-row> custom Web Component element, no shadow DOM,  
       by N.E. Frick, 2024

use in HTML document as: <easy-row ratio="1-2" base="16">
 ratio =  1-1 or 1-2 or 2-1 or 1-3 or 1-1-1
 base =  0 or 16 or 32

 simply include: 
 <script src="/js/easy_row.js" type="module"></script>

 */

export class EasyRow extends HTMLElement {
    static get observedAttributes() {
        return ['ratio','base']; 
    }  

    constructor() {
        super();
        this.ratio0 = '1-1';  // work variables
        this.base0 = '0';
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'ratio') {
        var clsName = newValue.trim();
        if (clsName) {
          if (clsName.lastIndexOf('-') == (clsName.length-1)) { // remove any trailing '-'
            clsName = clsName.slice(0,(clsName.length-1));
          }
          this.ratio0 = clsName;
        }
        else
        { this.ratio0 = '1-1';
        }
        this.className = `easy${this.base0}-row-${this.ratio0}`;
      }
      else if (name === 'base') {
       // const clsName = this.getAttribute('base');
        const clsName = newValue;
        if (clsName) {
          
          switch (`${clsName.trim()}`) {
            case '16':
            case '32':this.base0 = clsName; break;
            default: this.base0 = '0';
          }
        }
        else
        { this.base0 = '0';
        }
        this.className = `easy${this.base0}-row-${this.ratio0}`;
        
      }
    }
}

customElements.define('easy-row', EasyRow);

