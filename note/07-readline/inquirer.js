// 第三方库 inquirer
// 提供了更加好用的交互式api方法
// 更多见github 
// https://github.com/SBoudrias/Inquirer.js
// 可以用这个做个cli的询问交互
const inquirer = require('inquirer')

const questions = [
  {
    type: 'confirm',
    name: 'isMan',
    message: "你是人?"
  },
  {
    type: 'input',
    name: 'name',
    message: "你叫什么名字?"
  },
  {
    type: 'number',
    name: 'age',
    message: "你多少岁?"
  },
  {
    type: 'password',
    name: 'pw',
    message: "密码?"
  },
  {
    type: 'list',
    name: 'sex',
    message: "性别?",
    choices: [
      {
        value: 1,
        name: '男'
      },
      {
        value: 2,
        name: '女'
      }
    ]
  },
  {
    type: 'rawlist',
    name: 'edu',
    message: "学历?",
    choices: [
      {
        value: 1,
        name: '专科'
      },
      {
        value: 2,
        name: '本科'
      },
      {
        value: 0,
        name: '硕士'
      }
    ]
  },
  {
    type: 'checkbox',
    name: 'skills',
    message: "技能?",
    choices: [
      {
        value: 1,
        name: 'js'
      },
      {
        value: 2,
        name: 'java'
      },
      {
        value: 0,
        name: '做饭'
      }
    ]
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(answers)
})