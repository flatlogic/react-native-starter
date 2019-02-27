/* eslint-disable max-len */
module.exports = function(plop) {
  plop.setGenerator('module', {
    description: 'Generates new module with or without redux connection',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Module name (Casing will be modified)'
      },
      {
        type: 'list',
        name: 'type',
        message: 'Choose Module type',
        choices: ['statefull', 'stateless']
      }
    ],
    actions(data) {
      const actions = [
        {
          type: 'add',
          path: 'src/modules/{{camelCase name}}/{{properCase name}}View.js',
          templateFile: 'generators/module/ModuleView.js.hbs'
        },
        {
          type: 'add',
          path:
            'src/modules/{{camelCase name}}/{{properCase name}}ViewContainer.js',
          templateFile: 'generators/module/ModuleViewContainer.js.hbs'
        }
      ];

      if (data.type === 'statefull') {
        actions.push({
          type: 'add',
          path: 'src/modules/{{camelCase name}}/{{properCase name}}State.js',
          templateFile: 'generators/module/ModuleState.js.hbs'
        });
        actions.push({
          type: 'modify',
          path: 'src/redux/reducer.js',
          pattern: /\/\/ ## Generator Reducer Imports/gi,
          template:
            "// ## Generator Reducer Imports\r\nimport {{camelCase name}} from '../modules/{{camelCase name}}/{{properCase name}}State';"
        });
        actions.push({
          type: 'modify',
          path: 'src/redux/reducer.js',
          pattern: /\/\/ ## Generator Reducers/gi,
          template: '// ## Generator Reducers\r\n  {{camelCase name}},'
        });
      }

      return actions;
    }
  });

  plop.setGenerator('component', {
    description: 'Generates new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (Casing will be modified)'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{properCase name}}.js',
        templateFile: 'generators/component/Component.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/__tests__/{{properCase name}}.spec.js',
        templateFile: 'generators/component/Component.spec.js.hbs'
      },
      {
        type: 'modify',
        path: 'src/components/index.js',
        pattern: /\/\/ ## Generator Components Imports/gi,
        template:
          "// ## Generator Components Imports\r\nimport {{properCase name}} from './{{properCase name}}';"
      },
      {
        type: 'modify',
        path: 'src/components/index.js',
        pattern: /\/\/ ## Generator Components Exports/gi,
        template: '// ## Generator Components Exports\r\n  {{properCase name}},'
      }
    ]
  });
};
