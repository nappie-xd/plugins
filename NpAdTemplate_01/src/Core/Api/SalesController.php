<?php declare(strict_types=1);

use Shopware\Core\Framework\Context;
use Shopware\Core\Content\Product\ProductEntity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

/**
 * @RouteScope(scopes={"api"})
 */

class SalesController extends AbstractController {
    /**
     * @var EntityRepositoryInterface
     */
    private $productRepository;

    public function __construct(EntityRepositoryInterface $productRepository)
    {
       $this->productRepository = $productRepository;
    }

    /**
     * @Route("/api/v{version}/_action/emzspecials/generate", name="api.custom.emzspecials.generate", methods={"POST"})
     * @return Response
     */

//    public function generate(): Response {
//      return new Response('', Response::HTTP_NO_CONTENT);
//   }

/*    private function getProductsOnSale(Context $context): ProductEntity { //what do I need here
        $criteria = new Criteria();
        $criteria->addFilter(new EqualsFilter('cheapest_price_accessor', '')); //help

        $products = $this->productRepository->search($criteria, $context)->getEntities();

        return $products;
    }*/

}