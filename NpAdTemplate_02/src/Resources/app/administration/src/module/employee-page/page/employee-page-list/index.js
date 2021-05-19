import template from './employee-page-list.html.twig';

const { Component } = Shopware;
const { Criteria } = Shopware.Data;

Component.register('employee-page', {
    template,

    data() {
        return {
            repository: null,
            products: null
        };
    },

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },

    computed: {
        columns() {
            return this.getColumns();
        }
    },

    methods: {
        getColumns() {
            return [{
                property: 'image',
                label: this.$tc('employee-page.list.columnImage'),
                allowResize: true,
                primary: true
            }, {
                property: 'name',
                label: this.$tc('employee-page.list.columnName'),
                routerLink: 'employee.page.detail',
                inlineEdit: 'string',
                allowResize: true,
            }, {
                property: 'occupation',
                label: this.$tc('employee-page.list.columnOccupation'),
                inlineEdit: 'string',
                allowResize: true
            }]
        }
    }
})