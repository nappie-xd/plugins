<?php declare(strict_types=1);

namespace NpAdTemplate_03\Core\Content\Faq;

use Shopware\Core\Content\Product\ProductEntity;
use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityIdTrait;

class FaqEntity extends Entity {
    use EntityIdTrait;
    /**
     * @var int
     */
    protected $id;
    /**
     * @var string
     */
    protected $question;
    /**
     * @var string
     */
    protected $answer;

    /**
     * @var int
     */
    protected $productId;

    /**
     * @var ProductEntity
     */
    protected $product;

    /**
     * @return int
     */
    public function getId() {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getQuestion() {
        return $this->question;
    }

    /**
     * @param string|null $question
     */
    public function setQuestion(?string $question) {
        $this->question = $question;
    }

    /**
     * @return string|null
     */
    public function getAnswer() {
        return $this->answer;
    }

    /**
     * @param string|null $answer
     */
    public function setAnswer(?string $answer) {
        $this->answer = $answer;
    }

    /**
     * @return int
     */
    public function getProductId() {
        return $this->productId;
    }

    /**
     * @param integer|null $productId
     */
    public function setProductId(?int $productId) {
        $this->productId = $productId;
    }
    
    /**
     * @return void
     */
    public function getProduct() {
        return $this->product;
    }

    /**
     *
     * @param ProductEntity|null $product
     */
    public function setProduct(?ProductEntity $product) {
        $this->product = $product;
    }
}