import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'image-text-two-rows',
    label: 'Employee',
    category: 'text-image',
    component: 'sw-cms-block-image-text-two-rows',
    previewComponent: 'sw-cms-preview-image-text-two-rows',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        'left-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' },
                    minHeight: { source: 'static', value: '300px' }
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_plant_small.jpg'
                    }
                }
            }
        },
        'top-right': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h2 style="text-align: center;">Name</h2>
                        <p style="text-align: center;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        `.trim()
                    }
                }
            }
        },
        'bottom-right': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h2 style="text-align: center;">Occupation</h2>
                        <p style="text-align: center;">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                        `.trim()
                    }
                }
            }
        }
    }
});
