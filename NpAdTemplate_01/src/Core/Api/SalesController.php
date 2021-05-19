<?php declare(strict_types=1);

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;
use Shopware\Core\Framework\Context;
use Shopware\Core\Content\Product\ProductEntity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\RangeFilter as FilterRangeFilter;
use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

// /**
//  * @RouteScope(scopes={"api"})
//  */

// class SalesController extends AbstractController {
//     /**
//      * @var EntityRepositoryInterface
//      */
//     private $productRepository;

//     public function __construct(EntityRepositoryInterface $productRepository)
//     {
//        $this->productRepository = $productRepository;
//     }

//     /**
//      * @Route("/store-api/emzspecials", name="api.custom.emzspecials", methods={"GET"})
//      * @return Response
//      */

//     public function generate(Context $context): Response {
        
//         $products = $this->getProductsOnSale($context);

//         return new Response('', Response::HTTP_NO_CONTENT);
//     }
    

//     private function getProductsOnSale(Context $context): EntityCollection { //what do I need here
//         $criteria = new Criteria();
//         $criteria->addFilter(
//             new FilterRangeFilter('updated_at', [
//                 FilterRangeFilter::GTE => date('d-M-Y H:i:s',strtotime("-5 days")),
//                 FilterRangeFilter::LTE => date('d-M-Y H:i:s')
//             ])
//         ); //help

//         $products = $this->productRepository->search($criteria, $context)->getEntities();

//         dump($products);
//         die;
//         return $products;
//     }
// }