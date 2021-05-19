<?php declare(strict_types=1);

namespace NpAdTemplate_01\Storefront\Subscriber;

/*use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\System\SystemConfig\SystemConfigService;
use Shopware\Storefront\Pagelet\Footer\FooterPageletLoadedEvent;
use Shopware\Storefront\Pagelet\PageletLoadedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class FooterSubscriber implements EventSubscriberInterface {
    
    public function __construct(SystemConfigService $systemConfigService, EntityRepositoryInterface $productRepository)
    {
        $this->systemConfigService = $systemConfigService;
        $this->productRepository = $productRepository;        
    }
    
    public static function getSubscribedEvents()
    {
        return [
            FooterPageletLoadedEvent::class => 'onFooterPageletLoaded'
        ];
    }

    public function onFooterPageletLoaded(FooterPageletLoadedEvent $event): void {
        if(!$this->systemConfigService->get('NpAdTemplate_01.config.showInStorefront')) {
            return;
        }

        $products= $this->fetchProducts($event->getContext());

        $event->getPagelet()->addExtension('special_sales', $products);
    }

    private function fetchProducts(Context $context) {
        $criteria = new Criteria();
        $criteria->addAssociation('');
        $criteria->setLimit(5);

        $productCollection = $this->productRepository->search($criteria, $context)->getEntities();

        return $productCollection;
    }
} */