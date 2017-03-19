# TypeScript Starter
### With Mocha Chai and Istanbul


**Install global testing modules.  Mocha is a testing framework, and Istanbul reports code coverage for your tests.**

```
npm i istanbul -g
npm i mocha -g
```

**Install typings (used for TypeScript)**

```
typings install env~mocha --global

typings install env~node --global

typings install dt~node --save-dev --global

typings install express

typings install chai

```




**Running Tests:**

```
npm test
```

**Running Coverage:**

```
npm run cover
```

**Preview Your Coverage**
You can preview coverage by going to `<ROOT>/coverage/lcov-report/index.html`


**More Information:**

**Mocha** - <https://mochajs.org/>

**Chai** - <http://chaijs.com//>

**Istanbul** - <https://github.com/gotwarlost/istanbul>

**Typings Info** - <https://github.com/typings/typings>


