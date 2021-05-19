<?php declare(strict_types=1);

namespace NpAdTemplate_03\Core\Content\faq;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @method void               add(faqCollection $entity)
 * @method void               set(string $key, faqCollection $entity)
 * @method faqCollection[]    getIterator()
 * @method faqCollection[]    getElements()
 * @method faqCollection|null get(string $key)
 * @method faqCollection|null first()
 * @method faqCollection|null last()
 */
class faqCollection extends EntityCollection
{
    protected function getExpectedClass(): string
    {
        return faqEntity::class;
    }
}