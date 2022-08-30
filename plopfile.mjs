import path from 'path'
import fs from 'fs'
const componentsDir = path.join(process.cwd(), 'src/components')
const components = fs.readdirSync(componentsDir)
export default function (plop) {
    // controller generator
    plop.setGenerator('controller', {
        description: 'application controller logic',
        prompts: [
            // コンポーネントの名前
            {
                type: 'input',
                name: 'name',
                message: `What is component name?`,
            },
            // コンポーネント作成先のフォルダ
            {
                type: 'list',
                name: 'folder',
                message: 'Which folder does this component belong to?',
                choices: ['components', 'pages'],
            },
            // {
            //     type: 'list',
            //     name: 'makeFolder',
            //     message: 'make new folder?',
            //     choices: ['Yes', 'No'],
            // },
            // components直下に新たにフォルダを作る場合
            // {
            //     type: 'input',
            //     name: 'newFolder',
            //     message: 'What is new folder name?',
            //     when: ({ folder, makeFolder }) =>
            //         !folder || (makeFolder && folder === 'In ROOT' && makeFolder === 'Yes'),
            // },
        ],
        actions: (answers) => {
            const componentGeneratePath =
                answers.folder === 'components' ? 'src/components/' : 'src/pages/'
            return [
                {
                    type: 'add',
                    path: `${componentGeneratePath}/{{properCase name}}/{{properCase name}}.tsx`,
                    templateFile: 'plop-templates/Component.tsx.hbs',
                },
                {
                    type: 'add',
                    path: `${componentGeneratePath}/{{properCase name}}/{{properCase name}}.stories.tsx`,
                    templateFile: 'plop-templates/Component.stories.tsx.hbs',
                },
                {
                    type: 'add',
                    path: `${componentGeneratePath}/{{properCase name}}/{{properCase name}}.test.tsx`,
                    templateFile: 'plop-templates/Component.test.tsx.hbs',
                },
            ]
        },
    })
}
