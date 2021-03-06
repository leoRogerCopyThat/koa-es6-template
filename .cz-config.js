module.exports = {
  types: [
    {
      value: 'WIP',
      name: 'ð¡  WIP: å·¥ä½æ­£å¨è¿è¡ä¸­',
    },
    {
      value: 'feat',
      name: 'ð  feat: ä¸ä¸ªæ°åè½',
    },
    {
      value: 'fix',
      name: 'ð§  fix: ä¿®å¤ä¸ä¸ª BUG',
    },
    {
      value: 'refactor',
      name: 'ð¨  refactor: æ¢ä¸ä¿®å¤ BUG ä¹ä¸æ·»å åè½çä»£ç æ´æ¹ï¼ä»£ç éæ',
    },
    {
      value: 'release',
      name: 'ð³  release: åå¸ä¸ä¸ªæ°çåè¡ç',
    },
    {
      value: 'docs',
      name: 'ð  docs: ä»ææ¡£æ´æ¹',
    },
    {
      value: 'test',
      name: 'ð  test: æ·»å ç¼ºå¤±çæµè¯æçº æ­£ç°æçæµè¯',
    },
    {
      value: 'perf',
      name: 'â¡ï¸  perf: æé«æ§è½çæ´æ¹',
    },
    {
      value: 'chore',
      name: 'ð¬  chore: åæ´æå»ºæµç¨æè¾å©å·¥å·',
    },
    {
      value: 'workflow',
      name: 'ð¦  workflow: ä»å½±åå·¥ä½æµç¨çæ´æ¹ï¼ä¾å¦æ´æ°æå»ºç³»ç»æ CI ç­',
    },
    {
      value: 'style',
      name: 'ð  style: ä»£ç æ ·å¼ï¼ä¸å½±åä»£ç å«ä¹çæ´æ¹ï¼ç©ºæ ¼ãæ ¼å¼ãç¼ºå°åå·ç­ï¼',
    },
    {
      value: 'revert',
      name: 'â±  revert: æ¢å¤ commit',
    },
  ],

  // æå®ç¹å®é¡¹ç®çèå´
  scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],

  // éå®ä¹æ¶æ¯
  messages: {
    type: 'éæ©ä¸ç§ä½ çæäº¤ç±»å:',
    scope: 'éæ©ä¸ä¸ªscope (å¯é):',
    // å¦æ allowCustomScopes ä¸º true åä½¿ç¨
    customScope: 'Denote the SCOPE of this change:',
    subject: 'ç­è¯´æ:\n',
    body: 'é¿è¯´æï¼ä½¿ç¨"|"æ¢è¡(å¯é)ï¼\n',
    breaking: 'éå¼å®¹æ§è¯´æ (å¯é):\n',
    footer: 'å³èå³é­çissueï¼ä¾å¦ï¼#31, #34(å¯é):\n',
    confirmCommit: 'ç¡®å®æäº¤è¯´æ?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],

  // éå¶é¿åº¦
  subjectLimit: 100,
}
