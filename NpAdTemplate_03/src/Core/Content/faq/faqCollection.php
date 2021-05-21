<?php declare(strict_types=1);

namespace NpAdTemplate_03\Core\Content\faq;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @method void               add(FaqCollection $entity)
 * @method void               set(string $key, FaqCollection $entity)
 * @method FaqCollection[]    getIterator()
 * @method FaqCollection[]    getElements()
 * @method FaqCollection|null get(string $key)
 * @method FaqCollection|null first()
 * @method FaqCollection|null last()
 */
class FaqCollection extends EntityCollection
{
    protected function getExpectedClass(): string
    {
        return FaqEntity::class;
    }
}