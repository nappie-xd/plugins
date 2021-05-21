//import './page/faq-list'

import enGB from './snippet/en-GB.json';

const { Module } = Shopware;

Module.register('custom-module', {
    type: 'plugin',
    name: 'Custom-module',
    title: 'custom-module.general.mainMenuItemGeneral',
    description: 'custom.module.general.descriptionTextModule',
    color: '#ff3d58',
    icon: 'default-communication-speech-bubbles',
    //entity: 'faq',

    routes: {
        index: {
            component: 'custom-module-list',
            path: 'index'
        },
    },

    snippets: {
        'en-GB': enGB
    },

    /*detail: {
        component: 'faq-detail',
        path: 'detail/:id',
        meta: {
            parentPath: 'faq.list'
        }
    },*/
    
    navigation: [{
        id: 'sw-catalogue',
        label: 'global.sw-admin-menu.navigation.mainMenuItemCatalogue',
        color: '#57D9A3',
        icon: 'default-symbol-products',
        position: 20
    }, {
        id: 'custom-module',
        label: 'custom-module.general.mainMenuItemGeneral',
        color: '#ff3d58',
        path: /*'faq.faqmodule.list'*/ 'custom.module.index',
        icon: 'default-communication-speech-bubbles',
        parent: 'sw-catalogue',
        //privilege: 'faq.viewer',
        position: 100
    }]
})