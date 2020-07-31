// 带判断的交互
const inquirer = require('inquirer')

const questions = [
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
      },
      {
        value: 0,
        name: '未知'
      }
    ]
  }
]

const prompt = async question => await inquirer.prompt(question)

const go = async () => {
  const { isMan } = await prompt({
    type: 'confirm',
    name: 'isMan',
    message: "你是人?"
  })
  if (isMan) {
    const answers = await prompt(questions)
    console.log(answers)
  } else {
    console.log('不是人')
  }
}

go()