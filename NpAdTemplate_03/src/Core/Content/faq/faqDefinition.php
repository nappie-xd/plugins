<?php declare(strict_types=1);

namespace NpAdTemplate_03\Core\Content\faq;

use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;

class faqDefinition extends EntityDefinition
{

    public function getEntityName(): string
    {
        return 'faq';
    }

    public function getCollectionClass(): string
    {
        return faqCollection::class;
    }

    public function getEntityClass(): string
    {
        return faqEntity::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new Required(), new PrimaryKey()),
            (new StringField('question', 'question'))->addFlags(new Required()),
            (new StringField('answer', 'answer'))->addFlags(new Required()),
            new FkField('product_id', 'productId', ProductDefinition::class),
            new ManyToOneAssociationField(
                'product',
                'product_id',
                ProductDefinition::class,
                'id',
                false
            )
        ]);
    }
}