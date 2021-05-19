import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'occupation',
    label: 'Employee Occupation',
    component: 'sw-cms-el-occupation',
    configComponent: 'sw-cms-el-config-occupation',
    previewComponent: 'sw-cms-el-preview-occupation',
    defaultConfig: {
        content: {
            source: 'static',
            value: `
                <h2>Occupation</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            `.trim()
        },
        verticalAlign: {
            source: 'static',
            value: null
        }
    }
});