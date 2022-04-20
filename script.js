let ind1, ind2, ind3;
let rdc = 255;
let grc = 255;
let blc = 255;

const getKom = () => {
  rz.style.background = 'RGB('+rdc+', '+grc+', '+blc+')';
};

const getRd = () => {
  ind1 = document.cvet.sfrd.selectedIndex;
  rdc = document.cvet.sfrd.options.value;
  rd.style.background = 'RGB('+rdc+', '+0+', '+0+')';
  getKom();
};

const getGr = () => {
  ind2 = document.cvet.sfgr.selectedIndex;
  grc = document.cvet.sfgr.options.value;
  gr.style.background = 'RGB('+0+', '+grc+', '+0+')';
  getKom();
};

const getBl = () => {
  ind3 = document.cvet.sfbl.selectedIndex;
  blc = document.cvet.sfbl.options.value;
  bl.style.background = 'RGB('+0+', '+0+', '+blc+')';
};
