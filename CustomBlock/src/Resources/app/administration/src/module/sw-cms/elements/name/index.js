import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'name',
    label: 'Employee name',
    component: 'sw-cms-el-name',
    configComponent: 'sw-cms-el-config-name',
    previewComponent: 'sw-cms-el-preview-name',
    defaultConfig: {
        content: {
            source: 'static',
            value: `
                <h2>Name</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            `.trim()
        },
        verticalAlign: {
            source: 'static',
            value: null
        }
    }
});