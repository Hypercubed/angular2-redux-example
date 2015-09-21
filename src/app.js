import {View, Component, FORM_DIRECTIVES} from 'angular2/angular2';
import appTemplate from './app.html!text';
import './app.css!';

@Component({ selector: 'my-app' })
@View({
  template: appTemplate,
  directives: [FORM_DIRECTIVES]
})
export class AppComponent {
  constructor(){
    this.title = transformService('Shorten your too large tweets', 0);
    this.max = 140;
    this.input = 'Imagine you want to write a tweet.  Unfortunately, one hundred and forty characters is too little.  Here is one very stupid way to shorten your tweets. High five #angular2';
    this.output = transformService(this.input, this.max);
  }

  update() {
    this.output = transformService(this.input, this.max);
  }
}

var replaceText = [
  [/\s\s+/g, ' '],

  [/\.\.\./gi,'…'],
  [/\. /gi, '．'],
  [/\, /gi, '，'],
  [/\.$/g, ''],

  [/one hundred/gi, '100'],

  [/ninety/gi, '90'],
  [/eighty/gi, '80'],
  [/seventy/gi, '70'],
  [/sixty/gi, '60'],
  [/fifty/gi, '50'],
  [/forty/gi, '40'],
  [/thirty/gi, '30'],
  [/twenty/gi, '20'],
  [/nineteen/gi, '19'],
  [/eighteen/gi, '18'],
  [/seventeen/gi, '17'],
  [/sixteen/gi, '16'],
  [/fifteen/gi, '15'],
  [/fourteen/gi, '14'],
  [/thirteen/gi, '13'],
  [/twelve/gi, '12'],
  [/eleven/gi, '11'],
  [/\bten\b/gi, '10'],
  [/nine/gi, '9'],
  [/eight/gi, '8'],
  [/seven/gi, '7'],
  [/six/gi, '6'],
  [/five/gi, '5'],
  [/four/gi, '4'],
  [/three/gi, '3'],
  [/\btwo\b/gi, '2'],
  [/one/gi, '1'],
  [/zero/gi, '0'],

  [/first/gi, '1st'],
  [/second/gi, '2nd'],
  [/third/gi, '3rd'],
  [/fourth/gi, '4th'],
  [/fifth/gi, '5th'],
  [/sixth/gi, '6th'],
  [/seventh/gi, '7th'],
  [/eighth/gi, '8th'],
  [/nineth/gi, '9th'],
  [/tenth/gi, '10th'],

  [/large/gi, 'big'],

  [/\bthrough\b/gi, 'with'],
  [/\bcompany\b/gi, 'set'],
  [/\bthink\b/gi, 'deem'],
  [/\bdevelopment\b/gi, 'end'],
  [/\bdevelopment\b/gi, 'act'],
  [/\bcompany\b/gi, 'club'],
  [/\bstill\b/gi, 'fan'],
  [/\bstill\b/gi, 'and'],
  [/\bstill\b/gi, 'but'],
  [/\bstill\b/gi, 'now'],
  [/\bexperience\b/gi, 'lore'],
  [/\bbetween\b/gi, 'among'],
  [/\bfamily\b/gi, 'kind'],
  [/\bgive\b/gi, 'get'],
  [/\beffect\b/gi, 'do'],
  [/\bminute\b/gi, 'big'],
  [/\bsmall\b/gi, 'big'],
  [/\bhistory\b/gi, 'fact'],
  [/\bhistory\b/gi, 'myth'],
  [/\bhistory\b/gi, 'roll'],
  [/\bhistory\b/gi, 'tale'],
  [/\breceive\b/gi, 'win'],
  [/\breceive\b/gi, 'get'],
  [/\bbehavior\b/gi, 'way'],
  [/\bknowledge\b/gi, 'own'],
  [/\bknowledge\b/gi, 'art'],
  [/\beffect\b/gi, 'end'],
  [/\beffect\b/gi, 'end'],
  [/\beffect\b/gi, 'mar'],
  [/\beffect\b/gi, 'tip'],
  [/\bmovement\b/gi, 'act'],
  [/\bpossibility\b/gi, 'law'],
  [/\bpossibility\b/gi, 'end'],
  //[/\bwhite\b/gi, 'dim'],
  [/\bminute\b/gi, 'nice'],
  [/\bunderstanding\b/gi, 'depth'],
  [/\breport\b/gi, 'say'],
  [/\brealize\b/gi, 'mar'],
  [/\bconference\b/gi, 'host'],
  [/\bconference\b/gi, 'chat'],
  [/\bmean\b/gi, 'low'],
  [/\bmean\b/gi, 'big'],
  [/\breceive\b/gi, 'deal'],
  [/\bauthority\b/gi, 'case'],
  [/\btalk\b/gi, 'say'],
  [/\bmovement\b/gi, 'rest'],
  [/\bintelligence\b/gi, 'form'],
  [/\bintelligence\b/gi, 'lore'],
  [/\bintelligence\b/gi, 'soul'],
  [/\brecent\b/gi, 'new'],
  [/\brecent\b/gi, 'new'],
  [/\bsuccess\b/gi, 'ill'],
  [/\bexperience\b/gi, 'intimacy'],
  [/\bauthority\b/gi, 'leave'],
  [/\bconsequence\b/gi, 'tip'],
  [/\bconsequence\b/gi, 'end'],
  [/\bsmall\b/gi, 'nice'],
  [/\bappropriate\b/gi, 'deal'],
  [/\bappropriate\b/gi, 'take'],
  [/\bassociate\b/gi, 'foe'],
  [/\beffective\b/gi, 'idle'],
  [/\bmodel\b/gi, 'act'],
  [/\bdrive\b/gi, 'get'],
  [/\bpurpose\b/gi, 'law'],
  [/\bpurpose\b/gi, 'aim'],
  [/\bpurpose\b/gi, 'tip'],
  [/\bpurpose\b/gi, 'end'],
  [/\bproperty\b/gi, 'mark'],
  [/\bproperty\b/gi, 'gold'],
  [/\bappropriate\b/gi, 'steal'],
  [/\bpositive\b/gi, 'mild'],
  [/\bpositive\b/gi, 'true'],
  [/\bprotect\b/gi, 'cede'],
  [/\bprotect\b/gi, 'ruin'],
  [/\bprotect\b/gi, 'obey'],
  [/\bsimple\b/gi, 'sly'],
  [/\bsimple\b/gi, 'apt'],
  [/\bsuccess\b/gi, 'boon'],
  [/\binstruction\b/gi, 'study'],
  [/\binstruction\b/gi, 'leave'],
  [/\bevent\b/gi, 'end'],
  [/\bevent\b/gi, 'end'],
  [/\bsection\b/gi, 'atom'],
  [/\bcritical\b/gi, 'fine'],
  [/\bfeeling\b/gi, 'care'],
  [/\bconsequence\b/gi, 'proof'],
  [/\bcover\b/gi, 'own'],
  [/\bimprovement\b/gi, 'harm'],
  [/\bimprovement\b/gi, 'good'],
  [/\bimprovement\b/gi, 'stay'],
  [/\bimagine\b/gi, 'deem'],
  [/\blisten\b/gi, 'bawl'],
  [/\bfinish\b/gi, 'end'],
  [/\bfinish\b/gi, 'mar'],
  [/\bfinish\b/gi, 'tip'],
  [/\bperception\b/gi, 'lore'],
  [/\bdistance\b/gi, 'love'],
  [/\bsupposed\b/gi, 'TRUE'],
  [/\bstop\b/gi, 'end'],
  [/\bstop\b/gi, 'bar'],
  [/\bstop\b/gi, 'aid'],
  [/\bchoice\b/gi, 'pick'],
  [/\bchoice\b/gi, 'fate'],
  [/\baddress\b/gi, 'talk'],
  [/\bdocument\b/gi, 'roll'],
  [/\bcause\b/gi, 'do'],
  [/\bdescription\b/gi, 'tale'],
  [/\btransition\b/gi, 'act'],
  [/\breform\b/gi, 'mar'],
  [/\banalysis\b/gi, 'digest'],
  [/\bexplanation\b/gi, 'axiom'],
  [/\banimal\b/gi, 'base'],
  [/\bimplication\b/gi, 'hint'],
  [/\bable\b/gi, 'fit'],
  [/\bable\b/gi, 'apt'],
  [/\bable\b/gi, 'apt'],
  [/\bhuman\b/gi, 'kind'],
  [/\brecognition\b/gi, 'lore'],
  [/\bcommunicate\b/gi, 'say'],
  [/\bplan\b/gi, 'law'],
  [/\bplan\b/gi, 'aim'],
  [/\bcomplex\b/gi, 'dim'],
  [/\bdistance\b/gi, 'error'],
  [/\bfashion\b/gi, 'do'],
  [/\bclaim\b/gi, 'say'],
  [/\bclaim\b/gi, 'own'],
  [/\bclaim\b/gi, 'say'],
  [/\bcorporation\b/gi, 'club'],
  [/\bcelebrate\b/gi, 'obey'],
  [/\bpass\b/gi, 'cut'],
  [/\bcharge\b/gi, 'free'],
  [/\bcharge\b/gi, 'plea'],
  [/\bcharge\b/gi, 'cite'],
  [/\bcharge\b/gi, 'heed'],
  [/\bcharge\b/gi, 'race'],
  [/\bcharge\b/gi, 'pack'],
  [/\bcharge\b/gi, 'care'],
  [/\bcharge\b/gi, 'cost'],
  [/\bnative\b/gi, 'new'],
  [/\bexhibition\b/gi, 'army'],
  [/\baccident\b/gi, 'risk'],
  [/\bmodel\b/gi, 'copy'],
  [/\bmodel\b/gi, 'type'],
  [/\bmodel\b/gi, 'plan'],
  [/\bmind\b/gi, 'man'],
  [/\brange\b/gi, 'err'],
  [/\bignore\b/gi, 'cut'],
  [/\bignore\b/gi, 'own'],
  [/\bmoreover\b/gi, 'and'],
  [/\bdrive\b/gi, 'make'],
  [/\bdrive\b/gi, 'move'],
  [/\bdrive\b/gi, 'urge'],
  [/\bexcellent\b/gi, 'nice'],
  [/\bproperty\b/gi, 'nature'],
  [/\bancient\b/gi, 'new'],
  [/\bancient\b/gi, 'old'],
  [/\bancient\b/gi, 'new'],
  [/\beliminate\b/gi, 'steal'],
  [/\bresistance\b/gi, 'onset'],
  [/\bresistance\b/gi, 'guard'],
  [/\bresistance\b/gi, 'leave'],
  [/\bextend\b/gi, 'ebb'],
  [/\bpromise\b/gi, 'pact'],
  [/\btransformation\b/gi, 'fixity'],
  [/\bdevice\b/gi, 'art'],
  [/\bdevice\b/gi, 'aim'],
  [/\bfashion\b/gi, 'way'],
  [/\bfashion\b/gi, 'use'],
  [/\bordinary\b/gi, 'odd'],
  [/\bincredible\b/gi, 'apt'],
  [/\bfigure\b/gi, 'sign'],
  [/\bquestion\b/gi, 'head'],
  [/\bexplanation\b/gi, 'comment'],
  [/\bopen\b/gi, 'sly'],
  [/\bopen\b/gi, 'aid'],
  [/\battend\b/gi, 'heed'],
  [/\battend\b/gi, 'hark'],
  [/\battractive\b/gi, 'sour'],
  [/\battractive\b/gi, 'ugly'],
  [/\battractive\b/gi, 'kind'],
  [/\bdescription\b/gi, 'comment'],
  [/\bfeature\b/gi, 'mark'],
  [/\bfeature\b/gi, 'item'],
  [/\brequest\b/gi, 'beg'],
  [/\brequest\b/gi, 'ask'],
  [/\btransition\b/gi, 'fixity'],
  [/\badvocate\b/gi, 'aid'],
  [/\badvocate\b/gi, 'ask'],
  [/\badvocate\b/gi, 'own'],
  [/\bbenefit\b/gi, 'joy'],
  [/\bbenefit\b/gi, 'bar'],
  [/\bbenefit\b/gi, 'use'],
  [/\benhance\b/gi, 'ebb'],
  [/\bcrowd\b/gi, 'jam'],
  [/\bboundary\b/gi, 'rim'],
  [/\bboundary\b/gi, 'tip'],
  [/\bpunishment\b/gi, 'pity'],
  [/\bcall\b/gi, 'use'],
  [/\bprincipal\b/gi, 'foe'],
  [/\btransaction\b/gi, 'art'],
  [/\bordinary\b/gi, 'TRUE'],
  [/\bordinary\b/gi, 'rare'],
  [/\bordinary\b/gi, 'rare'],
  [/\bovercome\b/gi, 'fly'],
  [/\bappeal\b/gi, 'cut'],
  [/\badvance\b/gi, 'say'],
  [/\badvance\b/gi, 'mar'],
  [/\badvance\b/gi, 'aid'],
  [/\badvance\b/gi, 'aid'],
  [/\border\b/gi, 'set'],
  [/\border\b/gi, 'let'],
  [/\border\b/gi, 'law'],
  [/\bcapable\b/gi, 'fit'],
  [/\bcapable\b/gi, 'apt'],
  [/\bgather\b/gi, 'call'],
  [/\buseful\b/gi, 'bad'],
  [/\bquestion\b/gi, 'argue'],
  [/\btendency\b/gi, 'end'],
  [/\btendency\b/gi, 'aim'],
  [/\befficiency\b/gi, 'might'],
  [/\badolescent\b/gi, 'young'],
  [/\boccur\b/gi, 'fall'],
  [/\binterrupt\b/gi, 'bar'],
  [/\binterrupt\b/gi, 'aid'],
  [/\befficient\b/gi, 'idle'],
  [/\bsave\b/gi, 'and'],
  [/\btransaction\b/gi, 'rest'],
  [/\bbarrier\b/gi, 'bar'],
  [/\bpermit\b/gi, 'let'],
  [/\bpermit\b/gi, 'let'],
  [/\badvocate\b/gi, 'cede'],
  [/\bsurprise\b/gi, 'awe'],
  [/\bdisagree\b/gi, 'deny'],
  [/\baccountability\b/gi, 'right'],
  [/\bwarning\b/gi, 'type'],
  [/\btestify\b/gi, 'own'],
  [/\btransfer\b/gi, 'sell'],
  [/\bovercome\b/gi, 'whip'],
  [/\bportion\b/gi, 'atom'],
  [/\bfiction\b/gi, 'lie'],
  [/\bcompose\b/gi, 'do'],
  [/\bepisode\b/gi, 'end'],
  [/\bclaim\b/gi, 'cede'],
  [/\bprime\b/gi, 'new'],
  [/\benjoy\b/gi, 'like'],
  [/\benjoy\b/gi, 'hate'],
  [/\bnotion\b/gi, 'plan'],
  [/\bbesides\b/gi, 'and'],
  [/\bbesides\b/gi, 'now'],
  [/\bsalary\b/gi, 'fee'],
  [/\bshape\b/gi, 'do'],
  [/\bchief\b/gi, 'foe'],
  [/\bfunny\b/gi, 'odd'],
  [/\bcooperate\b/gi, 'aid'],
  [/\bhelpful\b/gi, 'bad'],
  [/\bfaculty\b/gi, 'might'],
  [/\bcongregation\b/gi, 'host'],
  [/\bchannel\b/gi, 'lane'],
  [/\babsolute\b/gi, 'holy'],
  [/\babsolute\b/gi, 'TRUE'],
  [/\bbarrier\b/gi, 'edge'],
  [/\bclear\b/gi, 'dim'],
  [/\bclear\b/gi, 'dim'],
  [/\bclear\b/gi, 'aid'],
  [/\bclassic\b/gi, 'TRUE'],
  [/\bdistant\b/gi, 'nigh'],
  [/\bdistant\b/gi, 'kind'],
  [/\badequate\b/gi, 'full'],
  [/\bconspiracy\b/gi, 'crew'],
  [/\bcheck\b/gi, 'bar'],
  [/\bcheck\b/gi, 'aid'],
  [/\bquestion\b/gi, 'belief'],
  [/\bequivalent\b/gi, 'akin'],
  [/\bequivalent\b/gi, 'like'],
  [/\bneighboring\b/gi, 'nigh'],
  [/\bcompose\b/gi, 'fan'],
  [/\bundertake\b/gi, 'cede'],
  [/\bguilty\b/gi, 'vile'],
  [/\bfiction\b/gi, 'fact'],
  [/\bunknown\b/gi, 'open'],
  [/\bunknown\b/gi, 'rare'],
  [/\bunknown\b/gi, 'dark'],
  [/\breliable\b/gi, 'sure'],
  [/\brender\b/gi, 'do'],
  [/\bconvert\b/gi, 'stay'],
  [/\breverse\b/gi, 'end'],
  [/\breverse\b/gi, 'ill'],
  [/\bviolate\b/gi, 'ruin'],
  [/\bviolate\b/gi, 'keep'],
  [/\bstick\b/gi, 'stay'],
  [/\bstick\b/gi, 'roll'],
  [/\berror\b/gi, 'lie'],
  [/\bestablished\b/gi, 'TRUE'],
  [/\bspot\b/gi, 'dye'],
  [/\bproject\b/gi, 'aim'],
  [/\bproject\b/gi, 'get'],
  [/\bportion\b/gi, 'waste'],
  [/\bsympathetic\b/gi, 'kind'],
  [/\bsympathetic\b/gi, 'sour'],
  [/\bfellow\b/gi, 'foe'],
  [/\bcurrency\b/gi, 'gold'],
  [/\bpeaceful\b/gi, 'cool'],
  [/\bpeaceful\b/gi, 'mild'],
  [/\bpension\b/gi, 'aid'],
  [/\bcrowd\b/gi, 'host'],
  [/\bproposition\b/gi, 'head'],
  [/\bguard\b/gi, 'obey'],
  [/\brejection\b/gi, 'bid'],
  [/\bpleasant\b/gi, 'sour'],
  [/\bpleasant\b/gi, 'snug'],
  [/\bpleasant\b/gi, 'hard'],
  [/\bpleasant\b/gi, 'sour'],
  [/\brational\b/gi, 'apt'],
  [/\bearn\b/gi, 'get'],
  [/\bearn\b/gi, 'win'],
  [/\billness\b/gi, 'vigor'],
  [/\bmanifestation\b/gi, 'note'],
  [/\blikewise\b/gi, 'too'],
  [/\babsolute\b/gi, 'brief'],
  [/\bappoint\b/gi, 'deny'],
  [/\bappoint\b/gi, 'deal'],
  [/\bproclaim\b/gi, 'say'],
  [/\bproclaim\b/gi, 'own'],
  [/\bproclaim\b/gi, 'own'],
  [/\bsurrender\b/gi, 'fly'],
  [/\banxious\b/gi, 'hot'],
  [/\border\b/gi, 'army'],
  [/\bgather\b/gi, 'waste'],
  [/\bexplicit\b/gi, 'dim'],
  [/\bmolecule\b/gi, 'jot'],
  [/\bsearch\b/gi, 'chase'],
  [/\bpersistent\b/gi, 'firm'],
  [/\bgift\b/gi, 'aid'],
  [/\bpassionate\b/gi, 'cool'],
  [/\bmoral\b/gi, 'vile'],
  [/\barise\b/gi, 'set'],
  [/\bloyalty\b/gi, 'law'],
  [/\bdelegate\b/gi, 'get'],
  [/\bdiscriminate\b/gi, 'see'],
  [/\bgentle\b/gi, 'low'],
  [/\bexcuse\b/gi, 'air'],
  [/\bexcuse\b/gi, 'pay'],
  [/\bcourage\b/gi, 'hope'],
  [/\bcourage\b/gi, 'fear'],
  [/\bproposition\b/gi, 'axiom'],
  [/\bcompound\b/gi, 'mixed'],
  [/\bfranchise\b/gi, 'claim'],
  [/\bsubtle\b/gi, 'sly'],
  [/\brejection\b/gi, 'gate'],
  [/\bvisit\b/gi, 'doom'],
  [/\bdisturbance\b/gi, 'ease'],
  [/\bdisturbance\b/gi, 'care'],
  [/\bdisturbance\b/gi, 'calm'],
  [/\bdisturbance\b/gi, 'hush'],
  [/\bdissolve\b/gi, 'call'],
  [/\bclean\b/gi, 'wash'],
  [/\bclean\b/gi, 'pure'],
  [/\bclean\b/gi, 'nice'],
  [/\bclean\b/gi, 'TRUE'],
  [/\bprecedent\b/gi, 'end'],
  [/\bdifferentiate\b/gi, 'oppose'],
  [/\bconfuse\b/gi, 'buoy'],
  [/\bconfuse\b/gi, 'sort'],
  [/\bburden\b/gi, 'pack'],
  [/\bfrightened\b/gi, 'bold'],
  [/\brational\b/gi, 'TRUE'],
  [/\bhazardous\b/gi, 'sure'],
  [/\bsurrender\b/gi, 'cede'],
  [/\bsurrender\b/gi, 'whip'],
  [/\bmental\b/gi, 'moral'],
  [/\bcraft\b/gi, 'art'],
  [/\bcraft\b/gi, 'art'],
  [/\bcraft\b/gi, 'lie'],
  [/\bmandate\b/gi, 'rule'],
  [/\bmineral\b/gi, 'man'],
  [/\btrail\b/gi, 'mark'],
  [/\bautobiography\b/gi, 'story'],
  [/\bassault\b/gi, 'beset'],
  [/\bassault\b/gi, 'onset'],
  [/\bcirculate\b/gi, 'say'],
  [/\bshelter\b/gi, 'beset'],
  [/\bshelter\b/gi, 'cheer'],
  [/\bshelter\b/gi, 'peril'],
  [/\bshelter\b/gi, 'guard'],
  [/\binjustice\b/gi, 'law'],
  [/\bspecify\b/gi, 'say'],
  [/\bprostitute\b/gi, 'ruin'],
  [/\bobjection\b/gi, 'leave'],
  [/\bpunish\b/gi, 'try'],
  [/\bpunish\b/gi, 'pay'],
  [/\bstatute\b/gi, 'rule'],
  [/\bdiscriminate\b/gi, 'steal'],
  [/\bslow\b/gi, 'gay'],
  [/\bslow\b/gi, 'apt'],
  [/\beducate\b/gi, 'tutor'],
  [/\btrick\b/gi, 'art'],
  [/\btrick\b/gi, 'air'],
  [/\bbizarre\b/gi, 'odd'],
  [/\blong\b/gi, 'big'],
  [/\binability\b/gi, 'might'],
  [/\binspect\b/gi, 'see'],
  [/\bclear\b/gi, 'free'],
  [/\bcharming\b/gi, 'ugly'],
  [/\badmiration\b/gi, 'awe'],
  [/\bcreator\b/gi, 'end'],
  [/\brural\b/gi, 'rude'],
  [/\battain\b/gi, 'go'],
  [/\binsignificant\b/gi, 'big'],
  [/\bcomplicate\b/gi, 'imply'],
  [/\bnoise\b/gi, 'note'],
  [/\binjustice\b/gi, 'harm'],
  [/\bdecrease\b/gi, 'ebb'],
  [/\bgentle\b/gi, 'mild'],
  [/\bgentle\b/gi, 'sour'],
  [/\bgentle\b/gi, 'firm'],
  [/\bgentle\b/gi, 'mild'],
  [/\bgentle\b/gi, 'kind'],
  [/\bgentle\b/gi, 'sour'],
  [/\bgentle\b/gi, 'firm'],
  [/\bgentle\b/gi, 'soft'],
  [/\bexcuse\b/gi, 'plea'],
  [/\bexcuse\b/gi, 'cite'],
  [/\bexcuse\b/gi, 'doom'],
  [/\bliberal\b/gi, 'free'],
  [/\bdesperation\b/gi, 'hope'],
  [/\bliberal\b/gi, 'mean'],
  [/\bliberal\b/gi, 'full'],
  [/\bcontrary\b/gi, 'kind'],
  [/\bself-confidence\b/gi, 'doubt'],
  [/\bfraud\b/gi, 'art'],
  [/\bfraud\b/gi, 'lie'],
  [/\bplead\b/gi, 'say'],
  [/\bplead\b/gi, 'ask'],
  [/\bpersistence\b/gi, 'sloth'],
  [/\berror\b/gi, 'fact'],
  [/\bimpulse\b/gi, 'lust'],
  [/\bembarrass\b/gi, 'bar'],
  [/\bembarrass\b/gi, 'aid'],
  [/\bpreceding\b/gi, 'hind'],
  [/\bdenial\b/gi, 'bid'],
  [/\bmention\b/gi, 'hint'],
  [/\bimpatient\b/gi, 'hot'],
  [/\bforeigner\b/gi, 'native'],
  [/\bunreasonable\b/gi, 'apt'],
  [/\bshort\b/gi, 'low'],
  [/\bshort\b/gi, 'big'],
  [/\binequality\b/gi, 'unity'],
  [/\burge\b/gi, 'ask'],
  [/\benjoyment\b/gi, 'joy'],
  [/\benjoyment\b/gi, 'fun'],
  [/\benjoyment\b/gi, 'joy'],
  [/\bentry\b/gi, 'roll'],
  [/\bpray\b/gi, 'beg'],
  [/\battain\b/gi, 'win'],
  [/\bsteep\b/gi, 'low'],
  [/\bcompact\b/gi, 'war'],
  [/\bskepticism\b/gi, 'doubt'],
  [/\bunreasonable\b/gi, 'TRUE'],
  [/\bpersistence\b/gi, 'fixity'],
  [/\bstrand\b/gi, 'rim'],
  [/\bdate\b/gi, 'age'],
  [/\binvoke\b/gi, 'ask'],
  [/\bembarrass\b/gi, 'buoy'],
  [/\bconfine\b/gi, 'curb'],
  [/\bopenness\b/gi, 'art'],
  [/\bopenness\b/gi, 'lie'],
  [/\bopenness\b/gi, 'air'],
  [/\bincorrect\b/gi, 'TRUE'],
  [/\bunite\b/gi, 'sew'],
  [/\bgrasp\b/gi, 'get'],
  [/\bdeception\b/gi, 'lie'],
  [/\bskeleton\b/gi, 'plan'],
  [/\bdescent\b/gi, 'kind'],
  [/\bfurious\b/gi, 'cool'],
  [/\bfurious\b/gi, 'mild'],
  [/\bpatent\b/gi, 'open'],
  [/\baccepted\b/gi, 'sure'],
  [/\bgradual\b/gi, 'low'],
  [/\bpassing\b/gi, 'brief'],
  [/\bcommanding\b/gi, 'mild'],
  [/\bcommanding\b/gi, 'base'],
  [/\bunlimited\b/gi, 'brief'],
  [/\bdissatisfied\b/gi, 'snug'],
  [/\bpreclude\b/gi, 'let'],
  [/\bwound\b/gi, 'vex'],
  [/\bproficiency\b/gi, 'stay'],
  [/\bseverity\b/gi, 'pity'],
  [/\bskepticism\b/gi, 'belief'],
  [/\blight\b/gi, 'gay'],
  [/\blight\b/gi, 'dim'],
  [/\bstrain\b/gi, 'calm'],
  [/\bnonsense\b/gi, 'depth'],
  [/\bshade\b/gi, 'dark'],
  [/\bstainless\b/gi, 'pure'],
  [/\bstainless\b/gi, 'holy'],
  [/\bstainless\b/gi, 'TRUE'],
  [/\bunconditional\b/gi, 'mild'],
  [/\bantique\b/gi, 'aged'],
  [/\bdisconnect\b/gi, 'refer'],
  [/\bdoubt\b/gi, 'hope'],
  [/\bdoubt\b/gi, 'hope'],
  [/\bdoubt\b/gi, 'need'],
  [/\bfootprint\b/gi, 'mark'],
  [/\bcaution\b/gi, 'heed'],
  [/\bcaution\b/gi, 'zeal'],
  [/\bcaution\b/gi, 'care'],
  [/\bstripe\b/gi, 'box'],
  [/\billumination\b/gi, 'dark'],
  [/\bflame\b/gi, 'char'],
  [/\bflame\b/gi, 'dark'],
  [/\brelinquish\b/gi, 'cede'],
  [/\brelinquish\b/gi, 'cede'],
  [/\bvengeance\b/gi, 'pity'],
  [/\bvengeance\b/gi, 'pity'],
  [/\bdiscern\b/gi, 'see'],
  [/\bacute\b/gi, 'apt'],
  [/\bharmless\b/gi, 'mild'],
  [/\bharmless\b/gi, 'weak'],
  [/\bharmless\b/gi, 'pure'],
  [/\bcombat\b/gi, 'bout'],
  [/\bchoke\b/gi, 'aid'],
  [/\barchive\b/gi, 'roll'],
  [/\bschooling\b/gi, 'study'],
  [/\bloving\b/gi, 'sour'],
  [/\bloving\b/gi, 'kind'],
  [/\bloving\b/gi, 'sour'],
  [/\bcool\b/gi, 'hot'],
  [/\bsuccumb\b/gi, 'fly'],
  [/\bgradual\b/gi, 'dull'],
  [/\badventurous\b/gi, 'bold'],
  [/\bpropel\b/gi, 'get'],
  [/\bfavor\b/gi, 'cede'],
  [/\bfavor\b/gi, 'ruin'],
  [/\bfavor\b/gi, 'boon'],
  [/\bfavor\b/gi, 'love'],
  [/\bfavor\b/gi, 'pity'],
  [/\bapparatus\b/gi, 'weapon'],
  [/\bgrade\b/gi, 'set'],
  [/\bdeception\b/gi, 'trick'],
  [/\bcontrary\b/gi, 'unlike'],
  [/\bcontrary\b/gi, 'absurd'],
  [/\bmystical\b/gi, 'dark'],
  [/\bluminous\b/gi, 'dim'],
  [/\bmurmur\b/gi, 'blab'],
  [/\bmurmur\b/gi, 'laud'],
  [/\bstronghold\b/gi, 'fort'],
  [/\benlightenment\b/gi, 'depth'],
  [/\bsilence\b/gi, 'talk'],
  [/\bequitable\b/gi, 'TRUE'],
  [/\banalogous\b/gi, 'akin'],
  [/\breunite\b/gi, 'sew'],
  [/\bfrantic\b/gi, 'cool'],
  [/\bdissipate\b/gi, 'emit'],
  [/\bawait\b/gi, 'shun'],
  [/\bfurnish\b/gi, 'cede'],
  [/\binterchangeable\b/gi, 'like'],
  [/\bsickness\b/gi, 'vigor'],
  [/\bintrusive\b/gi, 'shy'],
  [/\bsubside\b/gi, 'ebb'],
  [/\bcapture\b/gi, 'stop'],
  [/\bcapture\b/gi, 'miss'],
  [/\bbias\b/gi, 'bow'],
  [/\bdeterioration\b/gi, 'admixture'],
  [/\bcompression\b/gi, 'pleonasm'],
  [/\bevidence\b/gi, 'fact'],
  [/\bevidence\b/gi, 'bias'],
  [/\bflicker\b/gi, 'dark'],
  [/\bself-sufficiency\b/gi, 'conceit'],
  [/\bdiscern\b/gi, 'find'],
  [/\binexplicable\b/gi, 'dark'],
  [/\bcognition\b/gi, 'lore'],
  [/\blessen\b/gi, 'ebb'],
  [/\bevil\b/gi, 'joy'],
  [/\bevil\b/gi, 'bad'],
  [/\bvalue\b/gi, 'deem'],
  [/\bvalue\b/gi, 'cost'],
  [/\badversity\b/gi, 'ill'],
  [/\baffinity\b/gi, 'kind'],
  [/\bunparalleled\b/gi, 'odd'],
  [/\binsult\b/gi, 'vex'],
  [/\bpunish\b/gi, 'visit'],
  [/\busage\b/gi, 'use'],
  [/\bconfound\b/gi, 'aid'],
  [/\bhook\b/gi, 'bar'],
  [/\binterchangeable\b/gi, 'joint'],
  [/\bheroic\b/gi, 'bold'],
  [/\bstiff\b/gi, 'soft'],
  [/\bhandy\b/gi, 'apt'],
  [/\bloyalty\b/gi, 'fealty'],
  [/\bpersuasion\b/gi, 'belief'],
  [/\baccomplice\b/gi, 'foe'],
  [/\baccomplice\b/gi, 'foe'],
  [/\baccomplice\b/gi, 'foe'],
  [/\bforgiving\b/gi, 'kind'],
  [/\bunite\b/gi, 'weld'],
  [/\bbuffet\b/gi, 'box'],
  [/\bhealthful\b/gi, 'ill'],
  [/\bhealthful\b/gi, 'bad'],
  [/\bmixed\b/gi, 'same'],
  [/\bcompulsive\b/gi, 'mild'],
  [/\bexasperation\b/gi, 'ire'],
  [/\bdwelling\b/gi, 'abode'],
  [/\bpetty\b/gi, 'big'],
  [/\bmiscarriage\b/gi, 'rout'],
  [/\bafflict\b/gi, 'try'],
  [/\bdefective\b/gi, 'holy'],
  [/\bdisdain\b/gi, 'awe'],
  [/\bdiscernible\b/gi, 'open'],
  [/\blitter\b/gi, 'lot'],
  [/\btrustworthy\b/gi, 'sure'],
  [/\btrustworthy\b/gi, 'TRUE'],
  [/\btrustworthy\b/gi, 'TRUE'],
  [/\bunqualified\b/gi, 'fit'],
  [/\billiterate\b/gi, 'wise'],
  [/\bmanifest\b/gi, 'dim'],
  [/\bcast\b/gi, 'get'],
  [/\bdeter\b/gi, 'aid'],
  [/\bideal\b/gi, 'type'],
  [/\bideal\b/gi, 'plan'],
  [/\bideal\b/gi, 'holy'],
  [/\boffensive\b/gi, 'kind'],
  [/\boffensive\b/gi, 'nice'],
  [/\bcheer\b/gi, 'fun'],
  [/\bcheer\b/gi, 'joy'],
  [/\bunveil\b/gi, 'bury'],
  [/\bparadox\b/gi, 'axiom'],
  [/\bpropel\b/gi, 'push'],
  [/\bcommotion\b/gi, 'calm'],
  [/\bcase\b/gi, 'end'],
  [/\bbargain\b/gi, 'pact'],
  [/\bbargain\b/gi, 'deal'],
  [/\bvocal\b/gi, 'oral'],
  [/\bimmaculate\b/gi, 'pure'],
  [/\bimmaculate\b/gi, 'holy'],
  [/\bimmaculate\b/gi, 'TRUE'],
  [/\bconjunction\b/gi, 'club'],
  [/\bdivide\b/gi, 'deny'],
  [/\bdivide\b/gi, 'deal'],
  [/\bsound\b/gi, 'ill'],
  [/\binduction\b/gi, 'proof'],
  [/\bjoke\b/gi, 'fun'],
  [/\bdisregard\b/gi, 'awe'],
  [/\bpreserve\b/gi, 'sell'],
  [/\bpreserve\b/gi, 'obey'],
  [/\bpreserve\b/gi, 'ruin'],
  [/\bessential\b/gi, 'need'],
  [/\bessential\b/gi, 'TRUE'],
  [/\bparaphrase\b/gi, 'cite'],
  [/\bpart\b/gi, 'lot'],
  [/\bconfound\b/gi, 'buoy'],
  [/\bevidence\b/gi, 'proof'],
  [/\binequity\b/gi, 'law'],
  [/\bconsequent\b/gi, 'end'],
  [/\bhamper\b/gi, 'bar'],
  [/\bblunt\b/gi, 'raw'],
  [/\bbatter\b/gi, 'whip'],
  [/\bheated\b/gi, 'cool'],
  [/\breplica\b/gi, 'copy'],
  [/\bantiquated\b/gi, 'old'],
  [/\byearning\b/gi, 'hot'],
  [/\bfurther\b/gi, 'and'],
  [/\bfurther\b/gi, 'aid'],
  [/\bfurther\b/gi, 'aid'],
  [/\bfurther\b/gi, 'now'],
  [/\bdistressed\b/gi, 'snug'],
  [/\bquick\b/gi, 'apt'],
  [/\bdismal\b/gi, 'dim'],
  [/\bacute\b/gi, 'dull'],
  [/\bpertinent\b/gi, 'unlike'],
  [/\bcombat\b/gi, 'beset'],
  [/\bdisregard\b/gi, 'heed'],
  [/\bdisregard\b/gi, 'keep'],
  [/\bcolossal\b/gi, 'big'],
  [/\bamongst\b/gi, 'among'],
  [/\bharness\b/gi, 'mail'],
  [/\bsustenance\b/gi, 'diet'],
  [/\benlighten\b/gi, 'tutor'],
  [/\bconfide\b/gi, 'trust'],
  [/\bmaneuvering\b/gi, 'sly'],
  [/\bincidental\b/gi, 'inborn'],
  [/\bmiscalculation\b/gi, 'depth'],
  [/\bantecedent\b/gi, 'end'],
  [/\bcloak\b/gi, 'air'],
  [/\bupright\b/gi, 'pure'],
  [/\bupright\b/gi, 'TRUE'],
  [/\bendeavor\b/gi, 'end'],
  [/\bgrind\b/gi, 'roll'],
  [/\blifeless\b/gi, 'live'],
  [/\bdislodge\b/gi, 'ban'],
  [/\bcloudy\b/gi, 'dim'],
  [/\bcloudy\b/gi, 'dim'],
  [/\bstinging\b/gi, 'sour'],
  [/\boverture\b/gi, 'bid'],
  [/\babsent\b/gi, 'ready'],
  [/\breplenish\b/gi, 'plant'],
  [/\bgroup\b/gi, 'lot'],
  [/\bquaint\b/gi, 'new'],
  [/\bquaint\b/gi, 'odd'],
  [/\bcruelty\b/gi, 'rigor'],
  [/\bexpiration\b/gi, 'tip'],
  [/\bpush\b/gi, 'aid'],
  [/\bsurplus\b/gi, 'want'],
  [/\bexhausting\b/gi, 'hard'],
  [/\balert\b/gi, 'busy'],
  [/\balert\b/gi, 'live'],
  [/\balert\b/gi, 'dull'],
  [/\balert\b/gi, 'dull'],
  [/\bindefinite\b/gi, 'plain'],
  [/\bindefinite\b/gi, 'vague'],
  [/\bpeculiarity\b/gi, 'mark'],
  [/\badmonition\b/gi, 'blame'],
  [/\braise\b/gi, 'ebb'],
  [/\braise\b/gi, 'aid'],
  [/\bjuvenile\b/gi, 'late'],
  [/\brelish\b/gi, 'like'],
  [/\brelish\b/gi, 'lust'],
  [/\bbarbarian\b/gi, 'nice'],
  [/\bluxury\b/gi, 'waste'],
  [/\butter\b/gi, 'say'],
  [/\bconstant\b/gi, 'fixed'],
  [/\bdeed\b/gi, 'act'],
  [/\bcashier\b/gi, 'weld'],
  [/\bdissuade\b/gi, 'aid'],
  [/\binterminable\b/gi, 'brief'],
  [/\brefute\b/gi, 'say'],
  [/\bshrewd\b/gi, 'sly'],
  [/\bshrewd\b/gi, 'apt'],
  [/\bcountenance\b/gi, 'aid'],
  [/\bfrail\b/gi, 'ill'],
  [/\bcounterfeit\b/gi, 'sure'],
  [/\bswarm\b/gi, 'lot'],
  [/\bwasteful\b/gi, 'free'],
  [/\bnonsense\b/gi, 'paradox'],
  [/\ballegory\b/gi, 'myth'],
  [/\bchastise\b/gi, 'try'],
  [/\bdissimilar\b/gi, 'akin'],
  [/\bdissimilar\b/gi, 'same'],
  [/\blavish\b/gi, 'full'],
  [/\bwide\b/gi, 'big'],
  [/\bseverance\b/gi, 'love'],
  [/\bintoxication\b/gi, 'greed'],
  [/\bsever\b/gi, 'sew'],
  [/\baffinity\b/gi, 'parity'],
  [/\bdeformity\b/gi, 'blot'],
  [/\bstray\b/gi, 'err'],
  [/\bblind\b/gi, 'art'],
  [/\bcurve\b/gi, 'bow'],
  [/\bpretext\b/gi, 'air'],
  [/\bglitter\b/gi, 'dark'],
  [/\bineffectual\b/gi, 'idle'],
  [/\breprimand\b/gi, 'warn'],
  [/\bimperceptible\b/gi, 'open'],
  [/\bessential\b/gi, 'unlike'],
  [/\bessential\b/gi, 'inborn'],
  [/\bessential\b/gi, 'needed'],
  [/\bdistrust\b/gi, 'hope'],
  [/\bintermission\b/gi, 'calm'],
  [/\bsquander\b/gi, 'waste'],
  [/\bbestow\b/gi, 'cede'],
  [/\bretiring\b/gi, 'shy'],
  [/\babstain\b/gi, 'end'],
  [/\baccession\b/gi, 'gate'],
  [/\bestrangement\b/gi, 'love'],
  [/\binterminable\b/gi, 'eonian'],
  [/\bthump\b/gi, 'box'],
  [/\bpetty\b/gi, 'mean'],
  [/\brenewal\b/gi, 'fixity'],
  [/\bmeager\b/gi, 'holy'],
  [/\bdeplore\b/gi, 'rue'],
  [/\bdisdain\b/gi, 'adore'],
  [/\bhitherto\b/gi, 'now'],
  [/\bdictatorial\b/gi, 'mild'],
  [/\bkeen\b/gi, 'apt'],
  [/\bkeen\b/gi, 'hot'],
  [/\bkeen\b/gi, 'apt'],
  [/\boblivion\b/gi, 'shame'],
  [/\boblivion\b/gi, 'mercy'],
  [/\bmeditate\b/gi, 'weigh'],
  [/\binscrutable\b/gi, 'dark'],
  [/\bremedy\b/gi, 'harm'],
  [/\bfright\b/gi, 'awe'],
  [/\bcheer\b/gi, 'buoy'],
  [/\bcheer\b/gi, 'hope'],
  [/\bcheer\b/gi, 'tire'],
  [/\bamnesty\b/gi, 'mercy'],
  [/\bstoop\b/gi, 'bow'],
  [/\bbetter\b/gi, 'mar'],
  [/\baffluence\b/gi, 'waste'],
  [/\buneasiness\b/gi, 'worry'],
  [/\bchastise\b/gi, 'whip'],
  [/\bindustrious\b/gi, 'busy'],
  [/\bindustrious\b/gi, 'lazy'],
  [/\bdeformed\b/gi, 'ugly'],
  [/\bdeformed\b/gi, 'holy'],
  [/\bdeformed\b/gi, 'nice'],
  [/\buninformed\b/gi, 'wise'],
  [/\binexorable\b/gi, 'soft'],
  [/\bsound\b/gi, 'TRUE'],
  [/\bsound\b/gi, 'TRUE'],
  [/\blodge\b/gi, 'club'],
  [/\binertia\b/gi, 'rest'],
  [/\bsecrete\b/gi, 'say'],
  [/\bsecrete\b/gi, 'own'],
  [/\bcongenital\b/gi, 'inborn'],
  [/\breprimand\b/gi, 'blame'],
  [/\boppress\b/gi, 'ruin'],
  [/\bimpartiality\b/gi, 'law'],
  [/\bentrust\b/gi, 'trust'],
  [/\bdialect\b/gi, 'idiom'],
  [/\bblunt\b/gi, 'rude'],
  [/\bblunt\b/gi, 'nice'],
  [/\bpamper\b/gi, 'pet'],
  [/\bmerciless\b/gi, 'nice'],
  [/\bveil\b/gi, 'own'],
  [/\banathema\b/gi, 'ban'],
  [/\bmournful\b/gi, 'base'],
  [/\bcowardly\b/gi, 'bold'],
  [/\bamenable\b/gi, 'firm'],
  [/\bamenable\b/gi, 'kind'],
  [/\beject\b/gi, 'ban'],
  [/\bwrong\b/gi, 'law'],
  [/\bmonstrosity\b/gi, 'case'],
  [/\bimpact\b/gi, 'clash'],
  [/\bunchanging\b/gi, 'fixed'],
  [/\bshrewd\b/gi, 'dull'],
  [/\bshame\b/gi, 'joy'],
  [/\bquick\b/gi, 'busy'],
  [/\bquick\b/gi, 'live'],
  [/\bfanaticism\b/gi, 'zeal'],
  [/\bdivulge\b/gi, 'bury'],
  [/\bpreclude\b/gi, 'obviate'],
  [/\boriginator\b/gi, 'end'],
  [/\bunconscious\b/gi, 'deaf'],
  [/\blatent\b/gi, 'open'],
  [/\bnovelty\b/gi, 'fixity'],
  [/\bquarrel\b/gi, 'fray'],
  [/\binfallible\b/gi, 'TRUE'],
  [/\binfallible\b/gi, 'sure'],
  [/\bcloak\b/gi, 'bury'],
  [/\bcloak\b/gi, 'hide'],
  [/\bbodily\b/gi, 'moral'],
  [/\bself-restraint\b/gi, 'ire'],
  [/\bscorn\b/gi, 'awe'],
  [/\bdissension\b/gi, 'fray'],
  [/\bimpartiality\b/gi, 'right'],
  [/\bflare\b/gi, 'dark'],
  [/\bgroup\b/gi, 'host'],
  [/\bgroup\b/gi, 'sort'],
  [/\btrance\b/gi, 'fact'],
  [/\breferee\b/gi, 'umpire'],
  [/\bfastidious\b/gi, 'nice'],
  [/\bclique\b/gi, 'set'],
  [/\bepoch\b/gi, 'age'],
  [/\bevict\b/gi, 'ban'],
  [/\bfright\b/gi, 'fear'],
  [/\bdegraded\b/gi, 'low'],
  [/\bannotation\b/gi, 'note'],
  [/\blife-giving\b/gi, 'bad'],
  [/\boriginator\b/gi, 'doer'],
  [/\bprejudice\b/gi, 'harm'],
  [/\benliven\b/gi, 'tire'],
  [/\bupstart\b/gi, 'late'],
  [/\bblemish\b/gi, 'mar'],
  [/\bmournful\b/gi, 'woful'],
  [/\braise\b/gi, 'sink'],
  [/\brelapse\b/gi, 'stay'],
  [/\brelapse\b/gi, 'cure'],
  [/\bvomit\b/gi, 'emit'],
  [/\bindecision\b/gi, 'belief'],
  [/\bsling\b/gi, 'get'],
  [/\btoken\b/gi, 'sign'],
  [/\btoken\b/gi, 'note'],
  [/\btoken\b/gi, 'mark'],
  [/\bconcise\b/gi, 'neat'],
  [/\bunadulterated\b/gi, 'TRUE'],
  [/\bcompendium\b/gi, 'digest'],
  [/\bcaptivating\b/gi, 'winning'],
  [/\bfondness\b/gi, 'regard'],
  [/\bgrunt\b/gi, 'laud'],
  [/\bsever\b/gi, 'weld'],
  [/\bpremeditated\b/gi, 'read'],
  [/\bself-restraint\b/gi, 'greed'],
  [/\bnocturnal\b/gi, 'nightly'],
  [/\boceanic\b/gi, 'naval'],
  [/\bgloom\b/gi, 'dark'],
  [/\bswearing\b/gi, 'ban'],
  [/\bnudity\b/gi, 'garb'],
  [/\bbrief\b/gi, 'plan'],
  [/\bbrief\b/gi, 'neat'],
  [/\bsinful\b/gi, 'vile'],
  [/\bindomitable\b/gi, 'firm'],
  [/\bsight\b/gi, 'army'],
  [/\binfatuated\b/gi, 'TRUE'],
  [/\bapathy\b/gi, 'coma'],
  [/\bjumble\b/gi, 'sort'],
  [/\bensue\b/gi, 'heed'],
  [/\bbanter\b/gi, 'fun'],
  [/\bsameness\b/gi, 'unity'],
  [/\bmockery\b/gi, 'chaff'],
  [/\bgallant\b/gi, 'bold'],
  [/\bdisdain\b/gi, 'vanity'],
  [/\bmagnanimous\b/gi, 'mean'],
  [/\babsolve\b/gi, 'doom'],
  [/\borganic\b/gi, 'trial'],
  [/\bapportion\b/gi, 'deny'],
  [/\bcensure\b/gi, 'plea'],
  [/\bcensure\b/gi, 'cite'],
  [/\bcensure\b/gi, 'doom'],
  [/\bcensure\b/gi, 'warn'],
  [/\bdissociate\b/gi, 'refer'],
  [/\bcoldness\b/gi, 'zeal'],
  [/\bforetell\b/gi, 'bode'],
  [/\bconvocation\b/gi, 'host'],
  [/\bpalliative\b/gi, 'trial'],
  [/\bappellation\b/gi, 'style'],
  [/\bdepreciate\b/gi, 'laud'],
  [/\bschool\b/gi, 'tutor'],
  [/\babsent-minded\b/gi, 'ready'],
  [/\bally\b/gi, 'foe'],
  [/\bally\b/gi, 'aid'],
  [/\bally\b/gi, 'foe'],
  [/\bally\b/gi, 'aid'],
  [/\bally\b/gi, 'foe'],
  [/\bemployed\b/gi, 'lazy'],
  [/\bemployed\b/gi, 'busy'],
  [/\bdetach\b/gi, 'steal'],
  [/\boutside\b/gi, 'among'],
  [/\btwine\b/gi, 'bow'],
  [/\bthoroughgoing\b/gi, 'trial'],
  [/\bamelioration\b/gi, 'harm'],
  [/\bdrudgery\b/gi, 'rest'],
  [/\blucid\b/gi, 'dim'],
  [/\blucid\b/gi, 'dim'],
  [/\bdiaphanous\b/gi, 'dim'],
  [/\bglimmer\b/gi, 'dark'],
  [/\bdisjunction\b/gi, 'schism'],
  [/\bpredicate\b/gi, 'say'],
  [/\bconstant\b/gi, 'regular'],
  [/\beject\b/gi, 'emit'],
  [/\bwrong\b/gi, 'ruin'],
  [/\bwrong\b/gi, 'plea'],
  [/\bwrong\b/gi, 'harm'],
  [/\bfancy\b/gi, 'fact'],
  [/\bfancy\b/gi, 'plan'],
  [/\bwariness\b/gi, 'heed'],
  [/\bwariness\b/gi, 'zeal'],
  [/\bbeseech\b/gi, 'beg'],
  [/\bbeseech\b/gi, 'ask'],
  [/\bbeseech\b/gi, 'ask'],
  [/\bseason\b/gi, 'age'],
  [/\byielding\b/gi, 'mild'],
  [/\byielding\b/gi, 'firm'],
  [/\byielding\b/gi, 'soft'],
  [/\bshame\b/gi, 'buoy'],
  [/\blethargy\b/gi, 'care'],
  [/\blethargy\b/gi, 'coma'],
  [/\bpreliminary\b/gi, 'hind'],
  [/\bassent\b/gi, 'deny'],
  [/\bheady\b/gi, 'firm'],
  [/\bconstancy\b/gi, 'sloth'],
  [/\buproot\b/gi, 'set'],
  [/\blash\b/gi, 'box'],
  [/\bdepreciate\b/gi, 'lower'],
  [/\bunrequited\b/gi, 'joint'],
  [/\bblank\b/gi, 'void'],
  [/\bmollify\b/gi, 'fan'],
  [/\binhabited\b/gi, 'void'],
  [/\bextort\b/gi, 'beg'],
  [/\bincapacity\b/gi, 'sense'],
  [/\bincapacity\b/gi, 'might'],
  [/\brapturous\b/gi, 'gay'],
  [/\bdelirium\b/gi, 'mania'],
  [/\boutward\b/gi, 'inborn'],
  [/\bdirect\b/gi, 'let'],
  [/\bhallowed\b/gi, 'impure'],
  [/\bpretender\b/gi, 'cheat'],
  [/\btruism\b/gi, 'saw'],
  [/\bimpolite\b/gi, 'raw'],
  [/\bscorn\b/gi, 'like'],
  [/\bscorn\b/gi, 'hate'],
  [/\bscorn\b/gi, 'hark'],
  [/\bruffled\b/gi, 'cool'],
  [/\bdrowsy\b/gi, 'dull'],
  [/\bdrowsy\b/gi, 'dull'],
  [/\bimpel\b/gi, 'get'],
  [/\bstoicism\b/gi, 'awe'],
  [/\bfitted\b/gi, 'fit'],
  [/\bpresage\b/gi, 'bode'],
  [/\bpresage\b/gi, 'note'],
  [/\blance\b/gi, 'get'],
  [/\breturn\b/gi, 'pay'],
  [/\bvilify\b/gi, 'ruin'],
  [/\bmystic\b/gi, 'dark'],
  [/\bchattering\b/gi, 'silent'],
  [/\bfaint-hearted\b/gi, 'dim'],
  [/\bdisgrace\b/gi, 'dye'],
  [/\bgrand\b/gi, 'big'],
  [/\bdestitution\b/gi, 'want'],




  [/without/gi,'w/o'],
  [/with/gi,'w/'],

  [/in my humble opinion/gi, 'IMHO'],
  [/in real life/gi, 'IRL'],
  [/just kidding/gi, 'JK'],
  [/see you later/gi, 'cul8r'],

  [/cc/gi, '㏄'],
  [/ms/gi, '㎳'],
  [/ns/gi, '㎱'],
  [/ps/gi, '㎰'],
  [/in/gi, '㏌'],
  [/ls/gi, 'ʪ'],
  [/fi/gi, 'ﬁ'],
  [/fl/gi, 'fl'],
  [/ffl/gi, 'ﬄ'],
  [/ffi/gi, 'ﬃ'],
  [/iv/gi, 'ⅳ'],
  [/ix/gi, 'ⅸ'],
  [/vi/gi, 'ⅵ'],
  [/oy/gi, 'ѹ'],
  [/ii/gi, 'ⅱ'],
  [/xi/gi, 'ⅺ'],
  [/nj/gi, 'ǌ'],

  [/letters/gi, 'ltrs'],
  [/you are/gi, 'ur'],
  [/your/gi, 'ur'],
  [/I\'m/gi, 'Im'],

  [/\btrigononmetry\b/gi, 'trig'],
  [/\bapplication\b/gi, 'app'],
  [/\bIowaState\b/gi, 'ISU'],
  [/\biowastate\b/gi, 'isu'],
  [/\bSeptember\b/gi, 'Sep'],
  [/\bprogramming\b/gi, 'prgmg'],
  [/\bdepartment\b/gi, 'dept'],
  [/\bFacebook\b/gi, 'FB'],
  [/\bdownload\b/gi, 'DL'],
  [/\bFebruary\b/gi, 'Feb'],
  [/\bNovember\b/gi, 'Nov'],
  [/\bDecember\b/gi, 'Dec'],
  [/\bprogrammer\b/gi, 'prgmr'],
  [/\bretweet\b/gi, 'RT'],
  [/\bbefore\b/gi, 'b4'],
  [/\bJanuary\b/gi, 'Jan'],
  [/\bOctober\b/gi, 'Oct'],
  [/\bgoodbye\b/gi, 'bye'],
  [/\bgeneral\b/gi, 'gen'],
  [/\bdoctor\b/gi, 'dr'],
  [/\bstreet\b/gi, 'st'],
  [/\btomorrow\b/gi, 'tmrw'],
  [/\bcalculus\b/gi, 'calc'],
  [/\bbiology\b/gi, 'bio'],
  [/\bmeeting\b/gi, 'mtg'],
  [/\bpopular\b/gi, 'pop'],
  [/\bPopular\b/gi, 'pop'],
  [/\bAugust\b/gi, 'Aug'],
  [/\bhello\b/gi, 'hi'],
  [/\bmanage\b/gi, 'mng'],
  [/\bprogram\b/gi, 'prgm'],
  [/\bgallon\b/gi, 'gal'],
  [/\bminute\b/gi, 'min'],
  [/\bminutes\b/gi, 'mins'],
  [/\bletter\b/gi, 'ltr'],
  [/\bimportant\b/gi, 'imptnt'],
  [/\bthanks\b/gi, 'thx'],
  [/\bokay\b/gi, 'k'],
  [/\bwassup\b/gi, 'sup'],
  [/\bavenue\b/gi, 'ave'],
  [/\bhighlight\b/gi, 'hilite'],
  [/\bsomething\b/gi, 'sumthg'],
  [/\bsomeone\b/gi, 'sum1'],
  [/\bMarch\b/gi, 'Mar'],
  [/\bApril\b/gi, 'Apr'],
  [/\bforever\b/gi, '4ever'],
  [/\bwater\b/gi, 'H20'],
  [/\biPhone\b/gi, 'iphn'],
  [/\bandroid\b/gi, 'droid'],
  [/\bgreen\b/gi, 'grn'],
  [/\byellow\b/gi, 'yllw'],
  [/\balgebra\b/gi, 'algbr'],
  [/\banimal\b/gi, 'anml'],
  [/\bnever\b/gi, 'nvr'],
  [/\bsomebody\b/gi, 'sumbdy'],
  [/\banyone\b/gi, 'any1'],
  [/\bwould\b/gi, 'wld'],
  [/\bcould\b/gi, 'cld'],
  [/\bour\b/gi, 'r'],
  [/\bwhat\b/gi, 'wat'],
  [/\bJune\b/gi, 'Jun'],
  [/\bJuly\b/gi, 'Jul'],
  [/\bapple\b/gi, 'appl'],
  [/\bblue\b/gi, 'blu'],
  [/\bblack\b/gi, 'blck'],
  [/\bbrown\b/gi, 'brwn'],
  [/\btoday\b/gi, '2day'],
  [/\blove\b/gi, 'luv'],

  [/\bdefinitely\b/gi, 'def'],
  [/\bfacebook\b/gi, 'FB'],
  [/\byoutube\b/gi, 'YT'],
  [/about/gi, 'abt'],
  [/before/gi, 'bf'],
  [/\btext\b/gi, 'txt'],
  [/\blike\b/gi, 'lk'],
  //[/\bwill\b/gi, 'n'],
  [/\bthen\b/gi, 'thn'],
  //[/\bthis\b/gi, 'dis'],
  [/\bwhen\b/gi, 'whn'],
  [/\bsomething\b/gi, 'smth'],
  [/n\'t\b/gi, 'nt'],

  [/\bplease retweet\b/gi, 'PRT'],
  [/\bhat tip\b/gi, 'HT'],
  [/\bcharacters\b/gi, 'letters'],
  [/\bbye for now\b/gi, 'BFN'],
  [/\bur welcome\b/gi, 'YW'],
  [/\bunfortunately\b/gi, 'alas'],
  [/\bhigh\ 5\b/gi, '^5'],

  [/\bto+\b/gi, '2'],
  [/\byou\b/gi, 'u'],
  [/\band\b/gi, '&'],
  [/\byour\b/gi, 'ur'],
  [/\bat\b/gi, '@'],
  [/\bwhy\b/gi, 'y'],
  [/\bbe+\b/gi, 'b'],

  [/\? /g, '?'],
  [/\! /g, '!']

  //synymons for plurals, preserve capitalization, smarter ordering
  //more 1337 speak
  //user input
  //preserve urls and hashags
  //goal words: algorithm, replacements, substitutions, approximations
];

function transformService(s, max) {
  var i = 0, len = replaceText.length;
  while (i <len && s.length > max) {
    var v = replaceText[i];
    s = s.replace(v[0], v[1]);
    i++;
  }
  return s;
}
