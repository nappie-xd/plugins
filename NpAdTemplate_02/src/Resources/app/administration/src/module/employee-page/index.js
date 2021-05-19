import './page/employee-page-list';

const { Module } = Shopware;

 Module.register('employee-page', {
     type: 'plugin',
     name: 'bundle',
     titel: 'employee-page.general.mainMenuItemGeneral',
     description: 'employee-page.general.descriptionTextModule',
     color: '#4677bd',
     icon: 'default-avatar-single',

    routes: {
        index: {
            component: 'employee-page-list',
            path: 'index'
        },
    },
    
     navigation: [{
         label: 'employee-page.general.meinMenuItemGeneral',
         color: '#4677bd',
         path: 'employee.page.index',
         icon: 'default-avatar-single',
         position: 100
     }]
});