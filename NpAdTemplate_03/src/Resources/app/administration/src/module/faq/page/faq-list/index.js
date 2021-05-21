/*import template from './faq-list.html.twig';

const { Component } = Shopware;
const { Criteria } = Shopware.Data;

Component.register('faq-list', {
    template,

    inject: [
        'repositoryFactory'
    ],

    data() {
        return {
            repository: null,
            faqs: null
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

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.repository = this.repositoryFactory.create('faq');

            this.repository.search(new Criteria(), Shopware.Context.api).then((result) => {
                this.faqs = result;
            });
        },

        getColumns() {
            return [{
                property: 'name',
                label: this.$tc('faq.list.columnName'),
                routerLink: 'faq.detail',
                inlineEdit: 'string',
                allowResize: 'true',
                primary: 'true'
            }, {
                property: 'question',
                label: this.$tc('faq.list.columnQuestion'),
                inlineEdit: 'string',
                allowResize: 'true'
            }, {
                property: 'answer',
                label: this.$tc('faq.list.columnAnswer'),
                inlineEdit: 'string',
                allowResize: 'true'
            }];
        }
    }
});*/