
// this Vue version is likely not needed, since the native Web Component version does work.
// To use the native version in easy_row.js, include  
//   Vue.config.ignoredElements = ['easy-row']; for Vue 2



   Vue.component("vue-easy-row", {
        props: { ratio:{type:String,default:'1-1'},base:{type:String,default:'0'}
        }     
        ,computed: {
          baseComp: function() { var rs = '0';
          var chkString = this.base.trim();
            switch (chkString) {
              case '16':
              case '32':rs = chkString; break;
              default: rs = '0';
            }     
            return rs;     
          }
          ,ratioComp: function() { var rs = '1-1';
           var chkString = this.ratio.trim();
           if (chkString.lastIndexOf('-') == (chkString.length-1)) { // remove any trailing '-'
            chkString = chkString.slice(0,(chkString.length-1));
           }
           switch (chkString) {
              case '':
              case '1':rs = '1'; break;
              default: rs = chkString;
            }     
            return rs;     

          }
          ,easyClassComp: function() {
            return `easy${this.baseComp}-row-${this.ratioComp}`;
          }
        }
        ,template: '<div :class="easyClassComp"><slot></slot></div>'
      })
  
