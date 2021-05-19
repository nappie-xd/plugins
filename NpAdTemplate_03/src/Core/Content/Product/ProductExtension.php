<?php declare(strict_types=1);

use NpAdTemplate_03\Core\Content\faq\faqDefinition;
use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Inherited;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToManyAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;

class ProductExtension {

    public function getDefinitionClass(): string {
        return ProductDefinition::class;
    }

    public function extendFields(FieldCollection $collection): void {
        $collection->add(
            (new ManyToManyAssociationField(
                'faq',
                faqDefinition::class,
                faqProductDefinition::class,
                'product_id',
                'faq_id'
            ))->addFlags(new Inherited())
        );
    }

}
