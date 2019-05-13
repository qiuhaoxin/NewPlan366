const {NODE_ENV,BABEL_ENV}=process.env;

const cjs=BABEL_ENV==='cjs' || NODE_ENV==='test';
const prod=NODE_ENV==='production';

module.exports={
  presets:[
       [
           "@babel/env",
           {
              targets: {
                 firefox:'60',
                 chrome:'67',
                 safari:'11.1',
                 edge:'17',
              },
              useBuiltIns:'usage',
           }
       ],
       '@babel/react',
       'react-app',
  ],
  plugins:[
      cjs && '@babel/transform-modules-commonjs',
  ].filter(Boolean)
};