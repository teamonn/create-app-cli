#! /usr/bin/env node

const { program } = require('commander');

program.version('1.0.0') // -v 或者 --versions输出版本号

program
  .command('init <template> <project>')
  .description('初始化项目模版')
  .action((templateName, projectName) => {
    console.log(templateName, projectName)
  })

program
  .command('list')
  .description('查看所有可用的模版')
  .action(() => {
    console.log(
      `template-vue vue模板\n
      template-react react模板`
    )
  })

program.parse(process.argv);