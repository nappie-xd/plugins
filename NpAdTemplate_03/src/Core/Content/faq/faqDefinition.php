<?php declare(strict_types=1);

namespace NpAdTemplate_03\Core\Content\Faq;

use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToManyAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\OneToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;

class FaqDefinition extends EntityDefinition
{
    public const ENTITY_NAME = 'faq';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    public function getCollectionClass(): string
    {
        return FaqCollection::class;
    }

    public function getEntityClass(): string
    {
        return FaqEntity::class;
    }

    // OneToOne
    /*protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new Required(), new PrimaryKey()),
            (new StringField('question', 'question'))->addFlags(new Required()),
            (new StringField('answer', 'answer'))->addFlags(new Required()),
            new FkField('product_id', 'productId', ProductDefinition::class),
            new OneToOneAssociationField(
                'product',
                'product_id',
                'id',
                ProductDefinition::class,
                false
            )
        ]);
    }*/

    //ManyToMany
    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new Required(), new PrimaryKey()),
            (new StringField('question', 'question'))->addFlags(new Required()),
            (new StringField('answer', 'answer'))->addFlags(new Required()),
            new FkField('product_id', 'productId', ProductDefinition::class),
            new ManyToManyAssociationField(
                'products',
                ProductDefinition::class,
                FaqProductDefinition::class,
                'faq_id',
                'product_id'
            )
        ]);
    }
}