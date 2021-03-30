#!/usr/bin/env node

const say = require('../')

// no callback, fire and forget
say.setEncoding('gbk')
say.speak('你好', 'Alex')
