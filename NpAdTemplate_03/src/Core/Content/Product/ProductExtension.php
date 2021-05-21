<?php declare(strict_types=1);

namespace NpAdTemplate_03\Core\Content\Product;

use NpAdTemplate_03\Core\Content\Faq\FaqDefinition;
use NpAdTemplate_03\Core\Content\Faq\Aggregate\FaqProduct\FaqProductDefinition;
use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityExtension;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToManyAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\OneToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;

class ProductExtension extends EntityExtension {

    public function getDefinitionClass(): string {
        return ProductDefinition::class;
    }

    //OneToOne
    /*public function extendFields(FieldCollection $collection): void {
        $collection->add(
            new OneToOneAssociationField(
                'faq',
                'id',
                'product_id',
                FaqDefinition::class,
                true
            )
        );
    }*/

    //ManyToMany
    public function extendFields(FieldCollection $collection): void {
        $collection->add(
            new ManyToManyAssociationField(
                'faqs',
                FaqDefinition::class,
                FaqProductDefinition::class,
                'product_id',
                'faq_id'
            )
        );
    }

}
